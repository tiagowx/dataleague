import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0
    }}>
      <Typography component='p'>
        &copy; Todos os direitos reservados. | 2022 - Data League
      </Typography>
    </Box>
  );
}

export default Footer;