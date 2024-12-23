import React from "react"; // React ko import kar rahe hain
import {  Routes, Route } from "react-router-dom"; // React Router DOM ke components ko import kar rahe hain
import CollegeDetails from "./CollegeDetails"; // CollegeDetails component ko import kar rahe hain
import LoginPortal from "./LoginPortal"; // LoginPortal component ko import kar rahe hain
import { HashRouter } from 'react-router-dom';
const App = () => {
  return (
    // BrowserRouter component ka use karke routing setup kar rahe hain
    <HashRouter>
      {/* Routes component ke andar sabhi route definitions hain */}
      <Routes>
        {/* Route component ka use karke home path '/' ke liye LoginPortal component render karenge */}
        <Route path="/" element={<LoginPortal />} />
        {/* Route component ka use karke '/CollegeDetails' path ke liye CollegeDetails component render karenge */}
        <Route path="/CollegeDetails" element={<CollegeDetails />} />
      </Routes>
    </HashRouter>
  );
};
export default App; // App component ko export kar rahe hain