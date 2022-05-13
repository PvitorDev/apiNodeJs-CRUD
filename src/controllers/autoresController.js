import autores from "../models/Autor.js";

class autoresController {

    static autorList = (req, res) => { //Listar Autores GET
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }
    static autorListID = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            if (!err) {
                res.status(200).send(autores)
            } else {
                res.status(400).send({
                    message: `${err.message} ID DO AUTOR NÃO LOCALIZADO`
                })
            }
        })
    }
    static registerAutores = (req, res) => { //Registrar Autores POST
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `ERRO AO CADASTRAR AUTOR ${err.message}`
                })
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static updateAutores = (req, res) => { //Atualizar Autores PUT
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Autor Atualizado"
                })
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }
    static deleteAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Autor Removido"
                })
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }
}

export default autoresController