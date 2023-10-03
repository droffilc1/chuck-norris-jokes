import React from "react";
import { render } from "@testing-library/react";
import ChuckNorrisSearch from "../components/chuckNorrisSearch/ChuckNorrisSearch";

describe("ChuckNorrisSearch component", () => {
  test("renders the component", () => {
    render(<ChuckNorrisSearch />);
  });
});
