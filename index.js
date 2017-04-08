//console.log('Bienvenue dans Node.js');

const express = require('express');
const app = express();

require('./settings')(app);       console.log('>> Paramètres initialisés');
require('./models')(app);         console.log('>> Models initialisés');
require('./middlewares')(app);    console.log('>> Middlewares initialisés');
require('./actions')(app);        console.log('>> Actions initialisées');
require('./routes')(app);         console.log('>> Routes innitialisées');



console.log(`Serveur démarré sur le port ${app.settings.port}.`)
app.listen(app.settings.port);

/*
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();
var test = require('./test');
var express = require('express');

var app = express();

app.get('/G-Bay', function(req,res){
	res.setHeader('Content-Type','text/html');
	res.end("Page d'accueil");
})
.get('/G-Bay/Authentification', function(req,res){
	var page = url.parse(req.url).pathname;
	var parametres = querystring.parse(url.parse(req.url).query);
	console.log(parametres);
	res.writeHead(200, {"Content-Type" : "text/html"});
	if('prenom' in parametres && 'nom' in parametres){
		
		res.write('Bonjour ' + parametres['prenom'] + ' ' + parametres['nom'] + ' ');
	}
	else res.write('Inconnu au bataillon...');

	res.end("Page d'authentification");
})
.get('/G-Bay/Produits', function(req,res){
	res.setHeader('Content-Type','text/html');
	res.end("Page de produits");
})
.use(function(req,res,next){
	res.setHeader('Content-Type','text/html');
	res.status(404).send('Page introuvable.');
	//res.send(404, 'Page introuvable.')
});
app.listen(3000);
*/

/*
var instructionsNouveauVisiteur = function(req,res){
	var page = url.parse(req.url).pathname;
	var parametres = querystring.parse(url.parse(req.url).query);
	console.log(parametres);
	res.writeHead(200, {"Content-Type" : "text/html"});
	if('prenom' in parametres && 'nom' in parametres){
		
		res.write('Bonjour ' + parametres['prenom'] + ' ' + parametres['nom']);
	}
	else res.write('Inconnu au bataillon...');

	res.end();
};
var fermerServeur = function(req,res){
	console.log('Vous quittez le serveur\n');
}
var server = http.createServer();
server.on('request', instructionsNouveauVisiteur);
server.on('close', fermerServeur);
server.listen(3000);

test.direBonjour();
test.direAuRevoir(); 
*/