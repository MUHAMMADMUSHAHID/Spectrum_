import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: false,
  },

  city: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  certification: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Form = mongoose.model("Form", formSchema);