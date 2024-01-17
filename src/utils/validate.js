//import style  from "./validationStyle.module.css";


const validate = (values) => {
  //const validationStyle = validate.style;
  const errors = {};
  //const validateStyle = style;
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 5) {
    errors.lastName = "Must be 5 characters or more";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 4) {
    errors.firstName = "Must be 4 characters or more";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 9) {
    errors.phone = "Must to be 15 numbers";
  } 

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 12) {
    errors.description = "Must to be more than 4 words";
  } 

  console.log(errors);

  //validate.classList.add("validation-text");

  return errors;
};

export default validate;