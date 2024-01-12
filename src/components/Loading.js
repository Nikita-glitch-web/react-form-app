import React from "react";
// import ReactDOM from "react-dom/client";
import style from "./Loading.module.css";
import image from "../images/loading-img.png";

function Loading() {
  return (
    <div className={style.loading_wrapper}>
      <h1 className={style.loading_title}>Page is Loading...</h1>
      <img src={image} alt="Logo" />
    </div>
  );
}

export default Loading;
