import { Box, Dialog, DialogTitle } from "@mui/material";
import { User } from "./App";

interface DetailProps {
  //   open: boolean;
  user: User;
  onClose: () => void;
}

function DetailDialog(props: DetailProps) {
  const { onClose, user } = props;

  //   if (user) {
  return (
    <Dialog onClose={onClose} open={true}>
      <DialogTitle>Set backup account</DialogTitle>
      <Box>detail - {user.username}</Box>
    </Dialog>
  );
}
// }

export default DetailDialog;
