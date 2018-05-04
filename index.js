let http = require('http'); 
let url = require("url");
let bodyParser = require("body-parser");
let path = require("path");
let Zaposleni = require('./Zaposleni.js');
let Rukovodilac = require('./Rukovodilac.js');
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let email = req.body.email;
    let website = req.body.website;
    
    let zap;
    if(req.body.rukovodilac == undefined) {
      zap = new Zaposleni(ime, prezime, email, website);
    }
    else {
      let zvanje = req.body.zvanje;
      let bonus = req.body.bonus;

      zap = new Rukovodilac(ime, prezime, email, website, zvanje, bonus);
    }
    
    res.write('<p> Uneli ste: </p>');
    res.write('Zanimanje: ' + zap.getTip() + '<br>');
    res.write(zap.getInfo() + '<br>');
    res.write('<a href = ' + '"index.html"' + '> Vrati se nazad na formu </a>');

    res.end();
  });

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
  });

