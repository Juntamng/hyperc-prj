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

type User = {
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

  const fetchData = async () => {
    const response = await fetch(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users",
      {
        method: "GET",
      }
    );

    const rs = await response.json();
    setData([...rs.data.users]);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const Item = ({ data }: { data: User }) => {
    return (
      <Box sx={{ border: "1px red solid", flexBasis: "33%" }}>
        <Card sx={{ border: "1px green solid", m: 1 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={data.avatar}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    );
  };

  const ItemList = () => {
    if (data === undefined) {
      return <Typography align="center">Loading...</Typography>;
    } else if (data.length) {
      return (
        <Stack direction="row" flexWrap="wrap" spacing={0}>
          {data.map((item) => (
            <Item data={item} />
          ))}
        </Stack>
      );
    } else return <Typography align="center">No Users</Typography>;
  };

  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <ItemList />
    </Container>
  );
}

export default App;
