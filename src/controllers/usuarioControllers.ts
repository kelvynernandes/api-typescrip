// Responsável por receber as requisições HTTP
import usuarioRepository from "../repositories/usuarioRepository.js";
import { Request, Response, NextFunction } from "express";

function getAllusuarios(req: Request, res: Response, next: NextFunction) {
    const usuarios = usuarioRepository.getAllUsuarios();
    res.json(usuarios);

}

export default {
    getAllusuarios
};