import { Box, Grid, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Grid
        size={{ xs: 12, sm: 4 }}
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        <Box
          sx={{
            backgroundColor: "#6e4aff",
            borderRadius: "9px",
            height: "90px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "180px" }}
          >
            <Typography sx={{ color: "#fff", mb: 1, fontSize: "13px" }}>
              {" تعداد کل سفارشات :250"}
            </Typography>
            <Typography sx={{ color: "#fff", fontSize: "13px" }}>
              {" تعداد سفارشات موفق : 200"}
            </Typography>
          </Box>
          <img
            src="/images/order.png"
            alt="expert"
            style={{ height: "50px" }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default index;
