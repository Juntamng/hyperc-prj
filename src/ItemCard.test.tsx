import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ItemCard from "./ItemCard";
import { User } from "./App";

const user: User = {
  id: "d60eafd0-d4e3-46bd-a157-d752c3a3d22a",
  username: "zklugerp",
  firstname: "Zolly",
  lastname: "Kluge",
  email: "zklugerp@walmart.com",
  avatar: "https://robohash.org/natusadipiscised.png?size=50x50&set=set1",
  role: "Estimator",
  join_date: "10/12/2023",
  description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
};

test("ItemCard > render", async () => {
  render(<ItemCard data={user} onSelect={() => {}} />);
  await waitFor(() => {
    expect(screen.getByText("Zolly Kluge")).toBeInTheDocument();
  });
});

test("ItemCard > test onSelect event", async () => {
  const mock1 = jest.fn();
  render(<ItemCard data={user} onSelect={mock1} />);
  const button = screen.getByText("View More");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  expect(mock1.mock.calls).toHaveLength(1);

  expect(mock1.mock.calls[0][0]).toBe(user);
});
