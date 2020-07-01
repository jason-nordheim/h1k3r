import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { green } from "@material-ui/core/colors";


export const NavigationLinks = [
         {
           address: "/",
           label: "Home",
           icon: <HomeIcon style={{ color: green[700]}} />,
         },
         {
           address: "/social",
           label: "Social",
           icon: <GroupIcon style={{ color: green[700] }} />,
         },
         {
           address: "/events",
           label: "Events",
           icon: <EventIcon style={{ color: green[700]}} />,
         },
         {
           address: "/map",
           label: "Map",
           icon: <LocationOnIcon style={{ color: green[700] }} />,
         },
         {
           address: "/more",
           label: "More",
           icon: <MoreHorizIcon style={{ color: green[700]}} />,
         },
       ];