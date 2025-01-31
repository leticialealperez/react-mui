import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useAppDispatch } from "../../store/hooks";
import { decrement, increment } from "../../store/modules/counter/counterSlice";

interface AddButtonProps {
  handleToggleModal: () => void;
}

export function AddButton({ handleToggleModal }: AddButtonProps) {
  const dispatch = useAppDispatch();

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
      onMouseEnter={() => {
        dispatch(increment());
      }}
      onMouseLeave={() => {
        dispatch(decrement());
      }}
    >
      <Add />
    </Fab>
  );
}
