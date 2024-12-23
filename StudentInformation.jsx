import React, { useState, useEffect } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import StudentDataList from "../TabsContent/StudentInformationComp/StudentDataList";
import StudentFormDialog from "../TabsContent/StudentInformationComp/StudentFormDialogComp/StudentFormDialog";
import SearchAndAddSection from "../TabsContent/StudentInformationComp/SearchAndAddSection";

const StudentInformation = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [originalStudentInfo, setOriginalStudentInfo] = useState({});
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    stream: "",
    courseYear: "",
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchCriterion, setSearchCriterion] = useState("Name");

  const [alertOpen, setAlertOpen] = useState(false); // Alert ke liye state
  const [alertMessage, setAlertMessage] = useState(""); // Alert message ke liye state

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setStudentInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClickOpen = () => {
    setStudentInfo({
      name: "",
      mobile: "",
      email: "",
      dob: "",
      stream: "",
      courseYear: "",
    });
    setEditMode(false);
    setOpen(true);
  };

  const handleEdit = (student) => {
    setOriginalStudentInfo(student);
    setStudentInfo(student);
    setEditMode(true);
    setOpen(true);
  };

  const handleClose = () => {
    setStudentInfo({
      name: "",
      mobile: "",
      email: "",
      dob: "",
      stream: "",
      courseYear: "",
    });
    setOpen(false);
    setEditMode(false);
    setOriginalStudentInfo({});
  };

  const handleSubmit = () => {
    if (
      Object.values(studentInfo).every(
        (value) => value !== null && value !== undefined && value !== ""
      )
    ) {
      setStudents((prev) =>
        editMode
          ? prev.map((prevSingleStudent, key) =>
              key == studentInfo.id
                ? { ...studentInfo, status: "Edited" }
                : prevSingleStudent
            )
          : [
              ...prev,
              { ...studentInfo, id: prev.length, status: "Newly Added" },
            ]
      );
      handleClose();

      // Alert message sirf edit mode mein set kare
      if (editMode) {
        setAlertMessage("Student Edited Successfully");
        setAlertOpen(true); // Alert open karne ke liye
      }
    }
  };

  const handleDelete = (student) => {
    setStudents((prev) => {
      const updatedList = prev.filter((s, key) => key !== student.id);
      const updatedListWithNewIds = updatedList.map((item, index) => ({
        ...item,
        id: index,
      }));
      return updatedListWithNewIds;
    });
    setAlertMessage("Student Deleted Successfully!");
    setAlertOpen(true); // Alert open karne ke liye
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  const filteredStudents = students.filter((student) => {
    const term = searchTerm.toLowerCase();
    return searchCriterion === "Name"
      ? student.name.toLowerCase().includes(term)
      : student.courseYear.toLowerCase().includes(term);
  });

  return (
    <Box sx={{ pl: "10px", pr: "10px", margin: "auto" }}>
      <SearchAndAddSection
        searchTerm={searchTerm}
        searchCriterion={searchCriterion}
        handleSearchChange={(e) => setSearchTerm(e.target.value)}
        handleCriterionChange={(e) => setSearchCriterion(e.target.value)}
        handleClickOpen={handleClickOpen}
      />
      <Box sx={{ mt: "38px" }}>
        <StudentDataList
          students={filteredStudents}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </Box>
      <StudentFormDialog
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        studentInfo={studentInfo}
        editMode={editMode}
        isFormComplete={() =>
          Object.values(studentInfo).every(
            (value) => value !== null && value !== undefined && value !== ""
          )
        }
        isFormModified={() =>
          JSON.stringify(studentInfo) !== JSON.stringify(originalStudentInfo)
        }
      />
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Move this prop to Snackbar
      >
        <Alert
          onClose={handleAlertClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default StudentInformation;