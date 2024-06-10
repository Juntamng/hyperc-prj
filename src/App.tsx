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

import React from "react";

function App() {
  const Item = () => {
    return (
      <Box sx={{ border: "1px red solid", flexBasis: "33%" }}>
        <Card sx={{ border: "1px green solid", m: 1 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
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
  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <Stack direction="row" flexWrap="wrap" spacing={0}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    </Container>
  );
}

export default App;
