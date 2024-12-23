import React from "react";
import { Box, TextField, Select, MenuItem, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SearchAndAddSection = ({
  searchTerm,
  searchCriterion,
  handleSearchChange,
  handleCriterionChange,
  handleClickOpen,
  a,
}) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        gap: "20px",
      }}
    >
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Student..."
        InputProps={{
          sx: { maxHeight: "45px", width: "300px" }, // Styling for input area
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "gray", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "gray", // Border color when focused
            },
          },
        }}
      />

      <Select
        sx={{
          height: "45px",
          width: "110px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray", // normal बॉर्डर का रंग
            borderWidth: "1px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray", // hover बॉर्डर का रंग
            borderWidth: "1px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray", // focus बॉर्डर का रंग
            borderWidth: "1px",
          },
        }}
        value={searchCriterion}
        onChange={handleCriterionChange}
      >
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Years">Years</MenuItem>
      </Select>

      <IconButton
        onClick={handleClickOpen}
        sx={{
          bgcolor: "blue",
          ml: "20px",
          "&:hover": {
            backgroundColor: "blue",
          },
        }}
      >
        {/* <AddCircleIcon /> */}
        <AddIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};
export default SearchAndAddSection;
