import { Router } from "express";

import { createUser } from "../controllers/main.js";

const router = Router();

router.route("/").post(createUser);

export default router;
