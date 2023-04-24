var express = require('express');
var router = express.Router();

// const bicicletaController = require("../../public/js/Controllers/BicicletaController");
const bicicletaController = require("../../public/js/api/Controllers/BicicletaController");


router.get("/", bicicletaController.list);
router.get("/:id/show", bicicletaController.show);
router.post("/", bicicletaController.create);
router.post("/:id/update", bicicletaController.update);
router.delete("/:id/delete", bicicletaController.delete);

module.exports = router;
