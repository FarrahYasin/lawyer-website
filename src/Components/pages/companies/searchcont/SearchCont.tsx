import React from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./SearchCont.css";

const SearchCont: React.FC = () => {
  const navigate = useNavigate();
  const handleFABClick = () => {
    navigate("/add-comp-record");
  };
  return (
    <div className="srch-and-Btn-cont">
      <button className="FAB-button" onClick={handleFABClick}>
        سجل جديد <MdAdd />
      </button>
      <div className="search-cont">
        <input
          className="text-area-search"
          type="text"
          placeholder="ابحث عن سجل"
        />
        <MdSearch className="search-icons" size="1.3em" />
      </div>
    </div>
  );
};
export default SearchCont;
