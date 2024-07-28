import React from "react";
import "./EditContI.css";
import { MdEdit } from "react-icons/md";
import { useNavigate} from "react-router-dom";

const EditContI: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wholeEditCont-i">
        <div className="checkAndText-i">
          <input
            className="check-edit-i"
            type="checkbox"
            name="Checkbox"
            id="Checkbox"
          />
          <div className="nameAndType-i">
            <h4 className="comp-name-i" onClick={() => navigate("/profile")}>محمد علي كامل سليمان</h4>
            <p className="comp-type-i">طبيب جراحة أعصاب</p>
          </div>
          <button className="edit-btn2-i">
            <div className="icon-wrapper-i">
              <MdEdit size="1.2em" />
            </div>
            <span className="button-text-i">تعديل</span>
          </button>
        </div>
      </div>
      <hr className="hr-text-i" />
    </>
  );
};
export default EditContI;
