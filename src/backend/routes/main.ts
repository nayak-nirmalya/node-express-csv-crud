import { Router } from "express";

import { createUser, getUser, getUsers } from "../controllers/main.js";
import { validate } from "../middleware/validate.js";

const router = Router();

router.route("/").get(getUsers).post(validate, createUser);
router.route("/:id").get(getUser);

export default router;
