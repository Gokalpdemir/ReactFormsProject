import {
  TextInput,
  Box,
  Flex,
  Stack,
  Select,
  Checkbox,
  Button,
  NativeSelect,
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
      <form onSubmit={handleSubmit}>
        <Box maw={300} display={Flex}>
          <Stack maw={300} mx="auto" display={Flex} direction={"row"}>
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
            <TextInput
              withAsterisk
              label="Soyad"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              error={errors.lastName}
              placeholder="Soyadınızı Giriniz"
            />
          </Stack>
          <Stack>
            <TextInput
              withAsterisk
              label="Şehir"
              name="city"
              onChange={handleChange}
              value={values.city}
              placeholder="Şehrinizi Giriniz"
              error={errors.city}
            />
            <TextInput
              withAsterisk
              label="E-mail"
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              placeholder="E-mailinizi giriniz"
            />
          </Stack>
          <Stack>
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
              name="terms"
              checked={values.terms}
              onChange={handleChange}
              required
              label="Kullanım Koşullarını Kabul ediyorum"
            />
            <Button type="submit">Formu Gönder</Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}

export default Mantine;
