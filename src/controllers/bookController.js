import books from "../models/Book.js";

class bookController {

    static bookList = (req, res) => { //Listar Livros GET
        books.find()
        .populate('autor')
        .exec((err, books) => {
            res.status(200).json(books)
        })
    }
    static bookListID = (req, res) => {
        const id = req.params.id

        books.findById(id)
        .populate('autor','nome')
        .exec((err, books) => {
            if (!err) {
                res.status(200).send(books)
            } else {
                res.status(400).send({
                    message: `${err.message} ID DO LIVRO NÃO LOCALIZADO`
                })
            }
        })
    }
    static registerBooks = (req, res) => { //Registrar Livros POST
        let book = new books(req.body);

        book.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `ERRO AO CADASTRAR LIVRO ${err.message}`
                })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBooks = (req, res) => { //Atualizar Livro PUT
        const id = req.params.id;

        books.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Livro Atualizado"
                })
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }
    static deleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Livro Removido"
                })
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }

    static editoraList = (req, res)=>{
        const editora = req.query.editora

        books.find({'editora': editora}, {}, (err, books)=>{
             res.status(200).send(books)
        })
    }
}



export default bookController