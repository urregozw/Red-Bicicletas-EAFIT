var express = require('express');
var router = express.Router();

const bicicletaController = require("../public/js/Controllers/BicicletaController");


router.get("/", bicicletaController.list);
router.get("/:id/show", bicicletaController.show);
router.get("/create", bicicletaController.create_get);
router.post("/create", bicicletaController.create_post);
router.get("/:id/update", bicicletaController.update_get);
router.post("/:id/update", bicicletaController.update_post);
router.post("/:id/delete", bicicletaController.delete);



module.exports = router;
