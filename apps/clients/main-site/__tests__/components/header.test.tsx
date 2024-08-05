import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from "@app/components/header";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByAltText("ShineYup - Logo");

    expect(heading).toBeInTheDocument();
  });
});
