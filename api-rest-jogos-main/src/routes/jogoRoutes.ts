import { Router } from "express";
import { cadastrarJogo, listarTudo } from "../controllers/gamesController";

const router = Router();
router.post("/", cadastrarJogo);
router.get("/", listarTudo);

export default router;