var map = L.map('main_map').setView([6.1630788, -75.631681], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



$.ajax({
    datatype: "json",
    url: "http://localhost:3000/api/bicicletas",
    xhrFields: {
        withCredentials: true // habilitar el envío de cookies en la petición
      },
    success: function (results) {
        // console.log(results);
        results.forEach(function (bici){
            console.log(bici);
            L.marker([bici.lat, bici.lng], {
                title: `Bicicleta Nro: ${bici.id} Modelo: ${bici.modelo}`,
            }).addTo(map);
        }) 
    }
});

