import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
  console.log("PORT =", process.env.PORT);
});