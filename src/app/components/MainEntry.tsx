import blueGrey from "@material-ui/core/colors/blueGrey";
import red from "@material-ui/core/colors/red";
import teal from "@material-ui/core/colors/teal";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import Layout from "./Layout";

const getExclamationMarks = (numChars: number) => {
  return Array(numChars + 1).join("!");
};

const theme = createMuiTheme({
  palette: {
    error: red,
    primary: {
      dark: "#000a12",
      light: "#4f5b62",
      main: blueGrey[900]
    },
    secondary: {
      dark: "#008e76",
      light: "#5df2d6",
      main: teal[700]
    }
  }
});
theme.palette.contrastThreshold = 3;
theme.palette.tonalOffset = 3;

interface IProps {
  name?: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const MainEntry = ({
  enthusiasmLevel = 0,
  onIncrement,
  onDecrement
}: IProps) => (
  <MuiThemeProvider theme={theme}>
    <Layout />
    <div style={{ display: "none" }}>
      <h3>{getExclamationMarks(enthusiasmLevel)}</h3>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  </MuiThemeProvider>
);

export default MainEntry;
