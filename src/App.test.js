import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import HeroVisual from "./components/Home/HeroVisual";
import { MemoryRouter } from "react-router-dom";

jest.mock("./components/Particle", () => function MockParticle() {
  return null;
});

jest.mock("./components/ScrollToTop", () => function MockScrollToTop() {
  return null;
});

test("presents software engineering work and navigates to projects", () => {
  render(<App />);

  expect(screen.getByText(/Collin Burleigh · Software Engineer/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /I build useful software/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: /Explore Projects/i }));
  expect(document.title).toBe("Projects | Collin Burleigh");
  expect(screen.getByRole("heading", { name: /Selected projects/i })).toBeInTheDocument();
  expect(screen.getAllByText("AutoSortPro").length).toBeGreaterThan(0);
  expect(screen.getAllByText("M2 InstaCount").length).toBeGreaterThan(0);
  expect(screen.getByText(/132 active users organized 12.5K\+ files/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Results and methodology/i })).toHaveAttribute("href", "https://m2instacount.com/magento-inventory-case-study/");
  expect(screen.getAllByText("OpenHome").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Sentinel Insulation").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Spencer Burleigh").length).toBeGreaterThan(0);
  expect(screen.getByText(/Supabase Row Level Security and server checks/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: "Quote builder screenshots" }));
  expect(screen.getByRole("heading", { name: /Sentinel quote builder/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Open full Estimate builder screenshot" })).toHaveAttribute("href", "/sentinel-quote-demo/01-estimate-builder.jpg");
  fireEvent.click(screen.getByRole("button", { name: "Saved quotes" }));
  expect(screen.getByRole("link", { name: "Open full Saved quotes screenshot" })).toHaveAttribute("href", "/sentinel-quote-demo/02-quote-history.jpg");
});

test("built and shipped shows the selected project's real workflow", () => {
  render(<MemoryRouter><HeroVisual /></MemoryRouter>);

  expect(screen.getByRole("button", { name: "M2 InstaCount" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("42 → 22 hours")).toBeInTheDocument();
  expect(screen.getByText("One roughly 4,500-SKU year-end count")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "AutoSortPro" }));
  expect(screen.getByRole("button", { name: "AutoSortPro" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("Find & export")).toBeInTheDocument();
  expect(screen.getByText("12.5K+ files")).toBeInTheDocument();
  expect(screen.queryByText("42 → 22 hours")).not.toBeInTheDocument();
});
