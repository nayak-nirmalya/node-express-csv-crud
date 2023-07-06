import { Router } from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.route("/").get(getUsers).post(validate, createUser);
router
  .route("/:id")
  .get(getUser)
  .patch(validate, updateUser)
  .delete(deleteUser);

export default router;
