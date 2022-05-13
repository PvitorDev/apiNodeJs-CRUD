import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pvdev:0801@cluster0.gg8bz.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;