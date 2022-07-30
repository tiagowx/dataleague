import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{
      width: '100%',
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h2">Data League</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;