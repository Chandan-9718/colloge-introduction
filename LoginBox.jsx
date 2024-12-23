// React aur useState ko import kar rahe hain
import React, { useState } from "react";

// Material UI se kuch components import kar rahe hain
import {
  Box,
  Paper,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";

// Password show/hide icons ko import kar rahe hain
import { Visibility, VisibilityOff } from "@mui/icons-material";

// loginState.js se initial state aur constants import kar rahe hain
import { initialState } from "./LoginBoxComp/LoginBoxConst";

// LoginBox component banaya gaya hai
const LoginBox = ({ handleLoginClick, handleLoginSuccess, loggedUserInfo }) => {
  // useState hook ke sath state manage kar rahe hain
  const [state, setState] = useState(initialState);

  // Form submit hone par handleSubmit function call hoga
  const handleSubmit = (e) => {
    e.preventDefault(); // Default form submit behavior ko rok rahe hain
    const { userName, password } = state.loginInfo;
  
    // Agar username aur password sahi hai toh success message dikhayenge
    if (userName === loggedUserInfo?.USERNAME && password === loggedUserInfo?.PASSWORD) {
      handleLoginSuccess(); // Login successful hone par ye function call hoga
      setState((prev) => ({
        ...prev,
        open: true,
        message: "Login Successful",
        severity: "success",
      }));
    } else {
      
      // Agar username aur password galat hai toh error message dikhayenge
      setState((prev) => ({
        ...prev,
        open: true,
        message: "Invalid username or password",
        severity: "error",
      }));
    }
  };

  // Input fields mein value change hone par handleInputChange function call hoga
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      loginInfo: { ...prev.loginInfo, [name]: value },
    }));
  };

  // Password show/hide toggle karne ke liye function
  const togglePasswordVisibility = () => {
    setState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  // Snackbar close hone par handleClose function call hoga
  const handleClose = () => {
    setState((prev) => ({ ...prev, open: false }));
  };

  // Component ka UI render ho raha hai yaha
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Paper
        elevation={11}
        sx={{
          padding: "18px",
          height: "230px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          mt: "298px",
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Username"
          required
          variant="outlined"
          sx={{ mb: 2 }}
          name="userName"
          value={state.loginInfo.userName}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-password-input"
          required
          autoComplete="current-password"
          label="Password"
          variant="outlined"
          type={state.showPassword ? "text" : "password"}
          sx={{ mb: 2 }}
          name="password"
          value={state.loginInfo.password}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {state.showPassword ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLoginClick}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={state.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={state.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginBox;