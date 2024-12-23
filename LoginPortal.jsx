import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Typography, Link, Alert, Button, Snackbar } from "@mui/material";
import LoginBox from "./LoginPortalComp/LoginBox";
import LoginIcon from "@mui/icons-material/Login";
import "./LoginPortalComp/Style/LoginPortalPage.css";
import {
  loggedUserInfo,
  useCustomNavigate,
  handleClose,
  signUpAlert,
  handleLoginClick,
} from "./LoginPortalComp/LoginPortalConst";

const LoginPortal = () => {
  const [state, setState] = useState({ showForm: false, open: false });

  const { handleLoginSuccess } = useCustomNavigate();

  return (
    <Box
      className="LoginPortalClgPic"
      sx={{
        backgroundImage: `url(${require("./LoginPortalComp/ImageCollegePic.jpg")})`,
      }}
    >
      <Box className="box">
        <Box>
          <span className="span">
            Welcome To,
            <Link color="inherit" sx={{ ml: "10px" }}>
              Indo Global College.
            </Link>
          </span>
          {!state.showForm && (
            <Typography sx={{ mt: "10px", fontSize: "17px" }}>
              Get started by Sign-up or login through your account.
            </Typography>
          )}
        </Box>  
        <br />
        {!state.showForm && (
          <Box className="buttonContainer">
            <Button
              onClick={signUpAlert(setState)}
              variant="contained"
              sx={{
                bgcolor: "#2e6585",
                "& .MuiButton-startIcon": {
                  marginRight: "8px",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                },
                "& .MuiSvgIcon-root": { fontSize: 35 },
              }}
            >
              <AccountCircleIcon /> &nbsp;&nbsp; Sign-up
            </Button>
            <Snackbar
              open={state.open}
              autoHideDuration={3000}
              onClose={handleClose(setState)}
            >
              <Alert
                onClose={handleClose(setState)}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Implementation to Sign-up for new members is not done yet.
                Please login with your friend’s account.
              </Alert>
            </Snackbar>
            <Button
              onClick={handleLoginClick(setState)}
              variant="contained"
              sx={{ bgcolor: "#2e6585",
                "& .MuiButton-startIcon": {
                  marginRight: "8px",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                }, padding: "0px 25px" }}
            >
              <LoginIcon /> &nbsp;&nbsp; Login
            </Button>
          </Box>
        )}
      </Box>
      {state.showForm && (
        <LoginBox
          handleLoginClick={handleLoginClick(setState)}
          handleLoginSuccess={handleLoginSuccess}
          loggedUserInfo={loggedUserInfo}
        />
      )}
    </Box>
  );
};
export default LoginPortal;