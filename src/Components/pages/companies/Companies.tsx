import "./Companies.css";
import EditCont from "./editCont/EditCont";
import React, { useEffect, useState } from "react";
import SearchCont from "./searchcont/SearchCont";
import Delcont from "./delcont/Delcont";

interface Company {
  id: string;
  name: string;
  facility_type: string;
}
const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    // localStorage.clear();
    // Fetch the data from localStorage
    const storedData = localStorage.getItem("companiesData");
    if (storedData) {
      setCompanies(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className="text-component-div">
      <h2 className="company-text-h2">سجل المنشآت</h2>
      <p className="copmany-text-p">
        تحوي هذه الصفحة قائمةً لجميع سجلات المنشآت
      </p>

      <div className="secSection">
        <SearchCont />
        <Delcont />
      </div>

      <div className="Edit">
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <EditCont key={index} company={company} />
          ))
        ) : (
          <p>لا يوجد سجلات حالياً.</p>
        )}
      </div>
    </div>
  );
};

export default Companies;
