//import style  from "./validationStyle.module.css";


const validate = (values) => {
  //const validationStyle = validate.style;
  const errors = {};
  //const validateStyle = style;

  if (!values.email) {
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 4) {
    errors.firstName = "Must be 4 characters or more";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 15) {
    errors.phone = "Must to be 15 numbers";
  } 

  console.log(errors.email);

  //validate.classList.add("validation-text");

  return errors;
};

export default validate;