import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("render app", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
