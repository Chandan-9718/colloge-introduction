import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image1 from "./PlacementImg/IBM.jpg";
import Image2 from "./PlacementImg/Oracle.webp";
import Image3 from "./PlacementImg/Sap.webp";
import Image4 from "./PlacementImg/Cisco.jpeg";
import Image5 from "./PlacementImg/Salesforce.jpg";

const CollegePlacementSliderIt = () => {
  // Next Arrow ke liye function, ye arrow click hone par aage slide karega
  const NextArrow = ({ onClick }) => {
    return (
      <IconButton
        onClick={onClick} // Jab click ho, tab ye function chalega
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "black",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <ArrowForwardIosIcon sx={{ width: "50px", height: "50px" }} />
      </IconButton>
    );
  };

  // Previous Arrow ke liye function, ye arrow click hone par piche slide karega
  const PrevArrow = ({ onClick }) => {
    return (
      <IconButton
        onClick={onClick} // Jab click ho, tab ye function chalega
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "black",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <ArrowBackIosNewSharpIcon sx={{ width: "50px", height: "50px" }} />
      </IconButton>
    );
  };

  // Slider mein display hone wale cards ka data
  const cardData = [
    {
      title: "IBM",
      content:
        "IBM: Partners with Indo Global College for tech workshops and internships, providing students with practical experience and...",
      image: Image1,
    },
    {
      title: "Oracle",
      content:
        "Oracle: Collaborates with Indo Global College to offer training programs and certifications in database management..",
      image: Image2,
    },
    {
      title: "SAP",
      content:
        "SAP: Works with Indo Global College to integrate ERP solutions into the curriculum, preparing students for careers in...",
      image: Image3,
    },
    {
      title: "Cisco",
      content:
        "Cisco: Provides networking and cybersecurity resources to Indo Global College, supporting educational initiatives...",
      image: Image4,
    },
    {
      title: "Salesforce",
      content:
        "Salesforce: Partners with Indo Global College to deliver CRM training and projects, helping students gain expertise in...",
      image: Image5,
    },
  ];

  // Slider ke settings, jismein speed, arrows aur slides ki details set hoti hain
  const settings = {
    dots: false, // Dots display nahi karenge
    infinite: true, // Slider infinite loop mein chalega
    speed: 1000, // Slide transition ki speed
    slidesToShow: 3, // Ek time pe kitni slides dikhni chahiye
    slidesToScroll: 3, // Kitni slides scroll hongi ek click par
    autoplay: true, // Slider auto play hoga
    autoplaySpeed: 2000, // Slide change hone ka time interval
    pauseOnHover: false, // Hover karne par slider pause nahi hoga
    nextArrow: <NextArrow />, // Custom Next Arrow button
    prevArrow: <PrevArrow />, // Custom Previous Arrow button
  };

  return (
    <Box sx={{ p: "10px", mt: "40px" }}>
      {/* Section ka title */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#da384c", textAlign: "center" }}
      >
        College Placements
      </Typography>
      <Typography>
        Indo Global College (IGC) has a strong track record of placements,
        helping students launch successful careers across various industries.
        The dedicated placement cell at IGC works tirelessly to prepare students
        for the competitive job market by offering training in soft skills,
        resume building, interview techniques, and aptitude tests.
      </Typography>
      {/* IT Companies ke liye title */}
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", mt: "15px" }}
        variant="h5"
      >
        IT Companies
      </Typography>
      {/* Individual companies ke details */}
      <Typography
        sx={{ fontWeight: "bold", fontSize: "20px", color: "#da384c" }}
      >
        IBM
      </Typography>
      <Typography>
        IBM collaborates with Indo Global College to provide technology
        workshops, internships, and access to advanced software and tools. This
        partnership enables students to gain hands-on experience with IBM's
        cutting-edge technologies, bridging the gap between academic learning
        and real-world IT industry practices.
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "20px", color: "#da384c" }}
      >
        Oracle
      </Typography>
      <Typography sx={{ mb: "15px" }}>
        {" "}
        Oracle partners with Indo Global College to offer specialized training
        programs and certifications in database management and cloud computing.
        This collaboration helps students gain valuable skills and
        industry-recognized credentials, enhancing their career prospects and
        ensuring they are well-prepared for roles in the evolving IT landscape.
      </Typography>

      {/* Slider component */}
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              mb: "15px",
              height: "270px",
              maxWidth: "400px",
              padding: "10px",
              bgcolor: "white",
              ml: "40px",
            }}
          >
            <CardActionArea>
              {/* Image ka component */}
              <CardMedia
                component="img"
                height="170px"
                image={card.image}
                alt={card.title}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  boxShadow:
                    "0px 4px 8px rgba(255, 255, 255, 0.4), 0px 6px 20px rgba(255, 255, 255, 0.3)",
                  objectFit: "fill",
                  transition: "transform 0.1s",
                  "&:hover": { transform: "scale(1.04)" },
                }}
              />
              {/* Title aur content ka box */}
              <CardContent sx={{ p: "0px", ml: "10px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {card.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    color: "gray",
                    opacity: "0.7",
                    fontSize: "16px",
                    p: "0px",
                  }}
                >
                  {card.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CollegePlacementSliderIt;
