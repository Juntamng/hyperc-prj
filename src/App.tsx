import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import Detail from "./Detail";

export type User = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  join_date: string;
  description: string;
};

function App() {
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [selUser, setSelUser] = useState<User>();

  const fetchData = async () => {
    const response = await fetch(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users",
      {
        method: "GET",
      }
    );

    const rs = await response.json();
    setData([...rs.data.users.slice(0, 9)]);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const handleSelUser = (user: User) => {
    setSelUser(user);
  };

  const Item = ({
    data,
    onSelect,
  }: {
    data: User;
    onSelect: (user: User) => void;
  }) => {
    return (
      <Box sx={{ border: "1px red solid", flexBasis: "33%" }}>
        <Card sx={{ border: "1px green solid", m: 1 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={data.avatar}
            title={data.username}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {data.firstname + " " + data.lastname}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              onClick={() => {
                onSelect(data);
              }}
            >
              View More
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  };

  const ItemList = ({ onSelUser }: { onSelUser: (user: User) => void }) => {
    if (data === undefined) {
      return <Typography align="center">Loading...</Typography>;
    } else if (data.length) {
      return (
        <Stack direction="row" flexWrap="wrap" spacing={0}>
          {data.map((item) => (
            <Item key={item.id} data={item} onSelect={onSelUser} />
          ))}
        </Stack>
      );
    } else return <Typography align="center">No Users</Typography>;
  };

  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <ItemList onSelUser={handleSelUser} />
      {selUser && (
        <Detail
          key={selUser.id}
          user={selUser}
          onClose={() => setSelUser(undefined)}
        />
      )}
    </Container>
  );
}

export default App;
