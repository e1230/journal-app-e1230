import { Box } from "@mui/system";
const drawerWidth = 240;
const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      {/* Sidebar */}
      <Box component="main" sx={{ flexgrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
