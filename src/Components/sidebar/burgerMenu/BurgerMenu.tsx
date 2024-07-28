import React from "react";
import "./BurgerMenu.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

const BurgerMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div
        className={`nav-item ${location.pathname === "/indiv" ? "active" : ""}`}
        onClick={() => navigate("/indiv")}
      >
        <div className="icon-container">
          <MdPeople className="icon-pen" />
        </div>
        سجل الأفراد
      </div>
      <div
        className={`nav-item ${
          location.pathname === "/companies" ? "active" : ""
        }`}
        onClick={() => navigate("/companies")}
      >
        <div className="icon-container">
          <FaBuilding className="icon-pen" />
        </div>
        سجل المنشآت
      </div>
      <div
        className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <div className="icon-container">
          <LuLogOut className="icon-pen" />
        </div>
        تسجيل الخروج
      </div>
    </div>
  );
};

export default BurgerMenu;
