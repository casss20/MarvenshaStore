/**
 * GET /api/products
 *
 * Published catalog rows for the product grid, in the same shape as products.json:
 * { source, sample_data, catalog_id, generated_at, count, products: [...] }.
 *
 * Rows come from Supabase PostgREST, ordered by sort_order. The URL and the
 * publishable key are read from SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY.
 * Both are set on the Vercel project. Do not hardcode either value.
 */

var COLUMNS = [
  "id",
  "retailer_id",
  "name",
  "description",
  "price",
  "sale_price",
  "price_display",
  "currency",
  "image_url",
  "additional_image_urls",
  "availability",
  "url",
  "visibility",
  "source"
].join(",");

var CACHE_HIT = "public, max-age=0, s-maxage=60, stale-while-revalidate=60";
var CACHE_MISS = "private, no-store";

function toNumber(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "string" && value.trim() === "") return null;
  var n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

function mapProduct(row) {
  var images = row && Array.isArray(row.additional_image_urls) ? row.additional_image_urls : [];
  return {
    id: row && row.id != null ? row.id : null,
    retailer_id: row && row.retailer_id != null ? row.retailer_id : null,
    name: row && row.name != null ? row.name : "",
    description: row && row.description != null ? row.description : null,
    price: toNumber(row && row.price),
    sale_price: toNumber(row && row.sale_price),
    price_display: row && row.price_display != null ? row.price_display : null,
    currency: row && row.currency != null ? row.currency : null,
    image_url: row && row.image_url != null ? row.image_url : null,
    additional_image_urls: images,
    availability: row && row.availability != null ? row.availability : null,
    url: row && row.url != null ? row.url : null,
    visibility: row && row.visibility != null ? row.visibility : null,
    review_status: null
  };
}

function productsUrl(raw, page, limit) {
  var parsed;
  try {
    parsed = new URL(raw);
  } catch (e) {
    return null;
  }
  if (parsed.protocol !== "https:" || parsed.username || parsed.password) return null;
  var url = new URL("/rest/v1/products", parsed.origin);
  url.search = "select=" + encodeURIComponent(COLUMNS) +
    "&visibility=eq.published" +
    "&order=" + encodeURIComponent("sort_order.asc.nullslast,id.asc") +
    "&limit=" + (limit + 1) + "&offset=" + (page * limit);
  return url;
}

function json(body, status, cache) {
  return new Response(JSON.stringify(body), {
    status: status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": cache
    }
  });
}

function empty(status) {
  return json({ products: [], count: 0, error: "catalog_unavailable" }, status, CACHE_MISS);
}

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, {
        status: 405,
        headers: { Allow: "GET, HEAD", "Cache-Control": CACHE_MISS }
      });
    }

    const requestUrl = new URL(request.url);
    const pageRaw = requestUrl.searchParams.get("page") || "0";
    const limitRaw = requestUrl.searchParams.get("limit") || "24";
    if (!/^(0|[1-9]\d{0,4})$/.test(pageRaw) || !/^(0|[1-9]\d{0,2})$/.test(limitRaw)) {
      return json({ error: "invalid_pagination" }, 400, CACHE_MISS);
    }
    const page = Number(pageRaw);
    const limit = Number(limitRaw);
    if (limit < 1 || limit > 48 || page * limit > 10000) {
      return json({ error: "invalid_pagination" }, 400, CACHE_MISS);
    }
    var supabaseUrl = process.env.SUPABASE_URL;
    var apiKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    var endpoint = supabaseUrl ? productsUrl(supabaseUrl, page, limit) : null;
    if (!endpoint || !apiKey) return empty(503);

    var upstream;
    try {
      upstream = await fetch(endpoint, {
        method: "GET",
        redirect: "manual",
        headers: {
          apikey: apiKey,
          Authorization: "Bearer " + apiKey,
          Accept: "application/json"
        }
      });
    } catch (e) {
      return empty(502);
    }

    if (!upstream.ok) return empty(502);

    var rows;
    try {
      rows = await upstream.json();
    } catch (e) {
      return empty(502);
    }
    if (!Array.isArray(rows)) return empty(502);

    var hasMore = rows.length > limit;
    var products = rows.slice(0, limit).map(mapProduct);
    var body = {
      source: "supabase",
      sample_data: products.length > 0 && rows.every(function (row) {
        return row && row.source === "sample";
      }),
      catalog_id: null,
      generated_at: new Date().toISOString(),
      count: products.length,
      page: page,
      limit: limit,
      has_more: hasMore,
      products: products
    };

    if (request.method === "HEAD") {
      return new Response(null, {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": CACHE_HIT
        }
      });
    }
    return json(body, 200, CACHE_HIT);
  }
};
