import { Box, Typography } from "@mui/material";
import darkTheme from "../../../themes";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: darkTheme.palette.background.default,
        position: 'fixed',
        bottom: 0,
        textAlign: 'center',
        p:1
      }}>
      <Typography color="white" component='p'>
        &copy; Todos os direitos reservados. | 2022 - Data League
      </Typography>
    </Box>
  );
}

export default Footer;