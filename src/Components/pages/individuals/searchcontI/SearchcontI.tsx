import React from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import "./SearchcontI.css";

const SearchcontI: React.FC = () => {
  return (
    <div className="srch-and-Btn-cont-i">
      <button className="FAB-button-i">
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
