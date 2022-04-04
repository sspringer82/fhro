

import { Router } from "express";
import { getAllUsers, createNewUser } from "./controller.js";

const router = Router();

router.get('/', getAllUsers);
router.post('/', createNewUser);

export default router;