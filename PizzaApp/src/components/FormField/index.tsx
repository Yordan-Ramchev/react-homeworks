
import React from "react";
import { Field, ErrorMessage } from "formik";

export const Input = (name: any, placeholder: any) => {
  return (
    <div className="field">
      <div className="control">
        <Field
          type="text"
          name={name}
          placeholder={placeholder}
          className={`input is-primary`}
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


