# Frontend Portfolio

Public portfolio repository with seven interactive frontend case studies.

## Local run

Open `index.html` directly or serve with any static server.

## Structure

- `index.html` - page markup
- `styles.css` - visual design
- `app.js` - content model and rendering
- `media/` - screenshots and showreel media
- `tools/` - local media generation helpers

## Showreel

The hero showreel is generated from `tools/showreel-capture.html`:

```bash
node tools/capture-showreel.mjs
```

The script writes `media/showreel.webm`, `media/showreel.mp4`, and `media/showreel-poster.jpg`.
Set `FFMPEG_PATH` if ffmpeg is not installed in one of the local fallback locations.

## Notes

This repository is intentionally separated from private work repositories.
