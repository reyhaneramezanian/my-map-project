import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import React, { FC, useState } from "react";

import { useForm } from "../../atoms/Form";
import { FormProvider, TextField } from "../../atoms/Form";

import { IPageProps } from "./type-page";

const Index: FC<IPageProps> = ({ onSearchItem }) => {
  const [value, setValue] = useState("");

  const defaultValues = {
    name: "",
  };

  const methods = useForm({
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: typeof defaultValues) => {
    onSearchItem(data.name);
  };

  return (
    <FormProvider methods={methods}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="flex-start"
        dir="rtl"
        padding="0 10px "
      >
        <Grid item xs={12} sm={3}>
          <TextField
            required
            label="City"
            name="name"
            placeholder=""
            fullWidth
            sx={{ height: "40px" }}
          />
        </Grid>

        <Grid item xs={12} sm={3} sx={{ marginTop: "28px" }}>
          <LoadingButton
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{
              fontSize: "15px",
              background: "#88b2e1",
              color: "#fff",
              borderRadius: "8px",
              minWidth: 100,
              height: 40,
            }}
          >
            Search
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default Index;
