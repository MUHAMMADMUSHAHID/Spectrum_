import express from "express";
import send_reservation from "../controller/controller.js";

const router = express.Router();

router.post("/send", send_form);

export default router;