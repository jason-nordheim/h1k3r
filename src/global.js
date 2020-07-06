import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const NavigationLinks = [
  {
    address: "/",
    exact: true, 
    label: "Home",
    icon: <HomeIcon style={{ color: "000" }} />,
  },
  {
    address: "/social",
    exact: false, 
    label: "Social",
    icon: <GroupIcon style={{ color: "000" }} />,
  },
  {
    address: "/events",
    exact: false, 
    label: "Events",
    icon: <EventIcon style={{ color: "000" }} />,
  },
  {
    address: "/map",
    exact: false, 
    label: "Map",
    icon: <LocationOnIcon style={{ color: "000" }} />,
  },
  {
    address: "/more",
    exact: false, 
    label: "More",
    icon: <MoreHorizIcon style={{ color: "000" }} />,
  },
];

export const SiteLinks = [
  ...NavigationLinks, 
  {
    address: '/login', 
    exact: false, 
    label: "Login", 
    icon: null,
  }, 
  {
    address: "/register", 
    exact: 'false', 
    label: 'Create Account', 
    icon: null, 
  }, 
  {
    address: '/account', 
    exact: false, 
    label: 'Account', 
    icon: null
  }
]

