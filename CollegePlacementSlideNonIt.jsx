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
import Image1 from "./PlacementImg/TataMotors.webp";
import Image2 from "./PlacementImg/Mahindra.jpg";
import Image3 from "./PlacementImg/Reliance.avif";
import Image4 from "./PlacementImg/Maruti.jpg";
import Image5 from "./PlacementImg/Siemens.webp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CollegePlacementSliderNonit = () => {
  // Next Arrow button ka component
  const NextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick} // Jab next arrow pe click kare tab ye function chalega
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "white",
        color: "black",
        padding: "10px",
      }}
    >
      <ArrowForwardIosIcon sx={{ width: "50px", height: "50px" }} />
    </IconButton>
  );

  // Previous Arrow button ka component
  const PrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick} // Jab previous arrow pe click kare tab ye function chalega
      sx={{
        position: "absolute",
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "white",
        color: "black",
        padding: "10px",
      }}
    >
      <ArrowBackIosNewSharpIcon sx={{ width: "50px", height: "50px" }} />
    </IconButton>
  );

  // Slider ke liye settings
  const settings = {
    dots: false,
    infinite: true, // Slider ko infinite chalane ke liye
    speed: 1000, // Slider ki speed set karna
    slidesToShow: 3, // Ek time pe kitne slides dikhayein
    slidesToScroll: 3,
    autoplay: true, // Auto-play enable karna
    autoplaySpeed: 2000, // Har slide ke beech mein time gap set karna
    pauseOnHover: false, // Hover karne pe slider ko rokne na dena
    nextArrow: <NextArrow />, // Custom Next Arrow use karna
    prevArrow: <PrevArrow />, // Custom Previous Arrow use karna
  };

  // Card ke data ka array
  const cardData = [
    {
      title: "Tata Motors",
      content:
        "Tata Motors collaborates with Indo Global College by offering internships, hands-on training, and industrial exposure to...",
      image: Image1,
    },
    {
      title: "Mahindra",
      content:
        "Mahindra collaborates with Indo Global College by providing industrial training, internships, and mentorship to mechanical...",
      image: Image2,
    },
    {
      title: "Reliance",
      content:
        "Reliance collaborates with Indo Global College through research projects, student exchange programs, and industry...",
      image: Image3,
    },
    {
      title: "Maruti Suzuki",
      content:
        "Maruti Suzuki partners with Indo Global College to provide automotive engineering students with internships...",
      image: Image4,
    },
    {
      title: "Siemens",
      content:
        "Siemens collaborates with Indo Global College by offering electrical and electronics engineering students access...",
      image: Image5,
    },
  ];

  return (
    <Box sx={{ ml: "10px" }}>
      <Typography
        sx={{ fontWeight: "bold", mt: 1, textAlign: "center" }}
        variant="h5"
      >
        Non-IT Companies
      </Typography>

      {/* Reliance Section ke liye */}
      <Typography
        sx={{ fontWeight: "bold", fontSize: "20px", color: "#da384c" }}
      >
        Reliance
      </Typography>
      <Typography>
        Reliance collaborates with Indo Global College to enhance student
        development through industry exposure and practical learning
        opportunities...
      </Typography>

      {/* Mahindra Section ke liye */}
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "#da384c",
          mt: "15px",
        }}
      >
        Mahindra
      </Typography>
      <Typography>
        Mahindra partners with Indo Global College to empower students with
        industry-relevant skills and practical experience...
      </Typography>

      {/* Non-IT Companies ke liye Slider */}
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <Card
            key={index} // Unique key har card ke liye
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
              <CardMedia
                component="img" // Image component ka use
                height="170px"
                image={card.image} // Image ko card ke liye set karna
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

export default CollegePlacementSliderNonit;
