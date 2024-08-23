// App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/sidebar/Sidebar";
import Companies from "./Components/pages/companies/Companies";
import Individuals from "./Components/pages/individuals/Individuals";
import Profile from "./Components/pages/individuals/profile/Profile";
import BurgerMenu from "./Components/sidebar/burgerMenu/BurgerMenu";
import AddRecordForm from "./Components/pages/individuals/AddRecord/AddRecordForm"; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
          </div>
        <div className="burger-menu-container">
          <BurgerMenu />
        </div>
        <Routes>
          <Route path="/companies" element={<Companies />} />
          <Route path="/indiv" element={<Individuals />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/add-record" element={<AddRecordForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
