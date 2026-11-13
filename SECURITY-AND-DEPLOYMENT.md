# Marvensha deployment and security checklist

## Changes in this package
- Collection now loads published products from `/api/products` and supports Load more (24 products per page).
- Catalog fields are inserted with safe DOM text nodes; image URLs allow HTTPS or same-origin HTTP for local preview.
- Static collection photos appear only if the live catalog is unreachable.
- API validates page/limit and limits each Supabase query to at most 49 rows.
- Added baseline security response headers and catalog loading/empty states.

## Required manual checks (NOT completed)
1. In Supabase, inspect the `public.products` table, grants, and all RLS policies. Ensure `anon` can SELECT published rows only and cannot write. Existing policies may broaden access. Never apply SQL blindly.
2. In Vercel, set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` for the correct deployment environments. Do not expose secret/service-role keys.
3. Visit `/api/products?page=0&limit=24` on production; check response and test empty, error and multiple-page cases.
4. Verify columns listed in `api/products.js` exist, especially `sort_order` and `visibility`.
5. Test all three languages, WhatsApp links, media and mobile navigation on the deployed site.
6. Replace provisional marketing content and confirm product images, prices, inventory, social accounts and store hours.
7. When launch is approved, remove `noindex, nofollow` from all three HTML pages, add canonical URLs, sitemap and robots.txt.
8. Consider a tested Content Security Policy and HSTS after verifying all external media/fonts and HTTPS behavior.

This package does not modify Supabase data, GitHub, Vercel, or credentials.
