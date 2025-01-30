import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

interface AddButtonProps {
  handleToggleModal: () => void;
}

export function AddButton({ handleToggleModal }: AddButtonProps) {
  return (
    <Fab
      sx={{
        position: "fixed",
        right: 25,
        bottom: 25,
      }}
      color="primary"
      aria-label="add"
      onClick={handleToggleModal}
    >
      <Add />
    </Fab>
  );
}
