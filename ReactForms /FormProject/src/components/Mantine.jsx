import {
  TextInput,
  Box,
  Flex,
  Stack,
  Select,
  Checkbox,
  Button,
  NativeSelect,
  Grid,
} from "@mantine/core";

import { useFormik } from "formik";

import * as yup from "yup";

function Mantine() {
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("Bu alan zorunludur")
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$/, "Ad alanına sadece harfler giriniz"),
    lastName: yup
      .string()
      .required("Bu alan zorunludur")
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$/, "Ad alanına sadece harfler giriniz"),
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
    <div className="mantine">
      <Box
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="Ad"
                name="firstName"
                //   error={}
                onChange={handleChange}
                value={values.firstName}
                placeholder="Adınızı giriniz"
                error={errors.firstName}
                description={touched.lastName && errors.lastName}
                onBlur={handleBlur} // Formdaki her bir alanın, o alandan çıkıldığında çalışacak olayı yönetir. Bu da formun alanlardan çıkıldığında hataları göstermesini sağlar.
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="Soyad"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                error={errors.lastName}
                placeholder="Soyadınızı Giriniz"
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="Şehir"
                name="city"
                onChange={handleChange}
                value={values.city}
                placeholder="Şehrinizi Giriniz"
                error={errors.city}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                withAsterisk
                label="E-mail"
                name="email"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                placeholder="E-mailinizi giriniz"
              />
            </Grid.Col>
            <Grid.Col>
              <NativeSelect
                label="Marka Seçiniz"
                name="carModel"
                id="carModel"
                placeholder="Markalar"
                value={values.carModel}
                onChange={handleChange}
                data={[
                  { value: "Audi", label: "Audi" },
                  { value: "Mercedes", label: "Mercedes" },
                  { value: "Bmw", label: "Bmw" },
                  { value: "Ford", label: "Ford" },
                  { value: "Ferrari", label: "Ferrari" },
                  { value: "Suzuki", label: "Suzuki" },
                  { value: "Dodge", label: "Dodge" },
                ]}
              />
              <Checkbox
                my={5}
                name="terms"
                checked={values.terms}
                onChange={handleChange}
                required
                label="Kullanım Koşullarını Kabul ediyorum"
              />
              <Button type="submit">Formu Gönder</Button>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default Mantine;
