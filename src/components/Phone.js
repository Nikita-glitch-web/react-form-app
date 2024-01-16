
import React from 'react';
// import { useFormik } from 'formik';
// import { validate } from './utils/validate'
import style from "./SignupForm.module.css";

function Phone(props) {
    return (
      <div className={style.input_wrapper}>
        <input
          className={style.input}
          placeholder="Phone"
          id="phone"
          name="phone"
          type="phone"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.phone}
        />
        {props.formik.errors.phone ? (
          <div>
            <h1 className={style.validation_text}>
              {props.formik.errors.phone}
            </h1>
          </div>
        ) : null}
      </div>
    );
  }


export default Phone;
