// Objeto com todos os quizzes e perguntas organizados por categoria e id

const quizzes = {
  filmes: {
    harrypotter: [
      { pergunta: "Qual é o nome do ator que interpreta Harry Potter?", opcoes:["Daniel Radcliffe","Elijah Wood","Rupert Grint","Tom Felton"], resposta:0 },
      { pergunta: "Qual é o nome do castelo onde Harry estuda?", opcoes:["Durmstrang","Beauxbatons","Hogwarts","Ilvermorny"], resposta:2 },
      { pergunta: "Quem é o padrinho de Harry?", opcoes:["Remus Lupin","Sirius Black","Alvo Dumbledore","Rúbeo Hagrid"], resposta:1 },
      { pergunta: "Qual é a casa de Harry em Hogwarts?", opcoes:["Sonserina","Lufa-Lufa","Corvinal","Grifinória"], resposta:3 }
    ],
    classicos: [
      { pergunta:"Quem dirigiu o filme 'E.T. – O Extraterrestre'?", opcoes:["Steven Spielberg","George Lucas","James Cameron","Tim Burton"], resposta:0 },
      { pergunta:"Em que ano foi lançado 'O Poderoso Chefão'?", opcoes:["1972","1980","1969","1975"], resposta:0 }
    ]
  },
  celebridades: {
    brasil: [
      { pergunta:"Quem é conhecido como 'Rainha dos Baixinhos'?", opcoes:["Angélica","Eliana","Xuxa","Ivete Sangalo"], resposta:2 }
    ]
  },
  paises: {
    gerais: [
      { pergunta:"Qual é o maior país do mundo em extensão territorial?", opcoes:["Canadá","China","Rússia","EUA"], resposta:2 },
      { pergunta:"Qual é o país mais populoso do mundo em 2025?", opcoes:["Índia","China","Nigéria","EUA"], resposta:0 },
      { pergunta:"Qual é o menor país do mundo em área?", opcoes:["Mônaco","Vaticano","Malta","Luxemburgo"], resposta:1 }
    ]
  },
  series: {
    got: [
      { pergunta:"Quem é o autor da série de livros 'As Crônicas de Gelo e Fogo', que inspirou 'Game of Thrones'?", opcoes:["J.R.R. Tolkien","George R.R. Martin","C.S. Lewis","Patrick Rothfuss"], resposta:1 },
      { pergunta:"Qual é o nome do lobo gigante de Jon Snow?", opcoes:["Ghost","Nymeria","Summer","Shaggydog"], resposta:0 },
      { pergunta:"Em Stranger Things, qual é o nome do mundo paralelo?", opcoes:["Dark Side","O Outro Lado","O Mundo Invertido","O Mundo Paralelo"], resposta:2 },
      { pergunta:"Qual é o apelido que a mídia dá a Dexter quando começam a suspeitar dele?", opcoes:["Ice Truck Killer","The Brain Surgeon","Bay Harbor Butcher","The Butcher Of Miami"], resposta:2 },
      { pergunta:"Quem foi o assassino de Marina na primeira temporada?", opcoes:["Guzmán","Samuel","Polo","Nano"], resposta:2 },
      { pergunta:"Qual cidade serve de refúgio para o grupo em várias temporadas?", opcoes:["Hilltop","Alexandria","Woodbury","Kingdom"], resposta:1 }
    ]
  },
  futebol: {
    copa: [
      { pergunta:"Qual país sediou a Copa do Mundo de 2014?", opcoes:["Brasil","Alemanha","África do Sul","Rússia"], resposta:0 },
      { pergunta:"Quem é o maior artilheiro da história das Copas do Mundo?", opcoes:["Pelé","Miroslav Klose","Ronaldo Fenômeno","Gerd Müller"], resposta:1 },
      { pergunta:"Qual país sediou a primeira Copa do Mundo de futebol em 1930?", opcoes:["Brasil","Alemanha","África do Sul","Uruguai"], resposta:3 },
      { pergunta:"Quem foi o artilheiro da Copa do Mundo de 2002?", opcoes:["Klose","Ronaldo Fenômeno","África do Sul","Uruguai"], resposta:1 },
      { pergunta:"Qual país foi campeão da Copa de 2018?", opcoes:["França","Croácia","Alemanha","Brasil"], resposta:0 },
      { pergunta:"Qual desses países nunca sediou uma Copa do Mundo?", opcoes:["México","Espanha","Inglaterra","Portugal"], resposta:3 }
    ]
  },
  musicas: {
    anos2000: [
      { pergunta:"Onde surgiu a música na história da humanidade?", opcoes:["Em templos e rituais religiosos","Nas fábricas","Nas escolas","Nas guerras"], resposta:0 },
      { pergunta:"Qual música de Harry Styles explodiu nas paradas e se tornou um hino de autoestima?", opcoes:["Watermelon Sugar","Adore You","As It Was","Sign of the Times"], resposta:2 },
      { pergunta:"Quem é a cantora que ficou famosa com Good 4 U?", opcoes:["Halsey","Olivia Rodrigo","Billie Eilish","Ariana Grande"], resposta:1 },
      { pergunta:"Qual rapper brasileiro fez história com o lançamento do álbum Xamã e se tornou um dos maiores nomes do rap nacional?", opcoes:["Emicida","Matuê","Djonga","Xamã"], resposta:3 },
      { pergunta:"Qual dessas músicas se tornou um sucesso mundial depois de viralizar no TikTok em 2021?", opcoes:["Stay - The Kid LAROI & Justin Bieber","Levitating - Dua Lipa","Industry Baby - Lil Nas X & Jack Harlow","Save Your Tears - The Weeknd"], resposta:0 },
      { pergunta:"Qual dessas músicas é um sucesso da cantora Billie Eilish?", opcoes:["Bad Guy","Blinding Lights","Watermelon Sugar","Levitating"], resposta:0 },
      { pergunta:"Quem ficou famoso com o hit Blinding Lights, uma das músicas mais ouvidas da década de 2020?", opcoes:["The Weeknd","Drake","Justin Bieber","Post Malone"], resposta:0 },
      { pergunta:"Qual dessas músicas é um sucesso da cantora Dua Lipa?", opcoes:["Levitating","Good 4 U","Bad Guy","Watermelon Sugar"], resposta:0 },
      { pergunta:"Qual dessas músicas de Doja Cat bombou nas redes sociais e se tornou um hit global em 2021?", opcoes:["Say So","Streets","Need to Know","Kiss Me More"], resposta:3 },
      { pergunta:"Quem foi o artista que deu a volta por cima em sua carreira com a música Peaches, fazendo uma parceria com Daniel Caesar e Giveon?", opcoes:["Drake","Justin Bieber","Shawn Mendes","Post Malone"], resposta:1 }
    ]
  }
};

