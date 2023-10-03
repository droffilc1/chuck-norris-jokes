import { render } from "@testing-library/react";
import Button from "../components/button/Button"; // Update the path based on your file structure

describe("Button component", () => {
  test("renders the component", () => {
    render(<Button />);
  });
});
