import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#00465d',
      },
    },
    typography: {
        fontFamily: "Poppins"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;