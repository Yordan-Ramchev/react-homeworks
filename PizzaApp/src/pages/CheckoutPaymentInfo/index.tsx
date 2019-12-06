import React, { useState } from 'react';
import { Formik, Form } from "formik";
import PaymentSchema from './schema';
import { Input } from "../../components/FormField";
import { Redirect } from 'react-router';

const PaymentInfo = () => {

  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect push to="/order-review" />;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Checkout</h1>

        <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              addressLine: "",
              suite: "",
              city: "",
              state: "",
            }}
            validationSchema={PaymentSchema}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));

              actions.setSubmitting(false);
              setRedirect(true);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <Input name="firstName" placeholder="Enter your first name" touched={touched} errors={errors}/>

                <Input name="lastName" placeholder="Enter your last name" touched={touched} errors={errors}/>

                <Input name="addressLine" placeholder="Address line 1" touched={touched} errors={errors}/>

                <Input name="suite" placeholder="Enter your suite" touched={touched} errors={errors}/>

                <Input name="city" placeholder="Enter your city" touched={touched} errors={errors}/>

                <Input name="state" placeholder="Enter your state" touched={touched} errors={errors}/>

                <div className="has-text-right">
                  <button
                    type="submit"
                    className="button is-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "  Review Order"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
      </div>
    </section>
  );
}

export default PaymentInfo;