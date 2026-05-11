import ErrorHandler from "../middleware/error.js";
import { Form } from "../models/form.js";


const send_form = async (req, res, next) => {
  const { Name, email, phone, certification, message } = req.body;
  if (!Name || !email || !phone || !certification || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  try {
    await Form.create({ Name, email, phone, certification, message });
    res.status(201).json({
      success: true,
      message: "Form Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_form;
