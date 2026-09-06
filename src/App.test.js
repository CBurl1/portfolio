import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => function MockParticle() {
  return null;
});

jest.mock("./components/ScrollToTop", () => function MockScrollToTop() {
  return null;
});

test("renders the portfolio introduction", () => {
  render(<App />);

  expect(
    screen.getByText(/Technical support · SaaS · automation/i)
  ).toBeInTheDocument();
});
