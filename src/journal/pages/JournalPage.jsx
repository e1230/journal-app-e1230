import { Mail, MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import JournalLayout from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Aute aliquip cillum minim sint deserunt tempor voluptate culpa proident
        nulla ullamco irure ad nulla.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
