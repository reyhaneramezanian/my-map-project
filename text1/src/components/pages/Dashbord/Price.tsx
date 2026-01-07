import { Box, Grid, Typography } from "@mui/material";

const Index = () => {
  return (
    <Grid
      size={{ xs: 12, sm: 4 }}
      sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
    >
      <Box
        sx={{
          backgroundColor: "#6e4aff",
          borderRadius: "9px",
          height: "90px",
          width: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "180px" }}>
          <Typography sx={{ color: "#fff", mb: 1, fontSize: "13px" }}>
            {"بازدید کنندگان : 10 نفر"}
          </Typography>
          <Typography sx={{ color: "#fff", mb: 1, fontSize: "13px" }}>
            {"تعداد افراد فعال : 5"}
          </Typography>
        </Box>
        <img src="/images/mony.png" alt="expert" style={{ height: "50px" }} />
      </Box>
    </Grid>
  );
};

export default Index;
