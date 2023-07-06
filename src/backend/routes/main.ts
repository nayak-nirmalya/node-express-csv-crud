import { Router } from "express";

import { createUser, getUsers } from "../controllers/main.js";
import { validate } from "../middleware/validate.js";

const router = Router();

router.route("/").get(getUsers).post(validate, createUser);

export default router;
