import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const sendEmail = async ({ fullName, email, message, setSend }) => {
  const axiosConfig = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const data = { fullName, email, message };
    let res = await axios.post("https://drewity-backend.herokuapp.com/send", data, axiosConfig);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    toast.error("Message not sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
