import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

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
  expect(screen.getByRole("heading", { name: /Applications I've built in the real world/i })).toBeInTheDocument();
  expect(screen.getByText("AutoSortPro")).toBeInTheDocument();
  expect(screen.getByText("M2 InstaCount")).toBeInTheDocument();
  expect(screen.getByText("12.5K+")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Results and methodology/i })).toHaveAttribute("href", "https://m2instacount.com/magento-inventory-case-study/");
  expect(screen.getAllByText("OpenHome").length).toBeGreaterThan(0);
});
