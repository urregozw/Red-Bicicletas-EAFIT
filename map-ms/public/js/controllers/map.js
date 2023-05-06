// const Bicicleta = require("../model/Bicicleta");

exports.mapa = function (req, res) {
    // hola = Bicicleta();
    // let lista = await Bicicleta.listAll();
    // console.log("Esta es la lista:");
    // console.log(lista);
    // console.log(req);
    console.log("En el controlador de mapa");
    res.render("index");
};