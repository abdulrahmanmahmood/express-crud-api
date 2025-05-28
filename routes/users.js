import express from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/add", addUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
