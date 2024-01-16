import React from "react";
import style from "./SignupForm.module.css";

function LastName(props) {
  return (
    <div className={style.input_wrapper}>
      <input
        className={style.input}
        placeholder="Last name"
        id="lastName"
        name="lastName"
        type="text"
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values.lastName}
      />
      {props.formik.errors.lastName ? (
        <div>
          <h1 className={style.validation_text}>{props.formik.errors.lastName}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default LastName;
