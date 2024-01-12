import React, { useState } from "react";
import { useFormik } from "formik";
import style from "./SignupForm.module.css";
import Email from "./Email";
import FirstName from "./FirstName";
import Phone from "./Phone";
import Image from "./Image";
import Loading from "./Loading";
import Button from "./Button";
import validate from "../utils/validate";



function SignupForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  //if (validate = true) {} зробить валідацію через if 
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      // додати isLoading через сетТаймАут
      setTimeout(() => {
        setLoading(true);
      }, 3000)
      setTimeout(() => {
        setSubmitted(true);
      }, 2000);
      // const img = document.createElement("img");
      // img.src = "src/images/success-image.png";
      //parent.appendChild(p);
    },
  });
  console.log("works");
  if (isLoading) {
    return <Loading />
  }
  
  if (isSubmitted) {
    return <Image />  
  }

  return (
    <form className={style.root} onSubmit={formik.handleSubmit}>
      <Email formik={formik} />
      <FirstName formik={formik} />
      <Phone formik={formik} />
      <Button />
    </form>
  );
}

export default SignupForm;
