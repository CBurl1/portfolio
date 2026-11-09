import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import HeroVisual from "./components/Home/HeroVisual";

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
});

test("selected builds switches between Python and integration details", () => {
  render(<HeroVisual />);

  expect(screen.getByRole("button", { name: "Python" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("FastAPI · file processing · AI metadata")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Integrations" }));
  expect(screen.getByRole("button", { name: "Integrations" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("Magento 2 API · Veeqo API")).toBeInTheDocument();
  expect(screen.queryByText("FastAPI · file processing · AI metadata")).not.toBeInTheDocument();
});
