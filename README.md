# Cloudflare R2 Explorer with HTTP Auth for Workers

## Features

- Media files preview
- Drag-and-Drop upload
- Multiple files and folder uploads
- File and folder operations
- Multipart upload for big files

## Auth
Update the `src/index.js` for Auth

## Connect R2 Buckets

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