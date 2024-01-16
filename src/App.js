import React from "react";
import SignupForm from "./components/SignupForm";
import FirstName from "./components/FirstName";
import Email from "./components/LastName";
import Phone from "./components/Phone";
import style from "./index.css";

function App() {
  return (
    <div className={style.container}>
      <SignupForm>
        <FirstName />
        <Email />
        <Phone />
      </SignupForm>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="container">
//       <FormApp />
//     </div>
//   );
// }

// export default App;
