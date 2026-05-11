import express from "express";
import send_form from "../controller/controller.js";

const router = express.Router();

router.post("/submit", send_form);

export default router;