/*****************************
** Declaramos aquí todas la funciones 
** que usaremos para manejar la BD de mongo
******************************/
const datapool = require('./../datapool');
const newModel = datapool.getRepository('New');

exports.save = save;
exports.find = find;
exports.findArchived = findArchived;
exports.remove = remove;
exports.update = update;

function save(dto) {
	var sv = new newModel(dto);
	return sv.save();
}

//Bucamos las noticias que no estén archivadas
function find() {
      return newModel.find({archived: false}).lean().exec();
}

//Bucamos las noticias que estén archivadas y ordenadas descendentemente por la fecha en que fueron archivadas
function findArchived() {
    //return newModel.find({archived: true}).lean().exec();
    return newModel.find({archived: true}).sort({dateArchived: -1}).lean().exec(); 
}

//Eliminamos la noticia seleccionada
function remove (id){
    return newModel.remove({ _id: id });
}

//Actualizamos estado de la noticia
function update (id, body){
    return newModel.findOneAndUpdate({ _id: id }, body);
}