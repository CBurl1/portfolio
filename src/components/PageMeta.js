import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": {
    title: "Collin Burleigh | Software Engineer",
    description:
      "Software engineer building full-stack applications with Python, Flask, FastAPI, React, and PostgreSQL. Explore AutoSortPro, M2 InstaCount, and OpenHome.",
  },
  "/about": {
    title: "About | Collin Burleigh",
    description:
      "Learn about Collin Burleigh's software development experience across Python, SaaS, ecommerce, React, and PostgreSQL.",
  },
  "/project": {
    title: "Projects | Collin Burleigh",
    description:
      "Explore AutoSortPro, M2 InstaCount, and OpenHome: full-stack software, ecommerce tooling, and a Python prototype built by Collin Burleigh.",
  },
  "/resume": {
    title: "Résumé | Collin Burleigh",
    description:
      "View Collin Burleigh's software engineering résumé, featured projects, technical skills, and professional experience.",
  },
};

function setContent(selector, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || pages["/"];
    const url = `https://collinburleigh.com${pathname === "/" ? "/" : pathname}`;

    document.title = page.title;
    setContent('meta[name="description"]', page.description);
    setContent('meta[property="og:title"]', page.title);
    setContent('meta[property="og:description"]', page.description);
    setContent('meta[property="og:url"]', url);
    setContent('meta[name="twitter:title"]', page.title);
    setContent('meta[name="twitter:description"]', page.description);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [pathname]);

  return null;
}

export default PageMeta;
