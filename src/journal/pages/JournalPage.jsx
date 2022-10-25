import { AddOutlined, Mail, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Aute aliquip cillum minim sint deserunt tempor voluptate culpa proident
        nulla ullamco irure ad nulla.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
