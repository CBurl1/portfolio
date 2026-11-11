import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": {
    title: "Collin Burleigh | Software Engineer",
    description:
      "Python backend and full-stack software by Collin Burleigh. Explore M2 InstaCount, Sentinel Insulation, AutoSortPro, and client work.",
  },
  "/about": {
    title: "About | Collin Burleigh",
    description:
      "Learn about Collin Burleigh's Python and full-stack development work, including inventory software, client platforms, and ecommerce operations.",
  },
  "/project": {
    title: "Projects | Collin Burleigh",
    description:
      "Explore M2 InstaCount, Sentinel Insulation, AutoSortPro, Spencer Burleigh, and OpenHome projects by Collin Burleigh.",
  },
  "/project/sentinel-quote-builder": {
    title: "Sentinel Quote Builder | Collin Burleigh",
    description:
      "Explore demo screenshots of the custom quote builder Collin Burleigh built for Sentinel Insulation before it expanded into a field operations app.",
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
