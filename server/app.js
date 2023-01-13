const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const EmailSender = require("./sendEmail.js");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT}` }));

const PORT = process.env.PORT || 4000;

app.post("/send", async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    EmailSender({ fullName, email, message });
    res.json({ msg: message });
  } catch (err) {
    res.status(404).json({ msg: "Error 404!!" });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
