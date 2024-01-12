import React from "react";
import style from "./SignupForm.module.css";

function Button() {
    return (
      <div className={style.btn_wrapper}>
        <button className={style.btn} type="submit">
          Submit
        </button>
      </div>
    );
}
export default Button;