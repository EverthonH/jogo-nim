var express = require ('express');
var mustache = require ('mustache-express');
var app = express ();

app.engine ('html', mustache ());
app.set ('view engine', 'html');
app.set ('views', __dirname + '/paginas');

var tabela = [[0,0,0,0,1],
			  [0,0,0,1,1],
			  [0,0,1,1,1],
			  [0,1,1,1,1],
			  [1,1,1,1,1]
];
//link para o menu
app.get ('/', function (req, res) {
	res.render ('menu.html', {'nome':'nim'});
});

app.get("/jogo", function(req, res){
	res.write('<!DOCTYPE html>')
    res.write('<html>');
    res.write('<html lang="pt-br">')
    res.write('<meta charset="UTF-8">')
    res.write('<title>jogar</title>')
    res.write('<link rel="stylesheet" type="text/css" href="css/sobre.css">')
    res.write('<link rel="stylesheet" type="text/css" href="css/comum.css">')
    res.write('<link rel="stylesheet icon" href="icon.png">')
    res.write('</head>')
    res.write('<body>');
    res.write('<table>');

for(i = 0;i<tabela.length;i++){
	 res.write('<tr>');
	for(j = 0; j < tabela[i].length;j++){
		if(tabela[i][j]==1){
			res.write(`<td><img class="img" src="palito.png">${i},${j}</td>`);
		}

		else if(tabela[i][j] ==0){
			res.write('<td></td>');
		}
	}
	res.write('</tr>');
}
	res.write('</table>');


	
	
	res.write('<ul class="ul">')
	res.write('<li class="li"><a class="a" href="/">Voltar</a></li>')
	res.write('</ul> ')

    res.write('</body>');
    res.write('</html>');
    res.end();
});

//link pra a pagina Sobre
app.get("/sobre", function(req, res){
	res.render(__dirname + "/paginas/sobre.html");
});
//link pra a pagina Contato
app.get("/contato", function(req, res){
	res.render(__dirname + "/paginas/contato.html");
});

//link pra a pagina ajuda
app.get("/ajuda", function(req, res){
	res.render(__dirname + "/paginas/ajuda.html");
});

//Link para o css
app.use('/css', express.static(__dirname + '/css'));

//Link para o imagens

app.use(express.static('imagens'));
app.use(express.static('css'));

//porta que o servidor vai rodar
var port = 3000;
app.listen (port, function () {
	console.log (`Escutando na porta ${port}...`);
})