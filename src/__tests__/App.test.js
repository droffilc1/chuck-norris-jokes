import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App componnt", () => {
  test("renders Chuck Norris Jokes header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Chuck Norris Jokes/i);
    expect(headerElement).toBeInTheDocument();
  });
});
