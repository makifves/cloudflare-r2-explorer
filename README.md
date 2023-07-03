# Cloudflare R2 Explorer with HTTP Auth for Workers

Cloudflare R2 Explorer with HTTP Auth for Workers

## Features

- Very quick bucket/folder navigation
- pdf, image, txt, markdown, csv, etc in-browser preview
- Drag-and-Drop upload
- Multiple files and folder uploads
- Create folders
- Rename files
- Download files
- Delete files
- Right click in file for extra options
- Multipart upload for big files
- Cloudflare Access validation using jwt

## Auth
Update the `src/index.js` for Auth

## Connect Buckets

Update the `wrangler.toml` with your R2 Buckets (You can setup as many Buckets as your want)

```
- wrangler.toml -
...
[[r2_buckets]]
binding = 'my-bucket-name'
bucket_name = 'my-bucket-name'
preview_bucket_name = 'my-bucket-name'
```

## Deploy to Your Cloudflare Workers Account

```bash
wrangler deploy
```