# Muhammad Tahir — original portfolio design

This package keeps the original Lovable portfolio's obsidian and bronze design, typography, hero layout, interactive Three.js architecture, metallic rings, company tabs, timeline and contact section. It is a standalone static website for GitHub Pages. No Lovable account or credits are needed to host it.

## Publish the ready-built website

1. Extract the ZIP on your computer. Do not upload the ZIP itself.
2. Upload the extracted contents to your GitHub repository. `index.html` must be at the repository root, beside `assets/` and `favicon.svg`.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select **main** and **/(root)**, then save.
5. GitHub will show the published website address when deployment finishes.

For the repository `Diplomat-Properties/tahir-leadership-portfolio`, the expected Pages address after publishing is `https://diplomat-properties.github.io/tahir-leadership-portfolio/`. This package does not publish or change that repository by itself.

If replacing an older version, remove the older website's files first or work in a new repository. Preserve any unrelated repository work. Do not place this package inside an extra folder on GitHub.

## Files included

- `index.html`, `favicon.svg`, `.nojekyll` and `assets/`: complete ready-built website.
- `assets/images/`: the latest supplied portrait, plus its transparent website cutout.
- `assets/logos/`: company logo files; the original Rise transparent logo and the supplied Rise image are both included.
- `assets/fonts/`: the original Manrope and Cormorant Garamond font families, served locally.
- `assets/documents/`: optional executive profile PDF and contact card. The PDF contains no qualifications.
- `source/`: complete editable React, TypeScript, CSS and Three.js source, with locked dependencies and original image files.
- `CONTENT_NOTES.md`: requested corrections and source notes.
- `.github/workflows/pages.yml`: optional manual GitHub Actions deployment, if you prefer Actions over branch deployment.

All website images, fonts, styles and JavaScript are included locally. Contact links open email, telephone or WhatsApp. There is no contact form backend.

## Edit and rebuild

Use Node.js 22.12 or later. In a terminal:

```bash
cd source
npm ci
npm run dev
```

Edit `source/src/Portfolio.tsx` for the page text and timeline, `source/src/lib/enterprises.ts` for company details and figures, and `source/src/styles.css` for styling. Replace images in `source/public/assets/` with files using the same names.

When finished:

```bash
npm run build
```

Copy everything inside `source/dist/` to the repository root, replacing the previous built files. Upload those changed files. The build uses relative paths and works under a GitHub repository subdirectory.

Opening the built page with a `file://` URL is not a supported preview because browser security restricts JavaScript modules. Use `npm run dev`, `npm run preview`, or GitHub Pages.

## Original design and asset notes

The visual source was retained from the original portfolio revision of 7 November 2026. Its server-dependent routing was replaced with a static entry point for GitHub Pages. Content corrections, a fifth enterprise tab, updated logo fitting and the latest portrait are the intended differences.

The original monochrome logo treatment is preserved in CSS; the supplied logo images remain available in their original colours. The new portrait cutout was prepared from the supplied black-suit photograph with a transparent background. The unedited photograph is also included.

The 3D scene uses WebGL where supported and retains the original CSS rings and floor as a fallback. Reduced-motion preferences disable pointer-driven movement.

Brand names and logos belong to their respective owners. Font licence information is included with the font assets.
