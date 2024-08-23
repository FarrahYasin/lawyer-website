import React from "react";
import { MdEdit } from "react-icons/md";
import "./EditCont.css";
import { useNavigate } from "react-router-dom";
interface Company {
  id: string;
  name: string;
  facility_type: string;
}

interface EditContIProps {
  company: Company;
}

const EditCont: React.FC<EditContIProps> = ({ company }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wholeEditCont">
        <div className="checkAndText">
          <input
            className="check-edit"
            type="checkbox"
            name="Checkbox"
            id="Checkbox"
          />
          <div className="nameAndType">
            <h4
              className="comp-name"
              onClick={() => navigate(`/comp-profile/${company.id}`)}
            >
              {company.name}{" "}
            </h4>
            <p className="comp-type">{company.facility_type}</p>
          </div>
          <button className="edit-btn2">
            <div className="icon-wrapper">
              <MdEdit size="1.2em" />
            </div>
            <span className="button-text">تعديل</span>
          </button>
        </div>
      </div>
      <hr className="hr-text" />
    </>
  );
};

export default EditCont;
