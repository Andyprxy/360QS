# 360 Quality Solutions — National SEO & Website Package

Production website: **https://360qualitysolutions.co.za/**. The package contains the website, four full service pages, branded image assets, diagram SVGs, and the existing invoice/quotation admin dashboard.

## Local preview versus published website

Open `index.html` directly to preview the website. The top-right admin icon now opens `admin/index.html` directly in local file mode, and service directory links are adapted for direct-file browsing. When published on GitHub Pages, the admin page and service pages retain clean URLs such as `/admin/` and `/services/iso-gap-analysis/`; the URL bar does not retain `index.html`. For a local preview that also shows clean URLs, run `python -m http.server 8000` from the website folder and open `http://localhost:8000/`.

Invoice and quotation documents display their terms **first**, followed by an **editable thank-you message**. The PDF exporter and print preview use the same order. Previously saved browser documents remain compatible.

## Deploy to GitHub Pages

1. Put **all files in this folder's contents**, including `.nojekyll`, `CNAME`, `favicon.ico`, `apple-touch-icon.png`, and `robots.txt`, at the repository root. Do not upload only the top folder.
2. Configure the custom domain `360qualitysolutions.co.za` in GitHub Pages and connect DNS to your GitHub Pages hosting. Enable HTTPS.
3. Confirm the final public URL loads `/favicon.ico`, `/favicon-48.png`, `/sitemap.xml`, `/robots.txt`, and all service pages without 404 responses.
4. In Google Search Console, verify `360qualitysolutions.co.za` and submit `https://360qualitysolutions.co.za/sitemap.xml`. Use URL Inspection for the homepage to request indexing.
5. Update your Google Business Profile website URL and social/business citations to `https://360qualitysolutions.co.za/`.

## Current public routes

- `/` — homepage and contact details
- `/services/iso-implementation/` — ISO 9001, 14001, 45001 and RTMS SANS 1395-1:2019; includes the entire relocated Frameworks section and Management Review Support deliverable
- `/services/iso-gap-analysis/` — gap analysis
- `/services/sheq-internal-audits/` — SHEQ internal audits
- `/services/statistical-analysis/` — statistical analysis; includes the relocated Beyond Compliance control-chart module
- `/admin/` — invoice / quotation editor (browser-local data, **public URL with no login**)

## Important: domain and URL migration

The former domain was `360qualitysolution.co.za` (singular *solution*). A domain change can temporarily affect search visibility. Set up **host-level 301 redirects** for the old domain and old city-specific service pages to the corresponding new URLs. GitHub Pages does not itself provide custom 301 redirect rules; configure redirects with your DNS/hosting proxy, e.g. Cloudflare. Keep old domain access and its redirects active during the transition.

Mapping:

- `https://360qualitysolution.co.za/` → `https://360qualitysolutions.co.za/`
- `/services/iso-implementation-pretoria/` (and `.html`) → `/services/iso-implementation/`
- `/services/iso-gap-analysis-pretoria/` (and `.html`) → `/services/iso-gap-analysis/`
- `/services/sheq-internal-audits-pretoria/` (and `.html`) → `/services/sheq-internal-audits/`
- `/services/statistical-analysis-pretoria/` (and `.html`) → `/services/statistical-analysis/`

After redirects work, use Search Console's **Change of Address** for the domain change. Check canonical URLs, keep the redirects active, and monitor indexing. We intentionally do not publish obsolete city-named HTML pages or folders in the new site; the redirects belong on the old host.

## Search-result favicon

- Actual company mark is embedded in the root `favicon.ico`, `favicon-48.png`, `apple-touch-icon.png`, `assets/images/favicon-192.png`, and `assets/images/favicon-512.png`.
- The homepage and service pages link to the root favicon. Google may take days or weeks to recrawl; it is not possible to guarantee exactly when a custom favicon appears in its results.
- Do not block `/favicon.ico` or the home page from crawlers. Keep favicon URLs stable.

## Consultative positioning & facts

Services include ISO management systems, gap analysis, internal auditing, statistical analysis and RTMS support. The agency provides **consulting and readiness support only**; independent bodies perform certification. The office is listed in contact details for clients, but the site does not describe service coverage as limited to one city.

Business email: `shibeRR@gmail.com`. Contact phone as provided: `+27 76 286 939` (verify length before publication). Hours: Monday–Saturday 09:00–18:00; Sunday closed.

## Admin note

`/admin/` is a client-side workspace and is **not secured** by authentication. Google noindex tags reduce indexing but do not protect confidentiality. Do not use the admin for sensitive client billing information on an unrestricted public website without server-side authentication, access controls, and secure storage. Invoices are saved to browser-local storage and PDFs exported on-device.

## Technical

Built with accessible HTML, CSS, JavaScript, original illustrations, JSON-LD structured data, Open Graph / Twitter metadata, responsive images, canonical links and XML sitemap. No deceptive keyword stuffing or ranking guarantees. The enquiry form opens an email draft (it does not submit to a backend).
