import express from "express";
import admin from "../admin.js";

const router = express.Router();

router.get("/jwtVerification", async (req, res) => {
  console.log(admin);
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "Token Not Found" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedValue = await admin.auth().verifyIdToken(token);
    if (!decodedValue) {
      res.status(500).json({ success: false, msg: "Unauthorized access" });
    }
    res.status(200).json({ success: true, userData: decodedValue });
  } catch (err) {
    console.log(err);
    res.send({ success: false, msg: `Error in extracting the token : ${err}` });
  }
});

export default router;
