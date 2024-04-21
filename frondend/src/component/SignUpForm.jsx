// import { useState } from "react";
// import styled from "styled-components";

// const FormContainer = styled.form`
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 100px;
//   border: 1px solid #5a3e2b;
//   border-radius: 30px;
//   background-color: #76c7ad;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 30px;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #5a3e2b;
//   border-radius: 20px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #f4a226;
//   color: #5a3e2b;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #e5771f;
//   }
// `;
// const ErrorMsg = styled.p`
//   color: red;
//   font-size: 14px;
// `;

// function SignUpForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordMatchError, setPasswordMatchError] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       setPasswordMatchError("Passwords do not match");
//       return;
//     }

//     // Here you can handle the signUp logic
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Reset the form fields
//     setName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     setPasswordMatchError("");
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <FormGroup>
//         <Label htmlFor="name">Name:</Label>
//         <Input
//           type="text"
//           id="name"
//           value={name}
//           onChange={handleNameChange}
//           required
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label htmlFor="email">Email:</Label>
//         <Input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label htmlFor="password">Password:</Label>
//         <Input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label htmlFor="confirmPassword">Confirm Password:</Label>
//         <Input
//           type="password"
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           required
//         />
//       </FormGroup>
//       {passwordMatchError && <ErrorMsg>{passwordMatchError}</ErrorMsg>}
//       <SubmitButton type="submit">Sign Up</SubmitButton>
//     </FormContainer>
//   );
// }

// export default SignUpForm;

import { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import signUp from "../js/signUp";

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px;
  border: 1px solid #5a3e2b;
  border-radius: 30px;
  background-color: #76c7ad;
  position: relative; /* Added for positioning the back arrow */
`;

const BackArrow = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #5a3e2b;
  border-radius: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f4a226;
  color: #5a3e2b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e5771f;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
`;

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;

    signUp(name, email, password, passwordConfirm);

    if (password !== passwordConfirm) {
      setPasswordMatchError("Passwords do not match");
      return;
    }

    // Here you can handle the signUp logic
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("passwordConfirm", passwordConfirm);
    // Reset the form fields
    setName(name);
    setEmail(email);
    setPassword(password);
    setPasswordConfirm(passwordConfirm);
    setPasswordMatchError(passwordConfirm);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <NavLink to="/login">
        <BackArrow>
          <FaArrowLeft />
        </BackArrow>
      </NavLink>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={passwordConfirm}
          onChange={handleConfirmPasswordChange}
          required
        />
      </FormGroup>
      {passwordMatchError && <ErrorMsg>{passwordMatchError}</ErrorMsg>}
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  );
}

export default SignUpForm;
