const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "Afirmação 2"
            }
        ]

    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "Afirmação 2"
            }
        ]

    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Alternativa 2",
                afirmacao: "Afirmação 2"
            }
        ]

    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas() {
    if(atual>= alternativas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas() {
    for (const opção of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opção.texto;
        botaoAlternativa.addEventListener("click",  ()=> respostaSelecionada(opção));
        caixaAlternativas.appendChild(botaoAlternativa);

    }
}

function respostaselecionada(opcao){
    const afirmacoes = opcao.alternativas;
    historiaFinal +=
    atual++;
mostraPerguntas();
}
  
function mostraResultado (){
    caixaPerguntas.textContent = "em resumo vc escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""
}
    mostraPerguntas();  