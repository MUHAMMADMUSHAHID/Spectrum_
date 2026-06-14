import ErrorHandler from "../middleware/error.js";
import { Form } from "../models/form.js";



export const send_form = async (req, res) => {
  console.log("Form request received");
  console.log(req.body);
  try {
    const {
      Name,
      company,
      city,
      email,
      phone,
      certification,
      message,
    } = req.body;

    if (
      !Name ||
      !email ||
      !phone ||
      !certification ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    await Form.create({
      Name,
      company,
      city,
      email,
      phone,
      certification,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Form Submitted Successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export default send_form;
