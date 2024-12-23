import React, { useState } from "react";
// React aur useState ko import karte hain
 
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
// Material UI se kuch components import karte hain

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// AccountCircleOutlinedIcon ko import karte hain

import AboutUs from "./CollegeComponents/Tabs/AboutUs";
import StudentInformation from "./CollegeComponents/Tabs/StudentInformation";
import FacultyInformation from "./CollegeComponents/Tabs/FacultiesInformation";
import Courses from "./CollegeComponents/Tabs/Courses";
import Other from "./CollegeComponents/Tabs/Other";
// College ke different components ko import karte hain

import logo from "./CollegeComponents/IgcLogo.jpg"; // Logo image ka path define karte hain
import { useLocation } from "react-router-dom"; // useLocation hook ko import karte hain

// CollegeDetails naam ka component banate hain
const CollegeDetails = () => {
  const [value, setValue] = useState(0);
  // useState hook ka upyog karte hue value state ko initialize karte hain
 
  const location = useLocation();
  // useLocation hook ka upyog karte hue current location ko access karte hain

  // MYNAME data ko location se lete hain ya phir "MYNAME" set karte hain agar data available nahi hai
  const MYNAME = location?.state?.loggedUserName ?? "MYNAME";

  // Tabs ke data ko array ke roop me define karte hain jisme label aur component included hai
  const tabData = [
    { label: "About Us", component: <AboutUs /> },
    { label: "Student Information", component: <StudentInformation /> },
    { label: "Faculty Information", component: <FacultyInformation /> },
    { label: "Courses", component: <Courses /> },
    { label: "Others", component: <Other /> },
  ];

  // Tabs ke change hone par handleChange function ko call karte hain
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Component ka UI render karte hain
  return (
    <Box>
      {/* AppBar component ka upyog navbar ke liye karte hain */}
      <AppBar
        color="default"
        sx={{ backgroundColor: "white", padding: "0px 1px" }}
      >
        <Toolbar position="sticky" top="0px">
          {/* Logo aur College name ko display karne ke liye Box component ka upyog */}
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <Typography
              variant="h6"
              sx={{ marginLeft: "5px", fontWeight: "bold" }}
            >
              Indo Global College
            </Typography>
          </Box>
          {/* Tabs ko display karne ke liye Box component */}
          <Box sx={{ flexGrow: 2 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: "green",
                  height: "3px",
                  borderRadius: "3px",
                  marginBottom: "8px",
                },
              }}
              sx={{
                minHeight: "auto",
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                  gap: "40px",
                },
              }}
            >
              {/* Tabs ko map function se dynamically create karte hain */}
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={{
                    textTransform: "none",
                    minWidth: "auto",
                    padding: "0px",
                    color: value === index ? "green" : "black",
                    fontSize: "1.2rem", 
                    "&.Mui-selected": {
                      color: "green",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
          {/* IconButton aur Typography ka upyog karte hue AccountCircleOutlinedIcon aur MYNAME display karte hain */}
          <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
            <IconButton sx={{ p: "0px" }}>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <Typography
              variant="h8"
              sx={{ marginLeft: "2px", fontWeight: "bold" }}
            >
              {MYNAME} {/* MYNAME yaha display hota hai */}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Tabs ke corresponding component ko display karne ke liye Box component */}
      <Box sx={{ mt: "50px" }}>{tabData[value].component}</Box>
    </Box>
  );
};
export default CollegeDetails;