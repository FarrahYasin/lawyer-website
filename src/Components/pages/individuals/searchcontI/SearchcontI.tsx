import React from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./SearchcontI.css";

const SearchcontI: React.FC = () => {
  const navigate = useNavigate();

  const handleFABClick = () => {
    navigate("/add-record");
  };

  return (
    <div className="srch-and-Btn-cont-i">
      <button className="FAB-button-i" onClick={handleFABClick}>
        سجل جديد <MdAdd />
      </button>
      <div className="search-cont-i">
        <input
          className="text-area-search-i"
          type="text"
          placeholder="ابحث عن سجل"
        />
        <MdSearch className="search-icons-i" size="1.3em" />
      </div>
    </div>
  );
};

export default SearchcontI;