// Pega categoria e quiz da URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get('categoria') || 'filmes';
const quizId = params.get('quiz') || 'harrypotter';

// Salva o acesso ao quiz no histórico do perfil
(function(){
  let historico = [];
  try { historico = JSON.parse(localStorage.getItem('historico_quizzes')) || []; } catch {}
  historico.push({
    categoria: categoria,
    quiz: quizId,
    data: new Date().toISOString()
  });
  // Mantém só os 30 últimos
  historico = historico.slice(-30);
  localStorage.setItem('historico_quizzes', JSON.stringify(historico));
})();

// Seleciona o quiz correto
let quiz = (quizzes[categoria] && quizzes[categoria][quizId]) || [];
let indice = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// Mostra o nome do usuário no topo direito
const usuario = localStorage.getItem('usuario_nome') || 'Usuário';
document.getElementById('usuario-nome-texto').textContent = usuario;
// Ao clicar, vai para a página de perfil
document.getElementById('usuario-nome').onclick = function() {
  window.location.href = 'perfil.html';
};
// Mostra o nome do quiz no banner
document.getElementById('banner').textContent = `Quiz: ${quizId.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^\w/, c => c.toUpperCase())}`;

// Função principal para mostrar a pergunta atual
function mostrarPergunta() {
  // Se acabou o quiz, mostra pontuação e botões finais
  if (indice >= quiz.length) {
    document.getElementById('pergunta').textContent = "Fim do quiz!";
    document.getElementById('opcoes').innerHTML = "";
    document.getElementById('resultado').textContent = `Você acertou ${acertos} de ${quiz.length}!`;
    document.getElementById('resultado').className = '';
    // Exibe a pontuação final acima dos botões finais (texto branco)
    document.getElementById('pontuacao-final').textContent = `Sua pontuação: ${acertos} de ${quiz.length}`;
    document.getElementById('botoes-finais').style.display = "flex";
    // Mostra o botão de curtir, se existir a função
    if (window.mostrarBotaoCurtir) window.mostrarBotaoCurtir();
    salvarPontuacao();

    // Salva o quiz feito e a pontuação no localStorage para o perfil
    try {
      let feitos = JSON.parse(localStorage.getItem('quizzes_feitos')) || [];
      // Evita duplicatas: só adiciona se não existir
      if (!feitos.some(q => q.categoria === categoria && q.quiz === quizId)) {
        feitos.push({ categoria, quiz: quizId, data: new Date().toISOString() });
        localStorage.setItem('quizzes_feitos', JSON.stringify(feitos));
      }
    } catch(e) {}
    try {
      let pontos = JSON.parse(localStorage.getItem('quizzes_pontos')) || [];
      pontos.push(acertos);
      localStorage.setItem('quizzes_pontos', JSON.stringify(pontos));
    } catch(e) {}
    return;
  }
  // Mostra a pergunta e as opções
  document.getElementById('pergunta').textContent = quiz[indice].pergunta;
  document.getElementById('resultado').textContent = "";
  document.getElementById('resultado').className = '';
  const opcoesDiv = document.getElementById('opcoes');
  opcoesDiv.innerHTML = "";
  // Cria um botão para cada opção de resposta
  quiz[indice].opcoes.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.textContent = op;
    btn.onclick = () => responder(i, btn);
    opcoesDiv.appendChild(btn);
  });
  // Esconde os botões finais enquanto o quiz não terminou
  document.getElementById('botoes-finais').style.display = "none";
}

