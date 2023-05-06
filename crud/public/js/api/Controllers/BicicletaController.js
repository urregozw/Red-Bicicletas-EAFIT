const Bicicleta = require("../../model/Bicicleta");

exports.list = async function (req, res) {
    // hola = Bicicleta();
    console.log("Entrando a listar bicicletas (api)");
    lista = await Bicicleta.listAll();
    const listaBici = lista.map(bicicleta => {
        // console.log(bicicleta);
        const nuevaBici = new Bicicleta(bicicleta.id, bicicleta.color, bicicleta.modelo, bicicleta.lat, bicicleta.lng);
        // console.log(nuevaBici);
        return nuevaBici;
    });
    // console.log("Api: ----");
    // console.log(listaBici);
    res.json(lista);
};

exports.show = async function (req, res) {
    console.log("Entrando a show bicicleta (api)");
    var bicicleta = await Bicicleta.findById(req.params.id);
    // Esta devolviendo Function Bicicleta y toca convertirlo a objeto
    const nuevaBici = new Bicicleta(bicicleta.id, bicicleta.color, bicicleta.modelo, bicicleta.lat, bicicleta.lng);
    //console.log(nuevaBici);
    res.json(nuevaBici);
};

exports.create = async function (req, res) {
    console.log("Entrando a create bicicleta (api)");
    // console.log(req);
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    await Bicicleta.add(bici);
    res.json(bici.id);
};

exports.update = async function (req, res) {
    var newBici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    await Bicicleta.update(req.params.id, newBici);
    res.json(newBici.id);
};

exports.delete = async function (req, res) {
    console.log("Entrando a borrar bicicleta (api)");
    await Bicicleta.removeById(req.params.id);
    res.sendStatus(204);
    //res.redirect("/bicicletas");
};
