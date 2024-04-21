/*eslint-disable*/
import axios from "axios";

const signUp = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === "success") {
      location.assign("/login");
    }
  } catch (err) {
    alert(err.response.data.message);
    console.log(err.message);
  }
};

export default signUp;
