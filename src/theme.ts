import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#777772',
      },
      secondary: {
        main: '#4f8e3e',
      },
    },
    typography: {
        fontFamily: "Poppins"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;