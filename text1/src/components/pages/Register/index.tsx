import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";

import {
  FormProvider,
  SelectField,
  TextField,
  useForm,
  Yup,
  yupResolver,
} from "../../atoms/Form";

import { Typography, Container, Paper, Grid } from "@mui/material";

const ListGender = [
  { value: 1, option: "زن" },
  { value: 2, option: "مرد" },
];

const ValidSchema = Yup.object().shape({
  FullName: Yup.string().required("This field is required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
});

const Index = () => {
  const [isLoading, setisLoading] = useState(false);

  const defaultValues = {
    FullName: "",
    Email: "",
    Gender: ListGender[0].value,
  };

  const methods = useForm({
    resolver: yupResolver(ValidSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          ارسال اطلاعات
        </Typography>

        <FormProvider methods={methods}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <SelectField name="Gender" options={ListGender} />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField required name="Email" placeholder="ایمیل" fullWidth />
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <TextField required name="FullName" placeholder="نام" fullWidth />
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} textAlign="center">
              <LoadingButton
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                loading={isLoading}
                sx={{
                  fontSize: "15px",
                  background: "#88b2e1",
                  color: "#fff",
                  borderRadius: "8px !important",
                  width: "120px",
                  height: 40,
                }}
              >
                ثبت
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Paper>
    </Container>
  );
};

export default Index;
