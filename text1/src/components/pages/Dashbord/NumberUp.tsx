import { Grid } from "@mui/material";

import Order from "./orderNumber";
import Price from "./Price";
import Special from "./speciallist";

const Index = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Grid
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          mt: { xs: 2 },
        }}
      >
        <Special />
      </Grid>

      <Grid
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          mt: { xs: 2 },
        }}
      >
        <Price />
      </Grid>

      <Grid
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          mt: { xs: 2 },
        }}
      >
        <Order />
      </Grid>
    </Grid>
  );
};

export default Index;
