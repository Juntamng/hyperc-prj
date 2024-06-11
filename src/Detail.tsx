import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { User } from "./App";

interface DetailProps {
  //   open: boolean;
  user: User;
  onClose: () => void;
}

function DetailDialog(props: DetailProps) {
  const { onClose, user } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={true} maxWidth="sm">
      <DialogContentText sx={{ p: 5 }}>
        <Avatar
          alt={user.username}
          src={user.avatar}
          sx={{
            width: 150,
            height: 150,
            m: "10px auto",
            border: "solid 5px #e7e7e7",
          }}
        />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>{user.firstname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>{user.lastname}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Role</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Join Date</TableCell>
              <TableCell>{user.join_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>Description</TableCell>
              <TableCell>{user.description}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContentText>
      <DialogActions>
        <Button
          variant="contained"
          autoFocus
          onClick={handleCancel}
          sx={{ m: "0 auto", mb: 2 }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DetailDialog;
