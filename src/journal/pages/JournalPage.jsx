import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";
import JournalLayout from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/* <Typography>
        Aute aliquip cillum minim sint deserunt tempor voluptate culpa proident
        nulla ullamco irure ad nulla.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontsize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
