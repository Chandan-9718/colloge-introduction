// React library ko import karte hain
import React from "react";

// Material UI ke Box aur Typography components ko import karte hain
import { Box, Typography } from "@mui/material";

// CoursesDetailsSlider component ko import karte hain
import CoursesDetailsSlider from "../TabsContent/AboutUsComp/CoursesCompo/CoursesDetailsSlide";

// ActivitiesAndFuncSlider component ko import karte hain
import ActivitiesAndFuncSlider from "../TabsContent/AboutUsComp/ActiveFunctionImg/ActivitiesAndFuncSlide";

// WebsiteBottomBock component ko import karte hain
import WebsiteBottomBock from "../TabsContent/AboutUsComp/WebsiteBottomBock";

// CollegePlacementSliderIt component ko import karte hain
import CollegePlacementSliderIt from "../TabsContent/AboutUsComp/Placement/CollegePlacementSlideIt";

// CollegePlacementSliderNonit component ko import karte hain
import CollegePlacementSliderNonit from "../TabsContent/AboutUsComp/Placement/CollegePlacementSlideNonIt";

// AboutUs naam ka functional component banate hain
const AboutUs = () => {
  return (
    // Main container jo sabhi elements ko wrap karta hai
    <Box sx={{ margin: "10px", overflowX: "hidden" }}>
      {/* Heading section jo college ka naam aur title show karta hai */}
      <Box sx={{ textAlign: "start", p: 4 }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Best Engineering College in Punjab
        </Typography>
        {/* College Details */}
        <Typography variant="h4" sx={{ margin: "10px", textAlign: "center" }}>
          Indo Global College, Mohali, Abhipur
        </Typography>
      </Box>

      {/* Content section jo college ke baare mein details provide karta hai */}
      <Box sx={{ ml: "10px" }}>
        {/* Subheading jo technical education aur research par focus karta hai */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "18px", color: "#da384c" }}
        >
          Excellence in Technical Education and Research
        </Typography>
        {/* College ki details, history aur environment ke baare mein */}
        <Typography sx={{ mb: "10px" }}>
          Established in 2003, Indo Global College of Engineering has grown to
          become one of the most reputable engineering institutions in Punjab.
          Located in the picturesque surroundings of Mohali, Abhipur, the
          college provides a serene and conducive environment for academic
          pursuits. Our college is committed to fostering an atmosphere of
          innovation, creativity, and excellence. We offer a diverse range of
          undergraduate and postgraduate programs in engineering, management,
          and technology, designed to equip students with the skills and
          knowledge required to excel in their chosen fields.
        </Typography>

        {/* Subheading jo college ke infrastructure ke baare mein hai */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "18px", color: "#da384c" }}
        >
          State-of-the-Art Infrastructure
        </Typography>
        {/* Infrastructure ke baare mein details */}
        <Typography sx={{ mb: "10px" }}>
          Indo Global College boasts modern infrastructure, including
          well-equipped laboratories, advanced research facilities, and smart
          classrooms that provide a cutting-edge learning experience.
        </Typography>
      </Box>

      {/* Different components ko render karte hain jo additional information show karte hain */}
      <CoursesDetailsSlider />
      <ActivitiesAndFuncSlider />
      <CollegePlacementSliderIt />
      <CollegePlacementSliderNonit />
      <WebsiteBottomBock />
    </Box>
  );
};

export default AboutUs;
// AboutUs component ko export karte hain taaki ise dusre components mein use kiya ja sake
