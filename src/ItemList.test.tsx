import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ItemList from "./ItemList";
import { User } from "./App";
import { VirtuosoGridMockContext } from "react-virtuoso";

const users: User[] = [
  {
    id: "d60eafd0-d4e3-46bd-a157-d752c3a3d22a",
    username: "zklugerp",
    firstname: "Zolly",
    lastname: "Kluge",
    email: "zklugerp@walmart.com",
    avatar: "https://robohash.org/natusadipiscised.png?size=50x50&set=set1",
    role: "Estimator",
    join_date: "10/12/2023",
    description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
  {
    id: "f3c895d3-bf82-4820-ae0e-4b66ac10d085",
    username: "kalamrq",
    firstname: "Kalil",
    lastname: "Alam",
    email: "kalamrq@shutterfly.com",
    avatar: "https://robohash.org/fugiteiustemporibus.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "6/26/2023",
    description: "Cras non velit nec nisi vulputate nonummy.",
  },
  {
    id: "7b09766a-261e-4397-b857-e5dd35668dda",
    username: "sabaroughrr",
    firstname: "Shae",
    lastname: "Abarough",
    email: "sabaroughrr@hc360.com",
    avatar: "https://robohash.org/corporiscupiditateet.png?size=50x50&set=set1",
    role: "Project Manager",
    join_date: "10/5/2023",
    description:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  },
];

describe("ItemList > render", () => {
  it("correctly renders items", () => {
    render(<ItemList users={users} onSelUser={() => {}} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    expect(screen.getByText("Zolly Kluge")).toBeInTheDocument();
    expect(screen.queryByText("MIke")).not.toBeInTheDocument();
  });
});
