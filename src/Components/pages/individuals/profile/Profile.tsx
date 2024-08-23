import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaCalendarDay, FaFlag, FaUserAlt, FaUserTie } from "react-icons/fa";
import { PiGenderMaleBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import "./Profile.css";

interface ProfileData {
  id: string;
  name: string;
  gender: string;
  birthdate: string;
  nationality: string;
  maritalStatus: string;
  motherName: string;
  address: string;
  email: string;
  phoneNumber: string;
  faxNumber: string;
  landlineNumber: string;
  jobTitle: string;
  jobDescription: string;
  documentType: string;
  documentNumber: string;
  nationalId: string;
  notes: string;
  profileImage: string;
}

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // this to get the userId from the URL parameters
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    // Fetch the data from the localStorage
    const storedData = localStorage.getItem("individualsData");
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
          label="معلومات التواصل"
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
          label="المعلومات المهنية"
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
          label="معلومات الوثيقة"
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
          label="ملاحظات"
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
                <th>العنوان</th>
                <td>{profileData.address}</td>
              </tr>
              <tr>
                <th>البريد الالكتروني</th>
                <td>{profileData.email}</td>
              </tr>
              <tr>
                <th>رقم الهاتف</th>
                <td>{profileData.phoneNumber}</td>
              </tr>
              <tr>
                <th>رقم الفاكس</th>
                <td>{profileData.faxNumber}</td>
              </tr>
              <tr>
                <th>رقم الهاتف الارضي</th>
                <td>{profileData.landlineNumber}</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 1 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>مسمى الوظيفة</th>
                <td>{profileData.jobTitle}</td>
              </tr>
              <tr>
                <th>وصف المسمى</th>
                <td>{profileData.jobDescription}</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 2 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>نوع الوثيقة</th>
                <td>{profileData.documentType}</td>
              </tr>
              <tr>
                <th>رقم الوثيقة</th>
                <td>{profileData.documentNumber}</td>
              </tr>
              <tr>
                <th>الرقم الوطني</th>
                <td>{profileData.nationalId}</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 3 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>الملاحظات</th>
                <td>{profileData.notes}</td>
              </tr>
            </tbody>
          </table>
        )}
      </Box>
      <Box className="btns-t">
        <button className="button add-button">سجل جديد +</button>
        <button className="button edit-button">تعديل السجل</button>
        <button className="button print-button">طباعة السجل</button>
        <button className="button delete-button">حذف السجل</button>
      </Box>

      <div className="card-t">
        <div className="info-card-image-container">
          {profileData.profileImage ? (
            <img
              src={profileData.profileImage}
              alt="Profile"
              className="info-card-image"
            />
          ) : (
            <img
              src="/assets/lawyer-profile.png"
              alt="Profile"
              className="info-card-image"
            />
          )}
         
          <p className="info-card-name">{profileData.name}</p>
        </div>

        <div className="info-card-content">
          <div className="div-infoo">
            <PiGenderMaleBold className="icon" />
            <div className="text-container">
              <span className="info-label">الجنس</span>
              <span className="label-cont">{profileData.gender}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaCalendarDay className="icon" />
            <div className="text-container">
              <span className="info-label">تاريخ الميلاد</span>
              <span className="label-cont">{profileData.birthdate}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaFlag className="icon" />
            <div className="text-container">
              <span className="info-label">الجنسية</span>
              <span className="label-cont">{profileData.nationality}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserAlt className="icon" />
            <div className="text-container">
              <span className="info-label">الحالة الاجتماعية</span>
              <span className="label-cont">{profileData.maritalStatus}</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserTie className="icon" />
            <div className="text-container">
              <span className="info-label">اسم الام</span>
              <span className="label-cont">{profileData.motherName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
