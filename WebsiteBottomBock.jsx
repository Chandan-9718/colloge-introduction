// React library ko import karte hain
import React from "react";

// Material UI ke Box, Link, aur Typography components ko import karte hain
import { Box, Link, Typography } from "@mui/material";

// LocationOnIcon ko import karte hain jo contact address dikhane ke liye use hoga
import LocationOnIcon from "@mui/icons-material/LocationOn";

// CallIcon ko import karte hain jo phone number dikhane ke liye use hoga
import CallIcon from "@mui/icons-material/Call";

// MailOutlineIcon ko import karte hain jo email address dikhane ke liye use hoga
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const WebsiteBottomBock = () => {
  return (
    // Main container jo sabhi elements ko wrap karta hai
    <Box
      sx={{
        bgcolor: "#002147",
        m: "20px",
        p: "30px",
        display: "flex",
        gap: "50px",
      }}
    >
      {/* Contact Us section */}
      <Box sx={{ mx: "10px", color: "white", width: "25%" }}>
        <Typography sx={{ mb: "5px", fontSize: "13px", fontWeight: "900" }}>
          Contact Us
        </Typography>

        {/* Address information */}
        <Typography
          sx={{
            mb: "10px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocationOnIcon
            sx={{ color: "yellow", fontSize: "15px", mr: "5px" }}
          />
          12 Km stone, Amritsae-Jalandhar,
        </Typography>

        {/* Contact number 1 */}
        <Typography
          sx={{
            mb: "10px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CallIcon sx={{ color: "yellow", fontSize: "15px", mr: "5px" }} />
          1058715482
        </Typography>

        {/* Contact number 2 */}
        <Typography
          sx={{
            mb: "10px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CallIcon sx={{ color: "yellow", fontSize: "15px", mr: "5px" }} />
          0123456789
        </Typography>

        {/* Email address */}
        <Typography
          sx={{
            mb: "10px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MailOutlineIcon
            sx={{ color: "yellow", fontSize: "15px", mr: "5px" }}
          />
          @addmission.igef.in
        </Typography>
      </Box>

      {/* Quick Links section */}
      <Box
        sx={{
          mx: "10px",
          color: "white",
          width: "25%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ mb: "5px", fontSize: "13px", fontWeight: "900" }}>
          Quick Links
        </Typography>

        {/* Links to various pages */}
        <Link
          sx={{
            mb: "10px",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          sx={{
            mb: "10px",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Course
        </Link>
        <Link
          sx={{
            mb: "10px",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Students
        </Link>
        <Link
          sx={{
            mb: "10px",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Facilities
        </Link>
        <Link
          sx={{
            mb: "10px",
            fontSize: "12px",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Others
        </Link>
      </Box>

      {/* College Location section */}
      <Box sx={{ mx: "10px", color: "white", width: "25%" }}>
        <Typography sx={{ mb: "5px", fontSize: "13px", fontWeight: "900" }}>
          College Location
        </Typography>
        {/* Google Map embeded iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.9601387955963!2d76.68574277504372!3d30.887776078124055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff701d4fc3c13%3A0x64fde7925c8a8d08!2sIndo%20Global%20Colleges!5e0!3m2!1sen!2sin!4v1723439097516!5m2!1sen!2sin"
          width="80%"
          height="80%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      {/* More About Campus section */}
      <Box sx={{ mx: "10px", color: "white", width: "25%" }}>
        <Typography sx={{ mb: "5px", fontSize: "13px", fontWeight: "900" }}>
          More About Campus
        </Typography>
        {/* YouTube video embeded iframe */}
        <iframe
          width="85%"
          height="95%"
          src="https://www.youtube.com/embed/VWvf90h1WuE?si=wdrqAQ8GzbTSgsz4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
};
export default WebsiteBottomBock;
// WebsiteBottomBock component ko export karte hain taaki ise dusre components mein use kiya ja sake
