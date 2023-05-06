// const redis = require('redis');
// const redisClient = redis.createClient({
//     socket: {
//         host: 'some-redis',
//         port: '6379'
//     },
//     username: '',
//     password: ''
// });

// redisClient.on('error', err => console.log('Redis Server Error', err));


// (async () => {
//     await redisClient.connect();
//     await redisClient.set('ky', 'value');
//     const value = await redisClient.get('key');
//     console.log(value);
//     // await redisClient.disconnect();
// })();

// ----------------------------------------------------------- //

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "mysqldb",
  user: "mysqluser",
  password: "password123",
  database: "redbicis"
});

con.connect(function(err) {
  //if (err) throw err;
    if (err) console.log("No se puede conectar");
  console.log("You are connected!");
});
// con.end();

// ------------------------------------------------------------ //

let Bicicleta = function (id, color, modelo, lat, lng) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.lat = lat;
    this.lng = lng;
};

Bicicleta.prototype.toString = function () {
    return `id: ${this.id} | color: ${this.color}`;
};

Bicicleta.allBicis = [];

Bicicleta.listAll = async function() {
    // console.log("Entrando a listar");
    list = []
    try {
        let resultado =  await consulta("SELECT * FROM bicicletas")
        resultado.forEach(element => {
            // console.log(element);
            var bici = Object.assign(Bicicleta, element);
            list.push(new Bicicleta(element.id, element.color, element.modelo, element.lat, element.lng));
        });
    } catch (err) {
        console.error(err);
    }
    // console.log("Saliendo de listar");
    return list;
}

function consulta(query) {
    return new Promise((resolve, reject) => {
        // Hace la consulta a la base de datos
        con.query(query, (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
}

Bicicleta.add = async function (aBici) {
    try {
        let query = 'INSERT INTO bicicletas SET ' + con.escape(aBici);
        con.query(query, (err, results, fields) => {
            // console.log(results);
        });
        // await redisClient.set(aBici.id, JSON.stringify(aBici));
        // console.log(query);
    } catch (error) {
        console.log(error);
    }
    Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = async function (aBiciId) {
    try {
        let bici = await consulta(`SELECT * FROM bicicletas WHERE id = '${aBiciId}'`)
        // var aBici = Bicicleta.allBicis.find((x) => x.id == aBiciId);
        // var rediBici = await redisClient.get(aBiciId);
        // var rediBici = 2;
        // console.log(rediBici);
        // if (aBici) return aBici;
        if (bici) return Object.assign(Bicicleta, bici[0]);
        else throw new Error(`No existe una Bicicleta con el id: '${aBiciId}'`);
    } catch (error) {
        console.log(error);
    }

};

Bicicleta.removeById = async function (aBiciId) {
    try {
        // var aBici = Bicicleta.findById(aBiciId);
        // for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        //     if (Bicicleta.allBicis[i].id == aBiciId) {
        //         Bicicleta.allBicis.splice(i, 1);
        //         break;
        //     }
        // }
        // await redisClient.del(aBiciId);

        let bici = await consulta(`DELETE FROM bicicletas WHERE id = '${aBiciId}'`)
        // console.log("Removed:");
        // console.log(bici);
    } catch (error) {
        console.log(error);
    }


};

Bicicleta.update = async function (id, newBici) {
    try {
        let bici = await consulta(`UPDATE bicicletas SET ` + con.escape(newBici) + ` WHERE id = '${id}'`);
        return bici;
    } catch (err) {
        console.error(err);
    }

    // this.allBicis = this.allBicis.map( e => {
    //     if (e.id === id) {
    //         return newBici;
    //     }
    //     return e;
    // });
}

module.exports = Bicicleta;
