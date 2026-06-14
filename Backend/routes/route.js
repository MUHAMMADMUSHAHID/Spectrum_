import express from "express";
import { send_form } from "../controller/controller.js";

const router = express.Router();

// POST: Submit Contact Form
router.post("/form/submit", send_form);

// Test Route
router.get("/form/submit", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Form route is working!",
  });
});

export default router;