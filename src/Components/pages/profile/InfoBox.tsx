import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface InfoBoxProps {
  details: { [key: string]: string | number };
}

// const userDetails = {
//     العنوان: "عمان - شارع المدينة المنورة",
//     الاسم: "محمد علي",
//     "رقم الهاتف": '+962 79999999',
//     "البريد الالكتروني": "user@example.com",
//     " رقم الهاتف الارضي": "06666666",
//     "رقم الفاكس": "76797979",
//   };
//   <InfoBox  details={userDetails} />
  
const InfoBox: React.FC<InfoBoxProps> = ({ details }) => {
  return (
    <Card sx={{}}>
      <CardContent>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
            },
            gap: 2,
            // alignItems: 'center',
          }}
        >
          {Object.entries(details).map(([key, value]) => (
            <Box
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 0,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {key}:
              </Typography>
              <Typography variant="body1">{value}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
