import React, { useState } from "react";
import { useFormik } from "formik";
import style from "./SignupForm.module.css";
import LastName from "./LastName";
import FirstName from "./FirstName";
import Phone from "./Phone";
import Image from "./Image";
import Loading from "./Loading";
import Button from "./Button";
import Description from "./Description";
import Error from "./Error";
import validate from "../utils/validate";

const API_URL =
  "https://wa-server-2-d6303887a0d7.herokuapp.com/api/v1/team-members/join";

function SignupForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  //if (validate === true) {} зробить валідацію через if
  // нові інпути додати
  function sendData(values) {
    // const formData = new FormData(SignupForm); в данному випадку це не треба бо формік все робить
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw "not works";
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setSubmitted(true);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      description: "",
    },
    validate,
    validateOnChange: false, // this one
    validateOnBlur: false, // and this one
    onSubmit: (values) => {
      setSubmitted(true);
      sendData(values);
      setLoading(true);
      console.log(values);
      pageChanger();
    },
  });

  function pageChanger() {
    if (isError === true) {
      return <Error />;
    }

  }

   if (isLoading) {
     return <Loading />;
   }

    if (isSubmitted) {
      return <Image />;
    }
      

 

  // if (isSubmitted) {
  //     <Image />;
  // }


    
  console.log("works");


  console.log(pageChanger)

 

  pageChanger()

  // if (isSubmitted) {
  //   return <Image />;
  // }

  return (
    <form className={style.root} onSubmit={formik.handleSubmit}>
      <FirstName formik={formik} />
      <LastName formik={formik} />
      <Description formik={formik} />
      <Phone formik={formik} />
      <Button />
    </form>
  );
}

export default SignupForm;

// celsiusRequest() {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.coordinates.lat}&lon=${this.coordinates.lon}&appid=103d2bea1f0fea90b85f7ca4c51dcc4f`,
//     {
//       method: "GET",
//     }
//   )
//   .then((res) => {
//     return res.json();
//   })
//   .then((responseData) => {
//     console.log(responseData);
//     this.data = parseWeatherResponse(responseData);
//     console.log(this.data);
//     this.renderCurrentWeather();
//   });
// }

// setTimeout(() => {

// }, 4000);
