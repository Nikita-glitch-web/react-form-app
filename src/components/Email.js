import React from "react";
import style from "./SignupForm.module.css";

function Email(props) {
  return (
    <div className={style.input_wrapper}>
      <input
        className={style.input}
        placeholder="Email"
        id="email"
        name="email"
        type="email"
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values.email}
      />
      {props.formik.errors.email ? (
        <div>{props.formik.errors.email}</div>
      ) : null}
    </div>
  );
}

export default Email;
