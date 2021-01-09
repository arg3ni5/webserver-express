const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers")

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get("/", function (req, res) {
    res.render("home", { nombre: "Fabian" });
});

app.get("/about", function (req, res) {
    res.render("about", { nombre: "NARUTO UZUMAKI" });
});

app.get("/hello", function (req, res) {
    res.send("Hola Mundo");
});
app.get("/data", function (req, res) {
    let salida = {
        nombre: "fabian",
        edad: 29,
        url: req.url,
    };
    res.send(salida);
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));
