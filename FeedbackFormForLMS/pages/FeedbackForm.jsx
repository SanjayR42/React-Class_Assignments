import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FeedbackForm() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z ]+$/, "Name must only contain alphabets and spaces")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone must be exactly 10 digits")
      .nullable(),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5"),
    feedback: Yup.string()
      .required("Feedback is required")
      .min(20, "Feedback must be at least 20 characters")
      .max(250, "Feedback cannot exceed 250 characters"),
  });

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-3">LMS Feedback Form</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          rating: "",
          feedback: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Feedback submitted:", values);
          alert("Thank you for your feedback!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label>Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Phone (optional)</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Rating (1-5)</label>
              <Field as="select" name="rating" className="form-control">
                <option value="">Select rating</option>
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="rating" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label>Feedback</label>
              <Field as="textarea" name="feedback" rows="4" className="form-control" />
              <ErrorMessage name="feedback" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Feedback
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
