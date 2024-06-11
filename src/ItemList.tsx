import { PropsWithChildren, forwardRef } from "react";
import { GridListProps, VirtuosoGrid } from "react-virtuoso";
import { User } from "./App";
import { Typography } from "@mui/material";
import ItemCard from "./ItemCard";

const gridComponents = {
  List: forwardRef(
    (
      { style, children, ...props }: GridListProps,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => (
      <div
        ref={ref}
        {...props}
        style={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          width: "1000px",
          ...style,
        }}
      >
        {children}
      </div>
    )
  ),
  Item: ({ children, ...props }: PropsWithChildren) => (
    <div
      {...props}
      style={{
        width: "33%",
        display: "flex",
        flex: "none",
        alignContent: "stretch",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  ),
};

const ItemWrapper = ({ children, ...props }: PropsWithChildren) => (
  <div
    {...props}
    style={{
      display: "flex",
      flex: 1,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem 1rem",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </div>
);

const ItemList = ({
  users,
  onSelUser,
}: {
  users?: User[];
  onSelUser: (user: User) => void;
}) => {
  if (users === undefined) {
    return <Typography align="center">Loading...</Typography>;
  } else if (users.length) {
    return (
      <VirtuosoGrid
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        totalCount={1000}
        components={gridComponents}
        itemContent={(index) => {
          const item = users[index];
          return (
            <ItemWrapper>
              <ItemCard data={item} onSelect={onSelUser} />
            </ItemWrapper>
          );
        }}
      />
    );
  } else return <Typography align="center">No Users</Typography>;
};

export default ItemList;
