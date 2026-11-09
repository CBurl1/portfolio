# Collin Burleigh's software engineering portfolio

Source for [collinburleigh.com](https://www.collinburleigh.com), a portfolio focused on Python backend and full-stack software. The site includes selected projects, experience, and a [one-page résumé](https://www.collinburleigh.com/resume).

## Featured work

| Project | What I built | Stack |
| --- | --- | --- |
| [Sentinel Insulation](https://sentinelinsulation.com/) | A custom quote tool that grew into a mobile-friendly field operations app for scheduling, installer work tickets, materials, supplier comparison, and job financials. I also rebuilt the WordPress site and manage its SEO. | Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Vercel, WordPress |
| [M2 InstaCount](https://m2instacount.com/) | Barcode counts, receiving, discrepancy review, and scanner-based Veeqo picking for a Magento business. A roughly 4,500-SKU year-end count took 22 hours, down from 42, in [one operation](https://m2instacount.com/magento-inventory-case-study/). I continue to maintain and extend the app. | Python, Flask, React, PostgreSQL, Magento 2 API, Veeqo API |
| [AutoSortPro](https://autosortpro.com/#impact) | File organization with searchable metadata, OCR, AI features, and exports. During its operation, 132 active users organized 12.5K+ files. The service has since shut down. | Python, FastAPI, Electron, React, PostgreSQL, Auth0, Stripe, OpenAI, AWS |
| [OpenHome](https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8) | Small therapist-style voice app for an evolving OS. It used the OpenAI API and summarized stored JSON conversations for longer-term context. | Python, OpenAI API |

The production applications and client sites are maintained separately. This repository contains the portfolio frontend and résumé PDF.

## Portfolio stack

React 17, React Router, React Bootstrap, CSS, React Icons, tsParticles, and react-pdf. The site is hosted on Vercel.

## Run locally

Use a current Node.js LTS release and npm:

```bash
npm ci
npm start
```

Create a production build with `npm run build`. Run the test suite with `CI=true npm test -- --watch=false`.

The résumé PDF is generated from `scripts/build-resume.py` using ReportLab. The social sharing image is generated from `public/og-image.svg` with `npm run build:og`.

## Contact

- [Website](https://www.collinburleigh.com)
- [LinkedIn](https://www.linkedin.com/in/burleighcollin/)
- [Email](mailto:collin.s.burleigh@gmail.com)
