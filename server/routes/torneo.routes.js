import { Router } from "express";
import { addTeam, deleteTeam, getTeam, getTeams, updateTeam } from "../controllers/torneo.controllers.js";

const router = Router();

router.get('/', getTeams)

router.get('/:id', getTeam)

router.post('/', addTeam)

router.delete('/:id', deleteTeam)

router.put('/:id', updateTeam)

export default router;