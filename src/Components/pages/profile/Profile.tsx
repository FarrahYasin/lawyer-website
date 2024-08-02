import React, { useState } from "react";
import "./Profile.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaCalendarDay, FaFlag, FaUserAlt, FaUserTie } from "react-icons/fa";
import { PiGenderMaleBold } from "react-icons/pi";
const Profile: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            minHeight: "2%",
            color: "#0C1033",
          },
          "& .MuiTabs-flexContainer": {
            gap: 0,
            display: "flex",
            flexDirection: "row",
          },
          // "& .MuiTabs-indicator.css-1aquho2-MuiTabs-indicator": {
          //   bgcolor: "rgba(199, 77, 197, 6)",
          // },

          "& .MuiTabs-scroller.MuiTabs-hideScrollbar.MuiTabs-scrollableX.css-69z67c-MuiTabs-scroller":
            {
              minHeight: "22px",
              // bgcolor:"#0C1033",
              margin: "0px",
            },
          "& .MuiTabs-root.tabs-t.css-6bobcw-MuiTabs-root": {
            minHeight: "12px",
            // bgcolor:"rgba(81, 5, 253, 1)"
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
                <td>عمان - شارع المدينة المنورة</td>
              </tr>
              <tr>
                <th>البريد الالكتروني</th>
                <td>user@example.com</td>
              </tr>
              <tr>
                <th>رقم الهاتف</th>
                <td>123456789+</td>
              </tr>
              <tr>
                <th>رقم الفاكس</th>
                <td>987654321+</td>
              </tr>
              <tr>
                <th>رقم الهاتف الارضي</th>
                <td>1122334455+</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 1 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>مسمى الوظيفة</th>
                <td>مهندس مدني</td>
              </tr>
              <tr>
                <th>وصف المسمى</th>
                <td>مسمى أفراد</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 2 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>نوع الوثيقة</th>
                <td>جواز سفر دائم</td>
              </tr>
              <tr>
                <th>رقم الوثيقة</th>
                <td>7777777777</td>
              </tr>
              <tr>
                <th>الرقم الوطني</th>
                <td>0050050005</td>
              </tr>
            </tbody>
          </table>
        )}

        {value === 3 && (
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>الملاحظات</th>
                <td>
                  لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                  المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
                  إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                  قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من
                  نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة
                  قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                  وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير
                  في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" البلاستيكية
                  تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور
                  برامج النشر الإلكتروني مثل "ألدوس بايج مايكر والتي حوت أيضاً
                  على نسخ من نص لوريم إيبسوم.
                </td>
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
          <img
            src="src/assets/lawyer-profile.png"
            alt="Profile Image"
            className="info-card-image"
          />
          <p className="info-card-name">محمد علي كامل سليمان</p>
        </div>

        <div className="info-card-content">
          <div className="div-infoo">
            <PiGenderMaleBold className="icon" />
            <div className="text-container">
              <span className="info-label">الجنس</span>
              <span className="label-cont">ذكر</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaCalendarDay className="icon" />
            <div className="text-container">
              <span className="info-label">تاريخ الميلاد</span>
              <span className="label-cont">11/9/1990</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaFlag className="icon" />
            <div className="text-container">
              <span className="info-label">الجنسية</span>
              <span className="label-cont">أردني</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserTie className="icon" />
            <div className="text-container">
              <span className="info-label">الحالة الاجتماعية</span>
              <span className="label-cont">متزوج</span>
            </div>
          </div>
          <div className="div-infoo">
            <FaUserAlt className="icon" />
            <div className="text-container">
              <span className="info-label">اسم الام</span>
              <span className="label-cont">ريما</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
