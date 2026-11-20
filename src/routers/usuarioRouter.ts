import express from "express";
import usuarioController from "../controllers/usuarioControllers.js";

const router = express.Router();

router.get("/", usuarioController.getAllusuarios);

export default router;