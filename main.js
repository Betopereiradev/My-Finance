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
