import React from "react";
import style from "./SignupForm.module.css";

function Description(props) {
  return (
    <div className={style.input_wrapper}>
      <input
        className={style.input}
        placeholder="Description"
        id="description"
        name="description"
        type="text"
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values.description}
      />
      {props.formik.errors.description ? (
        <div>
          <h1 className={style.validation_text}>
            {props.formik.errors.description}
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default Description;
