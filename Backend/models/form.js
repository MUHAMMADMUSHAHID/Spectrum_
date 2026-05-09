import mongoose from "mongoose";
import validator from "validator";

const formSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain 11 Digits."],
    maxLength: [11, "Phone number must contain 11 Digits."],
  },
  certification: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must be of at least 10 Characters."],
    maxLength: [200, "Message cannot exceed 200 Characters."],
  },
});

export const Form = mongoose.model("Form", formSchema);