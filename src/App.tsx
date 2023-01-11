import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import theme from "./config/theme";
import { store } from "./config/store";
import HomeScreen from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
