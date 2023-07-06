import { Router } from "express";

import { createUser } from "../controllers/main.js";
import { validate } from "../middleware/validate.js";

const router = Router();

router.route("/").post(validate, createUser);

export default router;
