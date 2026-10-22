# Little Things — Personal Scrapbook

A private-feeling, static scrapbook for photos and daily notes. The page is powered by `memories.json`, so you can update the site by editing one file.

## Run locally

For the JSON-powered version, use Vercel or a local web server because browsers block `fetch()` from loading JSON when opening HTML directly as a file.

## Add a memory

Put your image in `images/`, then add an object to `memories.json`:

```json
{
  "date": "2026-10-23",
  "title": "A lovely day",
  "note": "Write your description here.",
  "images": ["images/my-photo.jpg"]
}
```

You can use PNG, JPG, WEBP, or GIF images. After editing, commit and push to GitHub; Vercel will redeploy automatically.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Push this folder to that repository.
3. Import the repository in Vercel.
4. Leave the framework preset as **Other** and the build command empty.
5. Deploy.

The website itself is static. Images and notes are included in your Git repository and served by Vercel; no application backend is used.
