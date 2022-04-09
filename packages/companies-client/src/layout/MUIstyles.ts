import { createTheme, Theme } from "@material-ui/core/styles";

export const theme: Theme = createTheme({
  overrides: {
    MuiSlider: {
      rail: {
        backgroundColor: "#ddd",
      },
      track: {
        backgroundColor: "#0D72B9",
      },
      thumb: {
        backgroundColor: "#0D72B9",
      },
    },
    MuiDialog: {
      paper: {
        maxWidth: "1000px !important",
      },
    },
    MuiDialogTitle: {
      root: {
        textAlign: "center",
        padding: "0.5rem 1rem",
      },
    },
    MuiDialogContentText: {
      root: {
        textAlign: "center",
      },
    },
    MuiPaper: {
      root: {
        boxShadow: "0px 0px 15px -1px rgba(0,0,0, 0.2) !important",
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: "unset",
      },
    },
    MuiTypography: {},
    MuiButton: {},
    MuiDivider: {
      root: {
        width: "100%",
        margin: "0.5rem 0",
      },
      vertical: {
        margin: "0",
      },
    },
    MuiTab: {},
    MuiTabs: {
      root: {
        minHeight: "0",
        borderRadius: "50px",
      },
      indicator: {
        display: "none",
      },
      flexContainer: {
        display: "grid",
        gridAutoFlow: "column",
      },
    },
    MuiButtonBase: {
      root: {
        alignSelf: "center",
      },
    },
    MuiTooltip: {
      tooltip: {
        background: "linear-gradient(to right, #443f40, #363636)",
        fontSize: "1rem",
      },
      arrow: {
        color: "#443f40",
      },
    },
    MuiFilledInput: {},
    MuiFormControlLabel: {},
    MuiFormLabel: {
      root: {
        fontFamily: "inherit",
      },
    },
    MuiInputBase: {
      root: {
        fontFamily: "inherit",
      },
    },
    MuiFab: {},
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: "transparent",
      },
    },
    MuiCircularProgress: {
      svg: {
        // color: "#0D72B9",
      },
      circle: {
        // color: "#0D72B9",
      },
      circleIndeterminate: {
        animation: "unset",
      },
      indeterminate: {
        animationDuration: "0.5s",
      },
    },
  },
  palette: {
    primary: {
      main: "#0D72B9",
    },
    secondary: {
      main: "#a70a49",
    },
  },
});
