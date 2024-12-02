import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    feedback: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    feedback: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log("Form Data:", values);
    alert("Form submitted successfully!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <Field id="name" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <Field
              as="textarea"
              id="feedback"
              name="feedback"
              placeholder="Enter your feedback"
              rows="5"
              cols="30"
            />
            <ErrorMessage name="feedback" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
