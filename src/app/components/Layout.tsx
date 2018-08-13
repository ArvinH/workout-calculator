import * as React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Divider from "@material-ui/core/Divider";
import { mailFolderListItems } from "./MenuItems";
import BMR from "./BMR";
import TDEE from "./TDEE";
import FoodCalculator from "./Food_Calculator";

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100%",
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
      position: "relative",
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0 // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar
  });

interface IProps extends WithStyles<typeof styles> {}

function Layout(props: IProps) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap={true}>
            Workout Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BMR />
        <TDEE />
        <FoodCalculator />
      </main>
    </div>
  );
}

export default withStyles(styles)(Layout);
