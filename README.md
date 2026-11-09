# DLauncher Website

A responsive, Minecraft-inspired fan-project website for DLauncher. It includes a home page, a separate download page, supplied hero artwork, and an original block-style mascot illustration.

## Files

- `index.html` — homepage.
- `download.html` — separate download page.
- `site-config.json` — the only file you need to edit for app version, download URL, status, and release notes.
- `styles.css` — website design.
- `app.js` — loads the download-page values from `site-config.json`.
- `assets/` — website artwork, mascot, and favicon.

## Update version or download URL without AI

Open `site-config.json` in GitHub and tap the pencil (Edit) button. Change these values:

```json
{
  "appName": "DLauncher",
  "version": "1.0.1",
  "versionLabel": "Latest release",
  "downloadUrl": "https://github.com/sokpanha10000-oss/DLauncher/releases/latest/download/DLauncher.apk",
  "status": "Latest release",
  "releaseNotes": [
    "Describe what changed in this version.",
    "Add another release note here."
  ]
}
```

Keep the JSON punctuation and quotation marks. `downloadUrl` must be a complete HTTPS link. After editing, commit the change. GitHub Pages will update the site after its deployment finishes. The version shown on the page is a label you maintain; set it to match the actual version inside the APK.

## Publish for free with GitHub Pages

1. Create a new **public** GitHub repository, for example `dlauncher-website`.
2. Upload the contents of this folder to the repository's root. Make sure `index.html` is at the root, not inside another nested folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Once deployment finishes, GitHub shows the public website address in the Pages section.

With a GitHub Free account, GitHub Pages is available for public repositories. The website can be updated by editing files in GitHub; no website builder or AI is needed for routine version/link changes.

## Important

- The download button uses the exact APK URL supplied for this setup.
- Check that the GitHub release and APK link are publicly accessible before announcing a release.
- Replace the starter version `1.0.0` with the real APK version before publishing.
- The supplied Minecraft artwork is used as provided. Make sure you have permission to publish it. DLauncher is presented as an independent project, not an official Minecraft product.
