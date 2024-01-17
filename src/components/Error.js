import React from "react";
// import ReactDOM from "react-dom/client";
import style from "./Error.module.css";
// import SignupForm from "./SignupForm";

function Error() {
  return (
    <div className={style.error_wrapper}>
      <div>
        <h2 className={style.error_title}>Error</h2>
      </div>
      <div>
        <button className={style.error_button}>
          Go back
        </button>
      </div>
    </div>
  );
}

// const el = document.getElementById("Image");
// const image = ReactDOM.createRoot(el);

// let GoBack = function () {
//     //здесь можно добавить обработку какой-нибудь логики, при желании
//     // return (
//     //     <SignupForm />
//     // )
//     window.history.back(1);
//     console.log(onclick)
// };

// GoBack();

export default Error;
