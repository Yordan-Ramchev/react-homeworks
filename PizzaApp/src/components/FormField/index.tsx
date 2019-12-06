
import React from "react";
import { Field, ErrorMessage } from "formik";

export const Input = ({ name, placeholder, touched, errors}: { name: string, placeholder: string, touched: any, errors: any }) => {
  return (
    <div className="field">
      <div className="control">
        <Field
          type="text"
          name={name}
          placeholder={placeholder}
          className={`input is-primary ${
            touched.name && errors.name
              ? "is-invalid"
              : ""
          }`}
        />
        <ErrorMessage
          component="div"
          name={name}
          className="has-text-danger"
        />
      </div>
    </div>
  )
}


