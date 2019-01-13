/*****************************
** Declaramos la estructura de la noticia
******************************/
const mongoose = require('mongoose');    

const New = new mongoose.Schema({
    name: { type: String },
    description: { type: String},
    archived: {type: Boolean, default: false},
    dateArchived: {type: Date}
});

mongoose.model('New', New);