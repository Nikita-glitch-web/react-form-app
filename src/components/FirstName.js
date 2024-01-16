
import React from 'react';
import style from "./SignupForm.module.css";

function FirstName(props) {
     return (
       <div className={style.input_wrapper}>
         <input
           className={style.input}
           placeholder='First name'
           id="firstName"
           name="firstName"
           type="text"
           onChange={props.formik.handleChange}
           onBlur={props.formik.handleBlur}
           value={props.formik.values.firstName}
         />
         {props.formik.errors.firstName ? (
           <div><h1 className={style.validation_text}>{props.formik.errors.firstName}</h1></div>
         ) : null}
       </div>
     );
}


export default FirstName;

// export class FirstName extends Component {
    // render () {
    //  return (
    //   <div>
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       id="firstName"
    //       name="firstName"
    //       type="text"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.firstName}
    //     />
    //     {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
    //   </div>
    // )
    // }
// }