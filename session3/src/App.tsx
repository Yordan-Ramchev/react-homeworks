import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Cart from "./components/Cart";
import FormTest from "./components/FormTest";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

interface MyFormValues {
  firstName: string;
}

const App: React.FC = () => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <>
      <div className="App">
        <Cart />
      </div>
      <div className="container">
        <FormTest />
      </div>
    </>
  );
};

export default App;
