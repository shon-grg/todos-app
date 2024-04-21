/*eslint-disable*/
import axios from "axios";

const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      //   url: "api/v1/users/login",
      url: "http://127.0.0.1:3000/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      location.assign("/home");
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

export default login;
