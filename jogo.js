var express = require ('express');
var mustache = require ('mustache-express');
var app = express ();
var port = 8080;

app.engine ('html', mustache ());
app.set ('view engine', 'html');
app.set ('views', __dirname + '/paginas');

function gel() {
		return [[0,0,0,0,1],
			  	[0,0,0,1,1],
			  	[0,0,1,1,1],
			  	[0,1,1,1,1],
			  	[1,1,1,1,1]
];
};
var jogador = 0;

var tabela = gel();
app.get ('/', function (req, res) {
	tabela = gel();
	res.render ('menu.html', {'nome':'nim'});
});
app.get("/jogo", function(req, res){
	var i = parseInt(req.query.i) || 0;
	var j = parseInt(req.query.j) || 0;
	/*console.log(i, j);*/
	if(i >= 0 && j >= 0) {
		jogador = (jogador + 1) % 2;
		tabela[i][j] = 0;
		
		//logica do {
		}
		for(x=0;x<=i;x++){
			tabela[x][j] = 0;			
			}
		
	res.write('<!DOCTYPE html>')
    res.write('<html>');
    res.write('<html lang="pt-br">')
    res.write('<meta charset="UTF-8">')
    res.write('<title>jogar</title>')
    res.write('<link rel="stylesheet" type="text/css" href="css/jogar.css">')
    res.write('<link rel="stylesheet icon" href="icon.png">')
    res.write('</head>');
    res.write('<body>');
    res.write('<table>');
    
    soma = 0
for(i = 0;i<tabela.length;i++){
	 res.write('<tr>');
	for(j = 0; j < tabela[i].length;j++){
		if(tabela[i][j]==1){
			res.write(`<td><a href="/jogo?i=${i}&j=${j}"><img class="img" src="palito.png"></a></td>`);
		}
		else if(tabela[i][j] ==0){
			res.write('<td></td>');
		}
		soma += tabela[i][j];
	}
	res.write('</tr>');
}

	res.write('</table>');

	if(soma == 0  && jogador == 0){
		res.write(`<h1>Mais uma Ficha Porfavor, Jogador 1 Ganhou.</h1>`);
	}
	else if(soma == 0  && jogador == 1 ){
		res.write(`<h1>Mais uma Ficha Porfavor, Jogador 2 Ganhou.</h1>`);
	}
  
	else if(jogador == 1){
		res.write('<p>Jogador 1</p>');
	}
	else{
		res.write('<p>Jogador 2</p>');
	}
   
	


	res.write('<ul>')
	res.write('<li> <a href="/">inicio</a></li>')
	res.write('</ul> ')
    res.write('</body>');
    res.write('</html>');
    res.end();

});

app.get("/sobre", function(req, res){
	res.render(__dirname + "/paginas/sobre.html");
});
app.get("/contato", function(req, res){
	res.render(__dirname + "/paginas/contato.html");
});

app.get("/ajuda", function(req, res){
	res.render(__dirname + "/paginas/ajuda.html");
});

app.use('/css', express.static(__dirname + '/css'));

app.use(express.static('imagens'));

app.use(express.static('css'));

app.listen (port, function () {
	console.log (`Escutando na porta ${port}...`);
})
