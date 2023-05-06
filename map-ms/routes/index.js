var express = require('express');
var router = express.Router();
const MapaController = require('../public/js/controllers/map');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mapa', MapaController.mapa);

module.exports = router;
