import React from "react";
// import ReactDOM from "react-dom/client";
import image from "../images/success-image.png";
import style from "./Image.module.css";

console.log(image); 

function Image() {
  return (
    <div className={style.img_wrapper}>
      <h1 className={style.success_title}>Successfully registered</h1>
      <img src={image} alt="Logo" />
    </div>
  );
}


// const el = document.getElementById("Image");
// const image = ReactDOM.createRoot(el);

// image.render(<Image />);

export default Image;