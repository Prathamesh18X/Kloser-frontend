import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import Cartpage from "./Pages/Cartpage";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
