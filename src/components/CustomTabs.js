import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";


export const CustomTabs = withStyles({
  indicator: {
    backgroundColor: "#007302",
  },
})(Tabs);


export const CustomTab = withStyles({
  root: {
    textTransform: "none",
  },
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&$selected": {
    color: "#1890ff",
  },
  "&:focus": {
    color: "#40a9ff",
  },
})((props) => <Tab disableRipple {...props} />);