import React from "react";
import { MdEdit } from "react-icons/md";
import "./EditCont.css";

const EditCont: React.FC = () => {
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
            <h4 className="comp-name">
              شركة الفوسفات الأردنية للمساهمات المحدودة
            </h4>
            <p className="comp-type">منشأة حكومية</p>
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
