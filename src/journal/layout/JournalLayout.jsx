import { Box } from "@mui/material";
import { NavBar, SideBar } from "../components";
const drawerWidth = 240;
const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <NavBar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexgrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
