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
		if(tabela[i][j] != 0){
		jogador = (jogador + 1) % 2;
	}	tabela[i][j] = 0;
		
		//logica do jogo {
		}
		for(x=0;x<=i;x++){
			tabela[x][j] = 0;			
			}
		
	res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<html lang="pt-br">');
    res.write('<meta charset="UTF-8">');
    res.write('<title>jogar</title>');
    res.write('<link rel="stylesheet" type="text/css" href="css/jogar.css">');
    res.write('<link rel="stylesheet icon" href="icon.png">');
    res.write('</head>');
    res.write('<body>');
    res.write('<table>');
    
    soma = 0
for(i = 0;i<tabela.length;i++){
	 res.write('<tr>');
	for(j = 0; j < tabela[i].length;j++){
		if(tabela[i][j] == 1){
			res.write(`<td><a href="/jogo?i=${i}&j=${j}"><img class="img" src="palito.png"></a></td>`);
		}
		else if(tabela[i][j] == 0){
			res.write('<td></td>');
		}
		soma += tabela[i][j];
	}
	res.write('</tr>');
}

	res.write('</table>');

	if(soma == 0  && jogador == 1){
		res.write(`<h1>Mais uma Ficha Por favor, Jogador 1 Ganhou.</h1>`);
	}
	else if(soma == 0  && jogador == 0 ){
		res.write(`<h1>Mais uma Ficha Por favor, Jogador 2 Ganhou.</h1>`);
	}
  
	else if(jogador == 0){
		res.write('<p>Jogador 1</p>');
	}
	else{
		res.write('<p>Jogador 2</p>');
	}
   
	


	res.write('<ul>');
	res.write('<li> <a href="/">inicio</a></li>');
	res.write('</ul> ');
    res.write('</body>');
    res.write('</html>');
    res.end();

});

app.get("/sobre", function(req, res){
	res.write('<!DOCTYPE html>');
	res.write('<html lang="br">');
	res.write('<head>');
		res.write('<meta charset="UTF-8">');

		res.write('<title>Sobre o Nim</title>');
		res.write('<!-- Link para o css -->') ;
		res.write('<link rel="stylesheet" type="text/css" href="css/sobre.css">');
		res.write ('<link rel="stylesheet icon" href="icon.png">');
	res.write('</head>');
	res.write('<body>');
			res.write('<!-- Contatos -->');
		res.write('<div class="container">');
		res.write('<div class="box">');
		res.write('<div class="imgbx">');
		res.write('<img src="img1.jpg">');
			res.write('</div>');
			res.write('<div class="content">');
				res.write('<div>');
					res.write('<h2>Lucas R</h2>');
					res.write('<p>Meu nome é Lucas Robson, um dos desenvolvedores do jogo NIM</br>qualquer duvida pode entrar em contato com o E-mail: lrmds@discente.ifpe.edu.br</p>');
				res.write('</div>');
			res.write('</div>');
		res.write('</div>');
		res.write('<div class="box">');
			res.write('<div class="imgbx">');
				res.write('<img src="img3.jpg">');
			res.write('</div>');
			res.write('<div class="content">');
				res.write('<div>');
					res.write('<h2>Everthon H</h2>');
					res.write('<p>Meu nome é Everthon Henrique, um dos desenvolvedores do jogo NIM</br>qualquer duvida pode entrar em contato com o E-mail: ehpb@discente.ifpe.edu.br</p>');
				res.write('</div>');
			res.write('</div>');
		res.write('</div> ');

		res.write('<div class="box">');
			res.write('<div class="imgbx">');
				res.write('<img src="capture.png">');
			res.write('</div>');
			res.write('<div class="content">');
				res.write('<div>');
					res.write('<h2>Guilherme V</h2>');
					res.write('<p>Meu nome é Guilherme Valença, um dos desenvolvedores do jogo NIM</br>qualquer duvida pode entrar em contato com o E-mail gvrp@discente.ifpe.edu.br</p>');
				res.write('</div>');
			res.write('</div>');
		res.write('</div>');
		res.write('<div class="box">');
			res.write('<div class="imgbx">');
				res.write('<img src="img4.png">');
			res.write('</div>');
			res.write('<div class="content">');
				res.write('<div>');
					res.write('<h2>Allan L</h2>');
					res.write('<p>Meu nome é Allan Lima, o Professor Responsavel pelo projeto do jogo NIM</br>qualquer duvida pode entrar em contato com o E-mail: allanlima@igrassu.ifpe.edu.br</p>');
				res.write('</div>');
			res.write('</div>');
		res.write('</div>');
	res.write('<div class="go">');
	 res.write ('<p class="pp">Verção 0.3--12/12/2019.</br>IFPE -Instututo Federal de Edurção Ciencia e Tecnologia de Pernambuco </br>Lógica de programação.</br>')
	res.write('</p>');
	res.write('<img class="img-sobre" src="logo.png">');
	res.write('<ul style="position: absolute; left: 0; bottom: 20px;">');
	res.write('<li><a href="/">Voltar</a></li>');
	res.write('</ul>');
	

	
res.write('</body>');
res.write('</html>');
res.end();
});
app.get("/ajuda", function(req, res){
	
res.write('<!DOCTYPE html>');
res.write('<html lang="br">');
res.write('<head>');
res.write('<meta charset="UTF-8">');
res.write('<title>Ajuda</title>');
	
		<!-- Link pra o css --> 
res.write('<link rel="stylesheet" type="text/css" href="css/ajuda.css">');
res.write('<link rel="stylesheet icon" href="icon.png">');
res.write('</head>');
res.write('<body>');

res.write('<h1 class="tex">Instruções do Jogo</h1>');

res.write('<p >Cada jogada consiste em retirar algumas (ou todas) as peças de um dos montes.<br />Os números de peças e de montes podem variar, sendo a distribuição mais comum<br /> constituida por 15 peças em montes de 1,2,3,4 e 5 peças.<br />');
res.write('</p>');
res.write('<h2 class="tex">ORIGEM DO NIM</h2>');
	
res.write('<p>Nim é um jogo que foi criando na antiga China para dois jogadores. Foi o primeiro jogo a ser estudado pela Matemática.</p>')

res.write('<h2 class="tex" >HISTORIA</h2>');
res.write('<p>O nome foi dado por um Matematico Americano chamado Charles L.<br /> Bouton em um artigo de 1902, onde estuda a teoria matemática do jogo.</br> O jogo ganhou notoriedade com a aparição no filme "O ano passado em Marienbad" de Alain Resnais, em 1961.</p>');

	

		
res.write('<ul>');
res.write('<li>');
res.write('<a href="/">Voltar</a>');
res.write('</li>');
res.write('</ul>');
res.write('</body>');
res.write('</html>');

res.write('<!-- Wallpaper do jogo https://wallpaperscraft.com/catalog/space/3840x2160 -->')
	res.end();
});

app.use('/css', express.static(__dirname + '/css'));

app.use(express.static('imagens'));

app.use(express.static('css'));

app.listen (port, function () {
	console.log (`Escutando na porta ${port}...`);
})
