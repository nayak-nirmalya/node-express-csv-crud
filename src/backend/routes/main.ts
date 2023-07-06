import { Router } from "express";

import { create } from "../controllers/main.js";

const router = Router();

router.route("/create").get(create);

export default router;
