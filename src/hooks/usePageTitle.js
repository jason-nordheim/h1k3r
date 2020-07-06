import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { SiteLinks } from "../global";


export const usePageTitle = () => {
  const location = useLocation() 
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    SiteLinks.forEach((navLink) => {
      if (navLink.address === location.pathname) {
        setPageTitle(navLink.label);
      }
    });
  }, [location]);

  return [pageTitle]
}