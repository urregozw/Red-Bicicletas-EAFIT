const bicicletaController = require("../public/js/Controllers/BicicletaController");

var express = require('express');
var router = express.Router();
const passport = require('passport');

const autorizacion = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.log('error is', err);
      res.status(500).send('An error has occurred, we cannot greet you at the moment.');
      return;
    }

    if (!user) {
      res.status(401).json({ message: 'No estás autorizado para acceder a este recurso.' });
      return;
    }

    next();
  })(req, res, next);
}

router.get("/", autorizacion, bicicletaController.list);

router.get("/:id/show", autorizacion, bicicletaController.show);

router.get("/create", autorizacion, bicicletaController.create_get);
 
router.post("/create", autorizacion, bicicletaController.create_post);

router.get("/:id/update", autorizacion, bicicletaController.update_get);

router.post("/:id/update", autorizacion, bicicletaController.update_post);

router.post("/:id/delete", autorizacion, bicicletaController.delete);

router.get('/greetme', autorizacion, bicicletaController.list);

module.exports = router;