# Collin Burleigh - Software Engineering Portfolio

The source for [collinburleigh.com](https://collinburleigh.com), my portfolio of full-stack applications, ecommerce tooling, and a Python prototype.

## Featured work

| Project | What I built | Stack |
| --- | --- | --- |
| [AutoSortPro](https://autosortpro.com) | AI-powered file organization application for organizing, tagging, and summarizing files; product workflows and integrations for authentication, payments, and AI features | Electron, React, FastAPI, PostgreSQL, Auth0, Stripe, OpenAI, AWS |
| [M2 InstaCount](https://m2instacount.com) | Inventory and receiving tool for Magento 2 operations, including barcode workflows and inventory accuracy checks | Python, Flask, React, PostgreSQL, Magento 2 API |
| [OpenHome](https://www.loom.com/share/a29cbce183324c6fa0dc31b8ea0389e8) | Python application for an AI-powered smart-home OS prototype presented to 100+ potential investors in 2024 | Python, AI, voice |

AutoSortPro and M2 InstaCount have served roughly 140 users across both applications. I have also supported users, investigated reported issues, and shipped fixes after launch. The professional roles on the site and résumé retain their original titles.

The production applications above are maintained separately; this repository contains the portfolio frontend.

## Portfolio stack

React 17, React Router, React Bootstrap, CSS, React Icons, tsParticles, and react-pdf. The site is hosted on Vercel.

## Run locally

Use a current Node.js LTS release and npm:

```bash
npm ci
npm start
```

Create a production build with `npm run build`. Run the test suite with `npm test -- --watch=false`.

The résumé PDF is generated from `scripts/build-resume.py` using ReportLab. The social sharing image is generated from `public/og-image.svg` with `npm run build:og`.

## Contact

- [Website](https://collinburleigh.com)
- [LinkedIn](https://www.linkedin.com/in/burleighcollin)
- [GitHub](https://github.com/CBurl1)
