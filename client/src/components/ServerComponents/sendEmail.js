import axios from "axios";

export const sendEmail = async ({ fullName, email, message, setSend }) => {
  try {
    const data = { fullName, email, message };
    let res = await axios.post(`/send`, data);
    if (res) {
      setSend(res.data);
      console.log(process.env.USER + " " + process.env.PASSWORD + " " + process.env.RECIPIENT);
    }
  } catch (error) {
    alert("error.response.data.message");
  }
};
