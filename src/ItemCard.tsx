import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { User } from "./App";

const ItemCard = ({
  data,
  onSelect,
}: {
  data: User;
  onSelect: (user: User) => void;
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ border: "2px #e7e7e7 solid", m: 1 }}>
        <CardContent>
          <Avatar
            alt={data.username}
            src={data.avatar}
            sx={{
              width: 200,
              height: 200,
              m: "10px auto",
              border: "solid 5px #e7e7e7",
            }}
          />
          <Typography gutterBottom variant="h5" component="div" align="center">
            {data.firstname + " " + data.lastname}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
          <Button
            variant="contained"
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

export default ItemCard;
