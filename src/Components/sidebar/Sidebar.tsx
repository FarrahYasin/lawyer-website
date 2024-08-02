import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdPeople } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // this to get the current path

  return (
    <div className="sidebar-container">
      <div className="sideSecSection">
        <div className="img-container">
          <img
            className="sidebar-logo"
            src="/assets/logo.png"
            alt="company_logo"
            onClick={() => navigate("/")}
          />
        </div>
        <button
          className={`indi-button ${
            location.pathname === "/indiv" ? "active" : ""
          }`}
          onClick={() => navigate("/indiv")}
        >
          <div className="icon-container">
            <MdPeople className="icon-pen" />
          </div>
          <span className="indi-span">سجل الأفراد</span>
        </button>
        <button
          className={`comp-button ${
            location.pathname === "/companies" ? "active" : ""
          }`}
          onClick={() => navigate("/companies")}
        >
          <div className="icon-container">
            <FaBuilding className="icon-pen" />
          </div>
          <span className="comp-span">سجل المنشآت</span>
        </button>
      </div>

      <button className="btn-logout" onClick={() => navigate("/")}>
        <div className="icon-container">
          <LuLogOut className="icon-pen" />
        </div>
        <span className="logout-span">تسجيل الخروج</span>
      </button>
    </div>
  );
};
export default Sidebar;
