import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: 250,
          height: "100vh",
          backgroundColor: "#f4f4f4",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href="/">
          <Typography variant="h5" sx={{ mb: 4 }}>
            Jira
          </Typography>
        </Link>

        <List>
          <ListItem button component={Link} href="/projects">
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
