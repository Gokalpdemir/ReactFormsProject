import React from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

function Sigorta() {
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("Bu alan zorunludur")
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ/]+$/, "Ad alanına sadece harfler giriniz"),
    lastName: yup
      .string()
      .required("Bu alan zorunludur")
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ/]+$/, "Soyad alanına sayı girmeyiniz"),
    email: yup
      .string()
      .email("Geçerli bir email giriniz")
      .required("Bu alan zorunludur"),
    city: yup
      .string()
      .required("Şehir girmek zorunludur")
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ/]+$/, "Şehir alanına sayı girmeyiniz"),
    terms: yup
      .boolean()
      .required()
      .oneOf([true], "Kullanım Koşullarını Kabul Ediniz"),
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      carModel: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="tasarim">
      <h3>Servis Başvuru Formu</h3>
      <form onSubmit={handleSubmit}>
        <Stack
          direction={"row"}
          spacing={2}
          margin={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <TextField
            id="firstName"
            name="firstName"
            label="Ad"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            error={touched.firstName && Boolean(errors.firstName)}
            onBlur={handleBlur} // Formdaki her bir alanın, o alandan çıkıldığında çalışacak olayı yönetir. Bu da formun alanlardan çıkıldığında hataları göstermesini sağlar.
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Soyad"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            error={touched.lastName && Boolean(errors.lastName)}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
          />
        </Stack>

        <Stack
          direction={"row"}
          spacing={2}
          margin={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <TextField
            id="city"
            name="city"
            label="Şehir"
            type="text"
            value={values.city}
            onChange={handleChange}
            error={touched.city && Boolean(errors.city)}
            onBlur={handleBlur}
            helperText={touched.city && errors.city}
          />
          <TextField
            id="email"
            name="email"
            label="e-mail"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
          />
        </Stack>
        <Stack>
          <InputLabel>Marka Seçiniz</InputLabel>
          <Select
            id="carModel"
            name="carModel"
            label="Marka Seçiniz"
            value={values.carModel}
            onChange={handleChange}
          >
            <MenuItem value="Audi">Audi</MenuItem>
            <MenuItem value="Mercedes">Mercedes</MenuItem>
            <MenuItem value="Bmw">Bmw</MenuItem>
            <MenuItem value="Ford">Ford</MenuItem>
            <MenuItem value="Ferrari">Ferrari</MenuItem>
            <MenuItem value="Suzuki">Suzuki</MenuItem>
            <MenuItem value="Dodge">Dodge</MenuItem>
          </Select>
          <FormControl error={touched.terms && Boolean(errors.terms)}>
            <FormControlLabel
              control={
                <Checkbox
                  name="terms"
                  checked={values.terms}
                  onChange={handleChange}
                  required
                />
              }
              label="Kullanım Koşullarını Kabul Ediyorum"
            />
            {touched.terms && errors.terms && (
              <FormHelperText>{errors.terms}</FormHelperText>
            )}
          </FormControl>
          <Button type="submit" variant="contained" disabled={!isValid}>
            Formu Gönder
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Sigorta;
