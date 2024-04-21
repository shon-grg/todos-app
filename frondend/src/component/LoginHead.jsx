import styled from "styled-components";

const LoginDis = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;
function LoginHead() {
  return (
    <LoginDis>
      <h2>Login</h2>
    </LoginDis>
  );
}

export default LoginHead;
