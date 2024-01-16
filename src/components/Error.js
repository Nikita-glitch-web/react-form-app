import React from "react";
// import ReactDOM from "react-dom/client";
import style from "./Error.module.css";


function Image() {
  return (
    <div className={style.error_wrapper}>
      <div>
        <h2 className={style.error_title}>Error</h2>
      </div>
      <div>
        <button className={style.error_button}>GO back</button>
      </div>
    </div>
  );
}

// const el = document.getElementById("Image");
// const image = ReactDOM.createRoot(el);

// image.render(<Image />);

export default Image;
