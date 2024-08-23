import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaCalendarDay, FaFlag, FaUserAlt, FaUserTie } from "react-icons/fa";
import { PiGenderMaleBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import "./ProfileComp.css";

interface ProfileData {
  id: string;
  name: string;
  titleDescription: string;
  address: string;
  facility_registration_number: string;
  phoneNumber: string;
  landlineNumber: string;
  faxNumber: string;
  sequence: string;
  commerciaL_register_sequence: string;
  Issuance_of_commercial_register: string;
  commercial_register_date: string;
  delegation_facts: string;
  facility_registration_status: string;
  nationality: string;
  facility_type: string;
  record_number: string;
  Commissioner_name: string;
  Commissioner_phone: string;
  job_title: string;
}

const ProfileComp: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // this to get the userId from the URL parameters
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    // Fetch the data from the localStorage
    const storedData = localStorage.getItem("companiesData");
    if (storedData) {
      const parsedData: ProfileData[] = JSON.parse(storedData);
      // Find the user data based on the userId
      const userProfile = parsedData.find((user) => user.id === userId); // Compare the  strings
      if (userProfile) {
        setProfileData(userProfile);
      } else {
        console.error("User not found");
      }
    }
  }, [userId]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="dev1-t">
        <p className="p-quraan">
          ﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ
          بِالْقِسْطِ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَى أَلَّا
          تَعْدِلُوا اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَى وَاتَّقُوا اللَّهَ
          إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ ﴾ [المائدة: 8]
        </p>
      </div>
      <Tabs
        className="tabs-t"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          bgcolor: "background.paper",
          border: "1.5px solid #0C1033",
          "& .MuiTab-root": {
            flex: 1,
            color: "#0C1033",
          },
          "& .MuiTabs-flexContainer": {
            gap: 0,
            display: "flex",
            flexDirection: "row",
          },
          "& .MuiTabs-scroller": {
            minHeight: "22px",
            margin: "0px",
          },
          "& .MuiTabs-root.tabs-t": {
            minHeight: "12px",
          },
        }}
      >
        <Tab
          className="tab"
          sx={{
            "&.Mui-selected": {
              flex: 1,
              bgcolor: "rgba(81, 5, 253, 1)",
              color: "#ffff",
              fontWeight: "bold",
            },
          }}
          label="المعلومات الاولية للمنشأة"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              flex: 1,
              bgcolor: "rgba(81, 5, 253, 1)",
              color: "#ffff",
              fontWeight: "bold",
            },
          }}
          label="السجلات التجارية"
        />
        <Tab
          sx={{
            "&.Mui-selected": {
              flex: 1,
              bgcolor: "rgba(81, 5, 253, 1)",
              color: "#ffff",
              fontWeight: "bold",
            },
          }}
          label="المفوضون بالتوقيع على المنشأة"
        />
      </Tabs>

      <Box
        style={{
          border: "2px solid rgba(217, 217, 217, 1)",
        }}
        className="content-t"
      >
        {value === 0 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>اسم المنشأة</th>
                <td>{profileData.name}</td>
              </tr>
              <tr>
                <th>وصف المسمى</th>
                <td>{profileData.titleDescription}</td>
              </tr>
              <tr>
                <th>العنوان</th>
                <td>{profileData.address}</td>
              </tr>
              <tr>
                <th>رقم تسجيل المنشأة</th>
                <td>{profileData.facility_registration_number}</td>
              </tr>
              <tr>
                <th>رقم الموبايل</th>
                <td>{profileData.phoneNumber}</td>
              </tr>
              <tr>
                <th>رقم الهاتف</th>
                <td>{profileData.landlineNumber}</td>
              </tr>
              <tr>
                <th>رقم الفاكس</th>
                <td>{profileData.faxNumber}</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 1 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>التسلسل</th>
                <td>{profileData.sequence}</td>
              </tr>
              <tr>
                <th>تسلسل السجل التجاري</th>
                <td>{profileData.commerciaL_register_sequence}</td>
              </tr>
              <tr>
                <th>إصدار السجل التجاري</th>
                <td>{profileData.Issuance_of_commercial_register}</td>
              </tr>
              <tr>
                <th>تاريخ السجل التجاري</th>
                <td>{profileData.commercial_register_date}</td>
              </tr>
              <tr>
                <th>وقائع التفويض</th>
                <td>{profileData.delegation_facts}</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 2 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>اسم المفوض</th>
                <td>{profileData.Commissioner_name}</td>
              </tr>
              <tr>
                <th>المسمى الوظيفي</th>
                <td>{profileData.job_title}</td>
              </tr>
              <tr>
                <th>رقم هاتف المفوض</th>
                <td>{profileData.Commissioner_phone}</td>
              </tr>
              <tr>
                <th>التسلسل</th>
                <td>{profileData.sequence}</td>
              </tr>
              <tr>
                <th>تسلسل السجل التجاري</th>
                <td>{profileData.commerciaL_register_sequence}</td>
              </tr>
              <tr>
                <th>إصدار السجل التجاري</th>
                <td>{profileData.Issuance_of_commercial_register}</td>
              </tr>
              <tr>
                <th>تاريخ السجل التجاري</th>
                <td>{profileData.commercial_register_date}</td>
              </tr>
            </tbody>
          </table>
        )}
      </Box>
      <Box className="btns-t">
        <button className="button add-button">مفوض جديد +</button>
        <button className="button edit-button">تعديل السجل</button>
        <button className="button print-button">طباعة السجل</button>
        <button className="button delete-button">حذف السجل</button>
      </Box>

      <div className="card-t">
        <div className="info-card-image-container">
          <img
            src="/assets/lawyer-profile.png"
            alt="Profile"
            className="info-card-image"
          />
          <p className="info-card-name">{profileData.name}</p>
        </div>

        <div className="info-card-content">
          <div className="div-infoo">
            <PiGenderMaleBold className="icon" />
            <div className="text-container">
              <span className="info-label">العلامة التجارية</span>
              <span className="label-cont">{profileData.name}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaCalendarDay className="icon" />
            <div className="text-container">
              <span className="info-label">صفة تسجيل المنشأة</span>
              <span className="label-cont">
                {profileData.facility_registration_status}
              </span>
            </div>
          </div>
          <div className="div-infoo">
            <FaFlag className="icon" />
            <div className="text-container">
              <span className="info-label">نوع المنشأة</span>
              <span className="label-cont">{profileData.facility_type}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserAlt className="icon" />
            <div className="text-container">
              <span className="info-label">جنسية المنشأة</span>
              <span className="label-cont">{profileData.nationality}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserTie className="icon" />
            <div className="text-container">
              <span className="info-label">رقم السجل</span>
              <span className="label-cont">{profileData.record_number}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserTie className="icon" />
            <div className="text-container">
              <span className="info-label">السجل التجاري</span>
              <span className="label-cont">{profileData.sequence}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserTie className="icon" />
            <div className="text-container">
              <span className="info-label"> تسلسل السجل التجاري </span>
              <span className="label-cont">
                {profileData.commerciaL_register_sequence}
              </span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserTie className="icon" />
            <div className="text-container">
              <span className="info-label">تاريخ السجل التجاري</span>
              <span className="label-cont">
                {profileData.commercial_register_date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
