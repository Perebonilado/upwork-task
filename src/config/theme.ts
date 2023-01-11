import { createTheme } from "@mui/material/styles";

const font = `'Poppins', sans-serif`

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: font,
    fontSize: 12
  },
});

export default theme