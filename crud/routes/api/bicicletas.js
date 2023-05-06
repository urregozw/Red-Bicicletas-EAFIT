var express = require('express');
var router = express.Router();

// const bicicletaController = require("../../public/js/Controllers/BicicletaController");
const bicicletaController = require("../../public/js/api/Controllers/BicicletaController");

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
router.get("/:id/show", bicicletaController.show);
router.post("/", bicicletaController.create);
router.post("/:id/update", bicicletaController.update);
router.delete("/:id/delete", bicicletaController.delete);

module.exports = router;
