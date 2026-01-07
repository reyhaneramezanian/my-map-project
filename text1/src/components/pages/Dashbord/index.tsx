import { Grid } from "@mui/material";

import Number from "./NumberUp";
import Chart from "./chart";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [temperature, setTemperature] = useState(null);
  const [hours, setHours] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.7&longitude=51.4&hourly=temperature_2m"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // دریافت 12 ساعت اول
        const temp = data.hourly.temperature_2m.slice(0, 12);
        const time = data.hourly.time.slice(0, 12).map((t) => t.split("T")[1]);

        setTemperature(temp);
        setHours(time);
      });
  }, []);

  if (!temperature || !hours) return <p>در حال بارگذاری...</p>;

  const chartData = {
    labels: hours,
    datasets: [
      {
        label: "دما (°C)",
        data: temperature,
        backgroundColor: "rgba(110, 74, 255, 0.7)",
      },
    ],
  };
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mr={{ xs: 2, md: 10 }}
        ml={{ xs: 2, md: 10 }}
      >
        <Grid size={{ md: 12 }}>
          <Number />
        </Grid>
        <Grid size={{ md: 12 }}>
          <LoadingButton
            variant="contained"
            onClick={() => router.push("./Register")}
            sx={{
              fontSize: "15px",
              background: "#88b2e1",
              color: "#fff",
              borderRadius: "8px !important",
              width: "120px",
              height: 40,
              mt: 2,
            }}
          >
            Register
          </LoadingButton>
        </Grid>
        <Grid size={{ md: 12 }}>
          <Chart chartData={chartData} />
        </Grid>
      </Grid>
    </>
  );
};

export default index;
