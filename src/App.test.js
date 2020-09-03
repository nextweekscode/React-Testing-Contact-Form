import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("can type into First name and hit submit", () => {
  render(<App />)

  const nameInput = screen.getByLabelText(/firstname/i)



})
