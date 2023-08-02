import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function Tasarim() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required()
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$/, "Ad alanına sadece harfler giriniz"),
    lastName: yup
      .string()
      .required()
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$/, "Ad alanına sadece harfler giriniz"),

    email: yup.string().email("Geçerli Bir Email Giriniz").required(),
    city: yup
      .string()
      .required("Şehrinizi Doğru Seçiniz")
      .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ/]+$/, "Şehir alanına sayı girmeyiniz"),

    terms: yup
      .bool()
      .required()
      .oneOf([true], "Kullanım Koşullarını Kabul Ediyorum"),
  });

  return (
    <div className="tasarim">
      <h3>Servis Başvuru Formu</h3>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          city: "",
          email: "",
          carModel: "",

          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Ad</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>
                  Girdiğiniz bilgi Geçerli
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Soyad</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>
                  Girdiğiniz bilgi Geçerli
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>Şehir</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik04">
                <Form.Label>e-mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e-mail giriniz"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik05">
                <Form.Label>Marka Seçiniz</Form.Label>
                <Form.Select
                  placeholder="Model Seçiniz"
                  name="carModel"
                  value={values.carModel}
                  onChange={handleChange}
                  isInvalid={!!errors.carModel}
                >
                  <option>Marka Seçiniz</option>
                  <option>Audi</option>
                  <option>Mercedes</option>
                  <option>Bmw</option>
                  <option>Ford</option>
                  <option>Ferrari</option>
                  <option>Suzuki</option>
                  <option>Dodge</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.carModel}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Gönder</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Tasarim;
