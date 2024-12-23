import React from "react";
import Slider from "react-slick"; // Slider component ko import kar rahe hain react-slick se
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material"; // Material UI components ko import kar rahe hain
import Image1 from "./ActiveFunImg/Active1.png"; // Images ko import kar rahe hain
import Image2 from "./ActiveFunImg/TeacherDay.webp";
import Image3 from "./ActiveFunImg/Active3.png";
import Image4 from "./ActiveFunImg/BollyBol.webp";
import Image5 from "./ActiveFunImg/CodingClub.jpg";
import Image6 from "./ActiveFunImg/Criket.webp";
import Image7 from "./ActiveFunImg/ParamedicalDay.png";
import Image8 from "./ActiveFunImg/Poster.png";
import Image9 from "./ActiveFunImg/Running.png";
import Image10 from "./ActiveFunImg/TalentHut.png";

const ActivitiesAndFuncSlider = () => {
  // Slider ke liye card data array
  const cardData = [
    {
      title: "Mosaic Drama",
      content:
        "Mosaic Drama College ek vibrant institution hai jo comprehensive... ",
      image: Image1,
    },
    {
      title: "Teacher's Day",
      content:
        "Indo Global College mein Teacher Day ko heartfelt tributes ke saath celebrate kiya jata hai, including...",
      image: Image2,
    },
    {
      title: "Punjabi Bhangra",
      content:
        "Punjabi Bhangra Dance Indo Global College mein ek energetic celebration hai...",
      image: Image3,
    },
    {
      title: "BollyBol",
      content:
        "BollyBol Bollywood music aur dance ka vibrant fusion hai, featuring energetic...",
      image: Image4,
    },
    {
      title: "Coding Club",
      content:
        "Indo Global College ka Coding Club innovation aur technical skills ko foster karta hai...",
      image: Image5,
    },
    {
      title: "Cricket",
      content:
        "Indo Global College mein Cricket ek popular sport hai, jo teamwork aur discipline ko promote karta hai...",
      image: Image6,
    },
    {
      title: "RadioLogy Day 8",
      content:
        "Indo Global College mein World Radiology Day ko acknowledge karne ke liye celebrate kiya jata hai...",
      image: Image7,
    },
    {
      title: "Poster Making",
      content:
        "Indo Global College mein poster making ek creative activity hai jo teachers ke dwara guide ki jati hai...",
      image: Image8,
    },
    {
      title: "Marathon Event",
      content:
        "Indo Global College mein marathon event fitness aur community ko promote karta hai...",
      image: Image9,
    },
    {
      title: "Talent Hunt",
      content:
        "Indo Global College Talent Hunt event student creativity aur skills ko celebrate karta hai...",
      image: Image10,
    },
  ];

  // Slider settings
  const settings = {
    dots: false, // Pagination dots nahi dikhai denge
    infinite: true, // Slider infinite loop mein chalega
    speed: 1500, // Transition ki speed
    slidesToShow: 4, // Ek time par kitne slides dikhai denge
    autoplay: true, // Slider autoplay mode mein chalega
    autoplaySpeed: 0, // Continuous autoplay ke liye speed 0 set kiya gaya hai
    arrows: false, // Arrow navigation disable ki gayi hai
    pauseOnHover: false, // Hover karne par slider pause nahi hoga
    cssEase: "linear", // Smooth scrolling ke liye linear easing
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
          mt: "50px",
        }}
      >
        College's Activities
      </Typography>
      {/* Description text */}
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>
        Indo Global College (IGC) offers a wide range of activities that
        complement its academic programs. The college regularly organizes
        cultural festivals, technical workshops, and sports events, encouraging
        students to explore their talents and build team spirit.
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
                  objectFit: "fill", // Image area ko fill karega
                  transition: "transform 0.1s", // Smooth scale transition
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
export default ActivitiesAndFuncSlider;