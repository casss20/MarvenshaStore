# Marvensha Jewelry Store

Landing page for Marvensha Jewelry Store, plus `collection.html`, `our-story.html`, and one serverless function. Vercel serves this repository with no install or build step. `index.html` is at the repository root. `vercel.json` only sets cache headers for `/media` and does not rewrite `/api`, so `api/products.js` is served at `/api/products`.

`GET /api/products` reads published rows from Supabase, using `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` from the Vercel project. The landing page does not mount that grid; the visible catalog is the photo section.

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080.

The page keeps `<meta name="robots" content="noindex, nofollow">` so this draft stays out of search indexes. Product cards under `sample/` are placeholder artwork and sample catalog data, not live inventory.
