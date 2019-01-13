/*****************************
** Declaramos aquí todos los objetos y paths
** a los que llamaremos desde el frontend
******************************/
const co = require('co');
const handler = require('../helpers/error-express');
const newBll = require('../bll/newBll');

function StartPaths(app){
    app.post('/api/new', createNewNew);
    app.get('/api/new', getAllNew);
    app.get('/api/new/archived', getAllArchived);
    app.delete('/api/new/:id', removeNew);
    app.put('/api/new', updateNew);
}

function createNewNew (req, res) {
  co(function *() {
      var newContent = yield newBll.save(req.body);
      res.send(newContent);
  }).catch(err =>{handler(res)});
}

function getAllNew (req, res) {
  co(function *() {
      var news = yield newBll.find();
      res.send(news);
  }).catch(err =>{handler(res)});
}

function getAllArchived (req, res) {
    co(function *() {
        var news = yield newBll.findArchived();
        res.send(news);
    }).catch(err =>{handler(res)});
  }

function removeNew (req, res) {
  co(function *() {
      var news = yield newBll.remove(req.params.id);
      res.send(news);
  }).catch(err =>{handler(res)});
}

function updateNew (req, res) {
  co(function *() {
      var news = yield newBll.update(req.body.id, req.body);
      res.send(news);
  }).catch(err =>{handler(res)});
}

exports.startPaths = StartPaths;