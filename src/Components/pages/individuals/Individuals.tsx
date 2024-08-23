import React, { useEffect, useState } from "react";
import SearchcontI from "./searchcontI/SearchcontI";
import DelcontI from "./delcontI/DelcontI";
import EditContI from "./editContI/EditContI";
import "./Individuals.css";

interface Individual {
  id: string;
  name: string;
  jobTitle: string;
}

const Individuals: React.FC = () => {
  const [individuals, setIndividuals] = useState<Individual[]>([]);

  useEffect(() => {
    // localStorage.clear();
    // Fetch the data from localStorage
    const storedData = localStorage.getItem("individualsData");
    if (storedData) {
      setIndividuals(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="text-component-div-i">
      <h2 className="company-text-h2-i">سجل الأفراد</h2>
      <p className="copmany-text-p-i">
        تحوي هذه الصفحة قائمةً لجميع سجلات الموكلين
      </p>

      <div className="secSection-i">
        <SearchcontI />
        <DelcontI />
      </div>
      <div className="Edit-i">
        {individuals.length > 0 ? (
          individuals.map((individual, index) => (
            <EditContI key={index} individual={individual} />
          ))
        ) : (
          <p>لا يوجد سجلات حالياً.</p>
        )}
      </div>
    </div>
  );
};

export default Individuals;
