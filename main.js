// Definir os dados para o gráfico
const data = {
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  datasets: [
    {
      label: "Entradas",
      data: [
        1000, 2000, 1500, 3000, 2500, 2000, 1500, 2500, 3000, 3500, 2000, 1000,
      ],
      backgroundColor: "rgb(214, 75, 194)",
      // borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Saídas",
      data: [
        500, 1000, 750, 1500, 1250, 1000, 750, 1250, 1500, 1750, 1000, 500,
      ],
      backgroundColor: "rgb(248, 193, 233)",
      // borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

// Configurar o gráfico
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Renderizar o gráfico
const myChart = new Chart(document.getElementById("meu-grafico"), config);

// Modal de registro de transação
const botao = document.getElementById("abrirModalTransacao");
const modal = document.getElementById("modalRegistroTransacao");
const fechar = document.getElementById("fecharModalTransacao");

botao.onclick = function () {
  modal.style.display = "block";
};

fechar.onclick = function () {
  modal.style.display = "none";
};

// Pega os valores atuais do dashboard
const botaoRegistrar = document.getElementById("registrarTransacao");
const saida = document.getElementById("saidas-balanco");
const entrada = document.getElementById("entradas-balanco");
const emConta = document.getElementById("conta-balanco");

var valorAtualEntrada = 0;
// Obter valor armazenado no localStorage
valorAtualEntrada = parseFloat(localStorage.getItem("valorEntrada")) || 0;

var valorAtualSaida = 0;
// Obter valor armazenado no localStorage
valorAtualSaida = parseFloat(localStorage.getItem("valorSaida")) || 0;

var valorAtualConta = 0;

// Exibe os valores armazenados quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  let valorSaidaArmazenado = localStorage.getItem("valorSaida");
  saida.textContent = "R$ " + valorSaidaArmazenado;

  let valorEntradaArmazenado = localStorage.getItem("valorEntrada");
  entrada.textContent = "R$ " + valorEntradaArmazenado;

  let emContaArmazenado = localStorage.getItem("emConta");
  emConta.textContent = "R$ " + emContaArmazenado;
});

// Adicionar transação
botaoRegistrar.addEventListener("click", function () {
  var nomeTransacao = document.getElementById("nomeTransacao").value;
  var tipoTransacao = document.getElementById("tipoTransacao").value;
  var dataTransacao = document.getElementById("dataTransacao").value;
  var valorTransacao = document.getElementById("valorTransacao").value;

  if (tipoTransacao == "entrada") {
    var valorTransacao = document.getElementById("valorTransacao").value;
    valorTransacao = parseFloat(valorTransacao);

    // Atualizar o valor atual
    var valorAtualizado = valorAtualEntrada + valorTransacao;
    valorAtualEntrada = valorAtualizado;

    localStorage.setItem("valorEntrada", valorAtualEntrada);

    // Atualizar o valor exibido na página
    entrada.textContent = "R$ " + valorAtualEntrada.toFixed(2);
  } else if (tipoTransacao == "saida") {
    valorTransacao = parseFloat(valorTransacao);

    // Atualizar o valor atual
    var valorAtualizado = valorAtualSaida + valorTransacao;
    valorAtualSaida = valorAtualizado;

    localStorage.setItem("valorSaida", valorAtualSaida);

    // Atualizar o valor exibido na página
    saida.textContent = "R$ " + valorAtualSaida.toFixed(2);
  }

  // Atualizar o saldo em conta
  var saldoEmConta = valorAtualEntrada - valorAtualSaida;
  emConta.textContent = "R$ " + saldoEmConta.toFixed(2);

  localStorage.setItem("emConta", saldoEmConta);

  // Avisa que foi cadastrada
  // Arrumar, pois só aparece a primeira vez
  const aviso = document.getElementById("aviso-popup");
  aviso.textContent = "Transação cadastrada com sucesso.";

  setTimeout(function () {
    aviso.remove();
  }, 3000);
});
