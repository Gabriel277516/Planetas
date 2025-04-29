const quiz = [
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      opcoes: ["Terra", "Júpiter", "Vênus", "Marte"],
      resposta: "Júpiter"
    },
    {
      pergunta: "Qual planeta é conhecido como o Planeta Vermelho?",
      opcoes: ["Saturno", "Urano", "Marte", "Mercúrio"],
      resposta: "Marte"
    },
    {
      pergunta: "Qual planeta tem os anéis mais visíveis?",
      opcoes: ["Netuno", "Terra", "Saturno", "Júpiter"],
      resposta: "Saturno"
    },
    {
      pergunta: "Qual planeta é considerado Anão?",
      opcoes: ["Terra", "Plutão", "Marte", "Vênus"],
      resposta: "Plutão"
    },
    {
      pergunta: "Todos os planetas possuem um satélites naturais",
      opcoes: ["Sim", "Não","Apenas Mercúrio e venûs não possuem satélites naturais"],
      resposta:"Apenas Mercúrio e venûs não possuem satélites naturais"
    },
    {
        pergunta: "Quantos anéis tem saturno?",
        opcoes: ["Sete anéis", "Nove anéis", "Um anéis", "Cinco anéis"],
        resposta:"Sete anéis"
      },
      {
        pergunta: "Quais são os planetas rochosos? ",
        opcoes: ["Júpiter, Saturno, Urano e Netuno", "Mercúrio, Venûs, Terra e Marte", "Nenhuma dessas alternativas"],
        resposta:"Mercúrio, Venûs, Terra e Marte"
      }
  ];

  let perguntaAtual = 0;
  let pontuacao = 0;

  const perguntaEl = document.getElementById("question");
  const opcoesEl = document.getElementById("options");
  const resultadoEl = document.getElementById("result");

  function mostrarPergunta() {
    const q = quiz[perguntaAtual];
    perguntaEl.textContent = q.pergunta;
    opcoesEl.innerHTML = "";

    q.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.classList.add("option");
      btn.onclick = () => verificarResposta(opcao);
      opcoesEl.appendChild(btn);
    });
  }

  function verificarResposta(escolha) {
    if (escolha === quiz[perguntaAtual].resposta) {
      pontuacao++;
    }

    perguntaAtual++;
    if (perguntaAtual < quiz.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }

  function mostrarResultado() {
    perguntaEl.textContent = "Quiz finalizado!";
    opcoesEl.innerHTML = "";
    resultadoEl.textContent = `Você acertou ${pontuacao} de ${quiz.length} perguntas!`;
  }

  mostrarPergunta();

