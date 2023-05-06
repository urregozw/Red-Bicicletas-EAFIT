const Bicicleta = require("../model/Bicicleta");

exports.list = async function (req, res) {
    // hola = Bicicleta();
    // let lista = await Bicicleta.listAll();
    // console.log("Esta es la lista:");
    // console.log(lista);

    console.log("En el controlador de lista");
    res.render("bicicletas/index", { bicis: await Bicicleta.listAll()});
};

exports.apiList = function (req, res) {
    res.json(Bicicleta.allBicis);
};

exports.show = async function (req, res) {
    var bici = await Bicicleta.findById(req.params.id);
    // console.log(bici);
    res.render("bicicletas/show", { bici });
};

exports.create_get = function (req, res) {
    res.render("bicicletas/create");
};

exports.create_post = async function (req, res) {
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    await Bicicleta.add(bici);
    res.redirect("/bicicletas");
};

exports.update_get = async function (req, res) {
    let bici = await Bicicleta.findById(req.params.id);
    console.log(bici);
    res.render("bicicletas/update", { bici });
};

exports.update_post = function (req, res) {
    var newBici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    Bicicleta.update(req.params.id, newBici);
    res.redirect("/bicicletas");
};


exports.delete = async function (req, res) {
    await Bicicleta.removeById(req.body.id);
    res.redirect("/bicicletas");
};