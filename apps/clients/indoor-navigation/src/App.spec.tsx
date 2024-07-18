import { describe, it } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Home", () => {
  it("renders a heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
