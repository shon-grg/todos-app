import styled from "styled-components";
import SignUpForm from "../component/SignUpForm";
import SignUpFormHeader from "../component/SignUpFormHead ";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: #ffebb3;
`;

function Login() {
  return (
    <>
      <LoginLayout>
        <SignUpFormHeader />
        <SignUpForm />
      </LoginLayout>
    </>
  );
}

export default Login;