// Função chamada ao clicar em uma opção de resposta
function responder(opcao, btnClicado) {
  const opcoesBtns = Array.from(document.getElementById('opcoes').children);
  const respostaCerta = quiz[indice].resposta;
  // Desabilita todos os botões e marca o correto
  opcoesBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === respostaCerta) {
      btn.classList.add('btn-correto');
    }
  });
  // Mostra se acertou ou errou
  if (opcao === respostaCerta) {
    document.getElementById('resultado').textContent = "Correto!";
    document.getElementById('resultado').className = 'resultado correto';
    acertos++;
  } else {
    document.getElementById('resultado').textContent = "Errado!";
    document.getElementById('resultado').className = 'resultado errado';
    btnClicado.classList.add('btn-errado');
  }
  indice++;
  // Mostra próxima pergunta após 1.2s
  setTimeout(mostrarPergunta, 1200);
}

// Volta para a página de quizzes da categoria
function irHome() {
  window.location.href = `quizzes.html?categoria=${categoria}&quiz=${quizId}`;
}

// Vai para o ranking global do quiz
function verRanking() {
  window.location.href = `ranking.html?categoria=${categoria}&quiz=${quizId}`;
}

// Salva a pontuação do usuário no ranking do localStorage
function salvarPontuacao() {
  const key = `ranking_${categoria}_${quizId}`;
  let ranking = [];
  try { ranking = JSON.parse(localStorage.getItem(key)) || []; } catch {}
  ranking.push({ nome: usuario, pontos: acertos, total: quiz.length, data: new Date().toISOString() });
  ranking = ranking.sort((a,b)=>b.pontos-a.pontos).slice(0,20);
  localStorage.setItem(key, JSON.stringify(ranking));
}

// Inicia o quiz mostrando a primeira pergunta
mostrarPergunta();
