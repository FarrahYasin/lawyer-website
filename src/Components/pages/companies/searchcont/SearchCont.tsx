import React from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import "./SearchCont.css";

const SearchCont: React.FC = () => {
  return (
    <div className="srch-and-Btn-cont">
      <button className="FAB-button">
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
