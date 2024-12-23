import React from "react"; // React ko import kar rahe hain
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material"; // Material UI ke components ko import kar rahe hain
import Slider from "react-slick"; // Slider component ko import kar rahe hain react-slick se
import "slick-carousel/slick/slick.css"; // Slick Carousel ki CSS import kar rahe hain
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel ke theme ki CSS import kar rahe hain
import Image1 from "./CouresImg/Bba.jpg"; // Course images ko import kar rahe hain
import Image2 from "./CouresImg/Bca.jpeg";
import Image3 from "./CouresImg/Mba.jpg";
import Image4 from "./CouresImg/Ot.jpg";
import Image5 from "./CouresImg/Mls.jpg";
import Image6 from "./CouresImg/Btechcs.jpg";
import Image7 from "./CouresImg/BtechCi.png";
import Image8 from "./CouresImg/BtechM.jpg";
import Image9 from "./CouresImg/Dip.jpg";
import Image10 from "./CouresImg/Arch.webp";
// CoursesDetailsSliderConst.js
const CoursesDetailsSlider = () => {
  // Slider ke liye card data array
  const cardData = [
    {
      title: "BBA",
      content:
        "A Bachelor of Business Administration equips students with core business skills...",
      image: Image1,
    },
    {
      title: "BCA",
      content:
        "A Bachelor of Computer Applications focuses on software development...",
      image: Image2,
    },
    {
      title: "MBA",
      content:
        "A Master of Business Administration develops advanced management...",
      image: Image3,
    },
    {
      title: "OTT",
      content:
        "Operation Theater training focuses on surgical techniques, patient care...",
      image: Image4,
    },
    {
      title: "MLS",
      content:
        "Medical Laboratory Science professionals in diagnostic testing, lab and medical...",
      image: Image5,
    },
    {
      title: "B.Tech (CS)",
      content:
        "A Bachelor of Technology in Computer Science provides in-depth knowledge...",
      image: Image6,
    },
    {
      title: "B.Tech (Civil)",
      content:
        "A Bachelor of Technology in Civil Engineering focuses on infrastructure...",
      image: Image7,
    },
    {
      title: "B.Tech (Mechanical)",
      content:
        "Bachelor of Technology in Mechanical Engineering covers principles...",
      image: Image8,
    },
    {
      title: "Diploma",
      content:
        "A Diploma in Engineering provides foundational knowledge and practical...",
      image: Image9,
    },
    {
      title: "B.Archi",
      content:
        "A Bachelor of Architecture program focuses on architectural design, building...",
      image: Image10,
    },
  ];

  // Slider settings configuration
  const settings = {
    dots: true, // Slider ke niche navigation dots dikhai denge
    infinite: true, // Slider infinite loop mode mein chalega
    speed: 1000, // Transition ki speed ko 1000ms set kiya gaya hai
    slidesToShow: 4, // Ek time par 4 slides dikhai denge
    slidesToScroll: 1, // Ek time par 1 slide scroll hogi
    autoplay: true, // Slider autoplay mode mein chalega
    autoplaySpeed: 100, // Autoplay speed ko 100ms set kiya gaya hai
    arrows: false, // Arrow navigation disable ki gayi hai
  };

  return (
    <Box>
      {/* Slider ke liye title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#da384c",
          textAlign: "center",
          mt: "20px",
        }}
      >
        Courses Details
      </Typography>
      {/* Description text */}
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>
        Indo Global College offers a comprehensive range of undergraduate and
        postgraduate courses designed to meet the needs of today’s industry.
      </Typography>

      {/* Slider component */}
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              mb: "15px",
              height: "250px",
              maxWidth: "335px",
              padding: "10px",
              bgcolor: "white",
            }}
          >
            <CardActionArea>
              {/* Card image */}
              <CardMedia
                component="img"
                height="170px"
                image={card.image}
                alt={card.title}
                sx={{
                  backgroundColor: "#fff", // Image ka background color white hai
                  borderRadius: "5px", // Image ke corners ko rounded banaya gaya hai
                  boxShadow:
                    "0px 4px 8px rgba(255, 255, 255, 0.4), 0px 6px 20px rgba(255, 255, 255, 0.3)", // Image ke liye shadow effect
                  objectFit: "fill", // Image ko container ke area ko fill karne ke liye set kiya gaya hai
                  transition: "transform 0.1s", // Smooth scaling transition effect
                  "&:hover": { transform: "scale(1.04)" }, // Hover karne par image scale ho jayegi
                }}
              />
              {/* Card content */}
              <CardContent sx={{ p: "0px", ml: "10px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {card.title} {/* Card ka title */}
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
                  {card.content} {/* Card ka content */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};
export default CoursesDetailsSlider;