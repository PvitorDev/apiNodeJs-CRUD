import express from "express";
import autoresController from "../controllers/autoresController.js";


const router = express.Router()

//Definir Rotas

router
    .get("/autores", autoresController.autorList)
    .get("/autores/:id",autoresController.autorListID)
    .post("/autores", autoresController.registerAutores)
    .put("/autores/:id", autoresController.updateAutores)
    .delete("/autores/:id",autoresController.deleteAutor)


export default router;