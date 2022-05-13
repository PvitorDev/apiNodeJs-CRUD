import express from "express";
import books from "./bookRoutes.js"
import autores from "./autorRoutes.js";
//rotas 
const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo: "Library API"})
    })
    app.use(
        express.json(),
        books,
        autores
    )
}

export default routes;