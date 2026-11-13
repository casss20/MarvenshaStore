/*!
 * Marvensha product grid: renders products.json (synced from the WhatsApp /
 * Meta Commerce Manager catalog) into <section id="products">.
 * Each card has an "Order on WhatsApp" button that opens
 * https://wa.me/<WHATSAPP_NUMBER>?text=<prefilled message, French by default>.
 *
 * Drop-in:
 *   <link rel="stylesheet" href="whatsapp-sync/widget/marvensha-products.css">
 *   <section id="products" data-source="products.json"></section>
 *   <script src="whatsapp-sync/widget/marvensha-products.js" defer></script>
 *
 * Optional config (before the script):
 *   <script>window.MARVENSHA_PRODUCTS_CONFIG = { whatsappNumber: "50947321971", lang: "fr" };</script>
 * No secrets here: this file only reads the public products.json.
 */
(function () {
  "use strict";

  var DEFAULTS = {
    mountSelector: "#products",
    source: "products.json",            // or "/api/products" for the serverless option
    whatsappNumber: "50947321971",      // +509 4732 1971, from the store's TikTok bio
    brandName: "MARVENSHA",             // confirmed spelling (founder, 2026-11-13)
    lang: "auto",                       // "fr", "en" or "auto" (French unless the browser is English)
    showCatalogLink: true,              // link to the full WhatsApp catalog (wa.me/c/<number>)
    placeholderImage: null              // defaults to an inline navy/gold monogram
  };

  var T = {
    fr: {
      eyebrow: "La boutique",
      title: "Nos bijoux disponibles",
      lead: "Choisissez votre pièce, puis commandez-la directement sur WhatsApp. Nous confirmons la gravure, le prix et la livraison avec vous.",
      order: "Commander sur WhatsApp",
      ask: "Demander sur WhatsApp",
      soldOut: "Épuisé",
      preorder: "Précommande",
      onRequest: "Prix sur demande",
      sale: "Promo",
      catalog: "Voir tout le catalogue sur WhatsApp",
      empty: "Les bijoux arrivent bientôt. Écrivez-nous sur WhatsApp pour voir les pièces disponibles.",
      error: "Le catalogue ne peut pas être chargé pour le moment. Écrivez-nous sur WhatsApp.",
      sample: "DONNÉES D'EXEMPLE : pas les vrais produits ni les vrais prix",
      msg: function (b, p) {
        return "Bonjour " + b + " ! Je voudrais commander : " + p.name +
          (p.retailer_id ? " (réf. " + p.retailer_id + ")" : "") +
          ".\nGravure souhaitée : \nMerci !";
      },
      msgGeneral: function (b) { return "Bonjour " + b + " ! Je voudrais voir vos bijoux disponibles."; },
      locale: "fr-FR"
    },
    en: {
      eyebrow: "The shop",
      title: "Available pieces",
      lead: "Pick your piece and order it directly on WhatsApp. We confirm the engraving, price and delivery with you.",
      order: "Order on WhatsApp",
      ask: "Ask on WhatsApp",
      soldOut: "Sold out",
      preorder: "Pre-order",
      onRequest: "Price on request",
      sale: "Sale",
      catalog: "See the full catalog on WhatsApp",
      empty: "New pieces are coming soon. Message us on WhatsApp to see what's available.",
      error: "The catalog can't load right now. Message us on WhatsApp.",
      sample: "SAMPLE DATA: not the real products or prices",
      msg: function (b, p) {
        return "Hello " + b + "! I'd like to order: " + p.name +
          (p.retailer_id ? " (ref. " + p.retailer_id + ")" : "") +
          ".\nEngraving: \nThank you!";
      },
      msgGeneral: function (b) { return "Hello " + b + "! I'd like to see your available pieces."; },
      locale: "en-US"
    }
  };

  function pickLang(cfg) {
    if (cfg.lang === "fr" || cfg.lang === "en") return cfg.lang;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "fr";
    return /^en\b/i.test(nav) ? "en" : "fr"; // French for fr, ht (Kreyòl) and everything else
  }

  function digits(n) { return String(n || "").replace(/\D/g, ""); }

  function waLink(number, text) {
    return "https://wa.me/" + digits(number) + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  function fmtPrice(value, currency, locale) {
    if (value === null || value === undefined || !currency) return null;
    try {
      return new Intl.NumberFormat(locale, { style: "currency", currency: currency, maximumFractionDigits: value % 1 ? 2 : 0 }).format(value);
    } catch (e) { return value + " " + currency; }
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text; // textContent: no HTML injection
    return e;
  }

  function placeholderSvg() {
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>" +
      "<rect width='400' height='400' fill='#0B2A5B'/>" +
      "<circle cx='200' cy='200' r='118' fill='none' stroke='#C9A24A' stroke-width='3'/>" +
      "<text x='200' y='238' text-anchor='middle' font-family='Georgia,serif' font-size='120' fill='#C9A24A'>M</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function safeUrl(u) {
    if (typeof u !== "string" || !u.trim()) return null;
    return /^\s*(javascript|vbscript|data):/i.test(u) ? null : u; // https URLs or relative paths only
  }

  function card(p, cfg, t) {
    var avail = String(p.availability || "in stock").toLowerCase();
    var soldOut = avail === "out of stock" || avail === "discontinued";
    var art = el("article", "mvp-card" + (soldOut ? " is-soldout" : ""));

    var media = el("div", "mvp-media");
    var img = el("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = p.name || "";
    img.src = safeUrl(p.image_url) || cfg.placeholderImage;
    img.onerror = function () { img.onerror = null; img.src = cfg.placeholderImage; };
    media.appendChild(img);
    if (soldOut) media.appendChild(el("span", "mvp-badge mvp-badge-muted", t.soldOut));
    else if (avail === "preorder" || avail === "available for order") media.appendChild(el("span", "mvp-badge", t.preorder));
    else if (p.sale_price) media.appendChild(el("span", "mvp-badge", t.sale));
    art.appendChild(media);

    var body = el("div", "mvp-body");
    body.appendChild(el("h3", "mvp-name", p.name));
    if (p.description) body.appendChild(el("p", "mvp-desc", p.description));

    var priceRow = el("p", "mvp-price");
    var main = fmtPrice(p.sale_price || p.price, p.currency, t.locale);
    if (main) {
      priceRow.appendChild(el("span", "mvp-price-now", main));
      if (p.sale_price) priceRow.appendChild(el("s", "mvp-price-was", fmtPrice(p.price, p.currency, t.locale)));
    } else {
      priceRow.appendChild(el("span", "mvp-price-ask", t.onRequest));
    }
    body.appendChild(priceRow);

    var btn = el("a", "mvp-btn", soldOut ? t.ask : t.order);
    btn.href = waLink(cfg.whatsappNumber, t.msg(cfg.brandName, p));
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.setAttribute("aria-label", (soldOut ? t.ask : t.order) + ": " + (p.name || ""));
    btn.insertBefore(waIcon(), btn.firstChild);
    body.appendChild(btn);

    art.appendChild(body);
    return art;
  }

  function waIcon() {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true"); s.setAttribute("class", "mvp-ico");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute("d", "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z");
    s.appendChild(path);
    return s;
  }

  function render(root, data, cfg, t) {
    root.classList.add("mvp-section");
    root.setAttribute("aria-labelledby", "mvp-title");
    root.textContent = "";
    var wrap = el("div", "mvp-wrap");

    if (data && data.sample_data) wrap.appendChild(el("p", "mvp-sample", t.sample));

    var head = el("header", "mvp-head");
    head.appendChild(el("p", "mvp-eyebrow", t.eyebrow));
    var h2 = el("h2", "mvp-title", t.title); h2.id = "mvp-title"; head.appendChild(h2);
    head.appendChild(el("span", "mvp-rule"));
    head.appendChild(el("p", "mvp-lead", t.lead));
    wrap.appendChild(head);

    var products = (data && Array.isArray(data.products)) ? data.products : [];
    if (!products.length) {
      var empty = el("div", "mvp-empty");
      empty.appendChild(el("p", null, data ? t.empty : t.error));
      var b = el("a", "mvp-btn", t.ask); b.href = waLink(cfg.whatsappNumber, t.msgGeneral(cfg.brandName));
      b.target = "_blank"; b.rel = "noopener"; b.insertBefore(waIcon(), b.firstChild);
      empty.appendChild(b);
      wrap.appendChild(empty);
    } else {
      var grid = el("div", "mvp-grid");
      // In-stock first, sold-out last; otherwise keep catalog order.
      products.slice().sort(function (a, b) {
        var sa = /out of stock|discontinued/i.test(a.availability || "") ? 1 : 0;
        var sb = /out of stock|discontinued/i.test(b.availability || "") ? 1 : 0;
        return sa - sb;
      }).forEach(function (p) { grid.appendChild(card(p, cfg, t)); });
      wrap.appendChild(grid);
    }

    if (cfg.showCatalogLink) {
      var foot = el("p", "mvp-foot");
      var a = el("a", "mvp-link", t.catalog);
      a.href = "https://wa.me/c/" + digits(cfg.whatsappNumber);
      a.target = "_blank"; a.rel = "noopener";
      foot.appendChild(a);
      wrap.appendChild(foot);
    }
    root.appendChild(wrap);
    root.setAttribute("data-mvp-count", String(products.length));
  }

  function init() {
    var user = window.MARVENSHA_PRODUCTS_CONFIG || {};
    var cfg = {};
    for (var k in DEFAULTS) cfg[k] = DEFAULTS[k];
    for (var k2 in user) cfg[k2] = user[k2];
    var root = document.querySelector(cfg.mountSelector);
    if (!root) { console.warn("[marvensha-products] mount point " + cfg.mountSelector + " not found"); return; }
    if (root.dataset.source) cfg.source = root.dataset.source;
    if (root.dataset.whatsapp) cfg.whatsappNumber = root.dataset.whatsapp;
    if (root.dataset.lang) cfg.lang = root.dataset.lang;
    if (!cfg.placeholderImage) cfg.placeholderImage = placeholderSvg();
    var t = T[pickLang(cfg)];

    // Inline data (used by the offline demo) wins over fetching.
    if (window.MARVENSHA_PRODUCTS_DATA) { render(root, window.MARVENSHA_PRODUCTS_DATA, cfg, t); return; }
    fetch(cfg.source, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (d) { render(root, d, cfg, t); })
      .catch(function (e) { console.warn("[marvensha-products]", e); render(root, null, cfg, t); });
  }

  window.MarvenshaProducts = { init: init, waLink: waLink, _t: T };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
