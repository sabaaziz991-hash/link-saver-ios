# LinkBook SEO Website

Static SEO support site for LinkBook, built from source text in this repository (including `linkbook-ios-market-analysis.pdf`) and linking traffic to the main website: [linkbooked.com](https://linkbooked.com/).

## Files
- `index.html` - Homepage and core keyword targeting
- `bookmark-manager-ios-features.html` - Feature-focused landing page
- `linkbook-ios-market-analysis.html` - Highlights sourced from the local PDF report
- `private-bookmark-app-privacy.html` - Privacy and local-first positioning page
- `link-saver-ios-faq.html` - FAQ page with FAQ structured data
- `assets/styles.css` - Shared styles
- `assets/site.js` - Nav state + reveal animation behavior
- `assets/og-cover.svg` - OG/Twitter preview image
- `robots.txt`, `sitemap.xml`, `llms.txt` - Technical SEO files

## Deploy on GitHub Pages
1. Push this folder to a GitHub repository.
2. In GitHub repo settings, open **Pages**.
3. Set source to your default branch and root folder.
4. Wait for Pages deployment URL.

## Update base URL after deploy
The current canonical/sitemap base is set to:
`https://sabaaziz991-hash.github.io/link-saver-ios/`

If your actual Pages URL differs, update these files:
- `index.html`
- `bookmark-manager-ios-features.html`
- `linkbook-ios-market-analysis.html`
- `private-bookmark-app-privacy.html`
- `link-saver-ios-faq.html`
- `sitemap.xml`
- `robots.txt`

## Main external destination
All CTA links point to `https://linkbooked.com/` with UTM parameters for attribution.
