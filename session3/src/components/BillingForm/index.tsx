import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  addressLine: Yup.string().required("addressLine is required"),
  suite: Yup.string().required("Suite is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required")
});

const FormTest: React.FC = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              addressLine: "",
              suite: "",
              city: "",
              state: "",
              differentShippingAddress: false,
              location: null
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className="field">
                  <div className="control">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      className={`input is-primary ${
                        touched.firstName && errors.firstName
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="firstName"
                      className="has-text-danger"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      className={`input is-primary ${
                        touched.lastName && errors.lastName ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="lastName"
                      className="has-text-danger"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field
                      type="text"
                      name="addressLine"
                      placeholder="Address line 1"
                      className={`input is-primary ${
                        touched.addressLine && errors.addressLine
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="addressLine"
                      className="has-text-danger"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field
                      type="text"
                      name="suite"
                      placeholder="Enter your suite"
                      className={`input is-primary ${
                        touched.suite && errors.suite ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="suite"
                      className="has-text-danger"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      className={`input is-primary ${
                        touched.city && errors.city ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="city"
                      className="has-text-danger"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field
                      type="text"
                      name="state"
                      placeholder="Enter your state"
                      className={`input is-primary ${
                        touched.state && errors.state ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="state"
                      className="has-text-danger"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <Field
                        type="checkbox"
                        name="differentShippingAddress"
                        value="true"
                      />
                      Shipping address is different than billing.
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <Field component="select" name="location">
                      <option value="NY">New York</option>
                      <option value="SF">San Francisco</option>
                      <option value="CH">Chicago</option>
                      <option value="OTHER">Other</option>
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  className="button is-link"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormTest;
