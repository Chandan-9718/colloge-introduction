// constantsAndFunctions.js
import { useNavigate } from "react-router-dom";

// User information ko object ke roop mein define karte hain
export const loggedUserInfo = {
  MYNAME: "Chandan & Kaushal",
  USERNAME: "chandan@gmail.com",
  PASSWORD: "12345678",
};

// useNavigate hook ko yahan define kar ke function ke roop mein export karte hain
export const useCustomNavigate = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate('/CollegeDetails', {
      replace: true, 
      state: { loggedUserName: loggedUserInfo?.MYNAME ?? 'MYNAME' } 
    });
  };
  return { handleLoginSuccess };
};

// Sign-up alert ko toggle karne wala function
export const signUpAlert = (setState) => () => {
  setState((prev) => ({ ...prev, open: !prev.open }));
};

// Snackbar ko close karne ke liye function
export const handleClose = (setState) => (event, reason) => {
  if (reason !== "clickaway") {
    setState((prev) => ({ ...prev, open: false }));
  }
};

// Login button par click hone par state ko toggle karne wala function
export const handleLoginClick = (setState) => () => {
  setState((prev) => ({ ...prev, open: false, showForm: !prev.showForm }));
};