import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentDataList = ({ students, onDelete, onEdit }) => {
  const [open, setOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDialogClose = () => {
    setOpen(false);
    setEditDialogOpen(false);
    setSelectedStudent(null);
  };

  const handleAction = (action) => {
    if (action === "delete" && onDelete) {
      onDelete({ ...selectedStudent });
    } else if (action === "edit" && onEdit) {
      onEdit({ ...selectedStudent });
    }
    handleDialogClose();
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "75vh",
          overflow: "auto",
          "&::-webkit-scrollbar": { width: "0px" },
        }}
      >
        <Table sx={{ borderCollapse: "collapse" }}>
          <TableHead
            sx={{
              background: "white",
              zIndex: 1,
              position: "sticky",
              top: 0,
              boxShadow:
                "0px 1px 1px rgba(0, 0, 0, 0.3), 0px -10px 20px rgba(0, 0, 0, 0.1), 10px 0px 20px rgba(0, 0, 0, 0.1), -10px 0px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <TableRow>
              {[
                "Student Name",
                "Description",
                "Year's",
                "Action",
                "Status",
              ].map((header, idx) => (
                <TableCell
                  key={idx}
                  sx={{ fontWeight: "bold", borderRight: "2px solid #9e9e9e" }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index} id={index}>
                <TableCell sx={{ border: "1px solid black" }}>
                  {student.name}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {`Email: ${student.email}, Mobile: ${student.mobile}, DOB: ${student.dob}, Course: ${student.stream}`}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  {student.courseYear}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  <IconButton
                    onClick={() => {
                      setSelectedStudent({ ...student, id: index });
                      setEditDialogOpen(true);
                    }}
                    sx={{ color: "#4CAF50" }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setSelectedStudent({ ...student, id: index });
                      setOpen(true);
                    }}
                    sx={{ color: "#F44336", ml: "20px" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }}>
                  <Typography
                    sx={{
                      borderRadius: "5px",
                      color: "white",
                      pt: "3px",
                      pb: "3px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "center",
                      bgcolor:
                        student.status == "Edited" ? "#abab10" : "#0a9e0a",
                    }}
                  >
                    {student.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>
          Are you sure you want to delete the student data?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>This action cannot be undone.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            No
          </Button>
          <Button onClick={() => handleAction("delete")} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>
          Are you sure you want to edit the student data?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will open the form with the current student data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            No
          </Button>
          <Button onClick={() => handleAction("edit")} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default StudentDataList;