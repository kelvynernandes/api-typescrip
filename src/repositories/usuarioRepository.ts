// Camada responsável por conversar com o BD
import Usuario from "../models/usuarios.js";

const usuarios: Usuario[] = [];
// usuarios to tipo "array" ou "vetor" de Usuarios

function getAllUsuarios(): Promise<Usuario[]> {
    return new Promise((resolve, reject) => {
        return resolve(usuarios);
    });
}

export default {
    getAllUsuarios
};

// Resolve Cumpre a promessa com valor.
// Reject Cumpre a promessa com um erro.
