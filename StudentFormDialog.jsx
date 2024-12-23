import React from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const semestersOptions = {
  BCA: ["1st", "2nd", "3rd"],
  BBA: ["1st", "2nd", "3rd"],
  BTech: ["1st", "2nd", "3rd", "4th"],
  OT: ["1st", "2nd", "3rd"],
  MLS: ["1st", "2nd", "3rd"],
  Archi: ["1st", "2nd", "3rd", "4th", "5th"],
  MBA: ["1st", "2nd"],
  MTech: ["1st", "2nd"],
};

const StudentFormDialog = ({
  open,
  handleClose,
  handleChange,
  handleSubmit,
  studentInfo,
  editMode,
  isFormComplete,
  isFormModified,
}) => {
  const renderSemesterOptions = () =>
    (semestersOptions[studentInfo.stream] || []).map((year) => (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    ));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "70vw",
          height: "65vh",
          maxHeight: "90vh",
          maxWidth: "90vw",
        },
      }}
      fullScreen={false}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        {editMode ? "Edit Student Information" : "Add Student Information"}
      </DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="space-between">
          <TextField
            label="Student Name"
            name="name"
            value={studentInfo.name}
            onChange={handleChange}
            required
            fullWidth
            sx={{ m: "10px" }}
          />
          <TextField
            label="Mobile Number"
            name="mobile"
            type="number"
            value={studentInfo.mobile}
            onChange={handleChange}
            required
            fullWidth
            sx={{ m: 1 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mt: "20px" }}>
          <TextField
            label="Email ID"
            name="email"
            value={studentInfo.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{ m: 1 }}
          />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={studentInfo.dob}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ m: 1 }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "20px", mt: "30px"}}>
          <FormControl sx={{ width: "50%", ml: "5px" }}>
            <InputLabel id="demo-simple-select-label">Stream</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={studentInfo.stream}
              label="Stream"
              name="stream"
              onChange={handleChange}
              required
            >
              <MenuItem value="BCA">BCA</MenuItem>
              <MenuItem value="BBA">BBA</MenuItem>
              <MenuItem value="BTech">B.Tech</MenuItem>
              <MenuItem value="OT">OT</MenuItem>
              <MenuItem value="MLS">MLS</MenuItem>
              <MenuItem value="Archi">Archi</MenuItem>
              <MenuItem value="MBA">MBA</MenuItem>
              <MenuItem value="MTech">M.Tech</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: "50%", mr: "5px" }}>
            <InputLabel id="demo-simple-select-label">Course Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Course Year"
              name="courseYear"
              value={studentInfo.courseYear}
              onChange={handleChange}
              required
            >
              {(semestersOptions[studentInfo.stream] || []).map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          m: " 0px 30px 40px 30px",
        }}
      >
        <Button variant="contained" onClick={handleClose} color="error">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!isFormComplete() || (editMode && !isFormModified())}
        >
          {editMode ? "Update" : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default StudentFormDialog;
