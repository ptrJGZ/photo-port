import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact is rendering", () => {
  // baseline test to ensure component is rendering properly
  it("renders", () => {
    render(<Contact />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("title is visible", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });

  it("button is visible", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
