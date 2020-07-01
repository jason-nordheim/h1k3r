import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const links = [
         { address: "/", label: "Home", icon: <HomeIcon /> },
         { address: "/social", label: "Social", icon: <GroupIcon /> },
         { address: "/events", label: "Events", icon: <EventIcon /> },
         { address: "/map", label: "Map", icon: <LocationOnIcon /> },
         { address: "/map", label: "More", icon: <MoreHorizIcon /> },
       ];