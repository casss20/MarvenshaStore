# Marvensha Jewelry Store

Static landing page for Marvensha Jewelry Store. Vercel serves this repository as a plain static site: there is no install or build step. `index.html` is at the repository root, and `vercel.json` only sets cache headers for `/media`.

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080.

The page keeps `<meta name="robots" content="noindex, nofollow">` so this draft stays out of search indexes. Product cards under `sample/` are placeholder artwork and sample catalog data, not live inventory.
