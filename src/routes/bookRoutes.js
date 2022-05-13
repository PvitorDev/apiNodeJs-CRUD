import express from "express";
import bookController from "../controllers/bookController.js";


const router = express.Router()

//Definir Rotas

router
    .get("/books", bookController.bookList)
    .get("/books/busca",bookController.editoraList)
    .get("/books/:id",bookController.bookListID)
    .post("/books", bookController.registerBooks)
    .put("/books/:id", bookController.updateBooks)
    .delete("/books/:id",bookController.deleteBook)
    

export default router;