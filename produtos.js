//Página Principal
const produtos = {
    "produto-mesa": {
        nome: "Mesa De Canto Para Escritório",
        preco: "R$ 350,00",
        descricao: "Mesa compacta em MDF, ideal para home office.",
        imagem: "img/Mesa.webp"
      },
      "produto-cadeira": {
        nome: "Cadeira Ergonômica",
        preco: "R$ 150,00",
        descricao: "Cadeira com apoio lombar e regulagem de altura.",
        imagem: "img/Cadeira.webp"
      },
      "produto-suporte": {
        nome: "Suporte Para Notebook",
        preco: "R$ 20,00",
        descricao: "Suporte ajustável para notebook, ideal para uso em casa ou escritório.",
        imagem: "img/Suporte.webp"
      },
      "produto-armario": {
        nome: "Armário de Arquivo",
        preco: "R$ 600,00",
        descricao: "Armário metálico com 4 gavetas para documentos.",
        imagem: "img/armario.jpg"
  }
};

function abrirProduto(produtoId) {
  if (!produtoId) {
    alert("ID do produto inválido!");
    return;
  }
  window.location.href = "produto.html?id=" + produtoId;
}

function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const produtoId = params.get("id");

  const produtos = {
    "produto-mesa": {
      nome: "Mesa de Canto Para Escritório",
      preco: "R$ 350,00",
      descricao: "Mesa de canto para escritorio feita em MDF.",
      imagem: "img/Mesa.webp"
    },
    "produto-cadeira": {
      nome: "Cadeira Ergonômica",
      preco: "R$ 150,00",
      descricao: "Cadeira com apoio lombar e regulagem de altura.",
      imagem: "img/Cadeira.webp"
    },
    "produto-suporte": {
      nome: "Suporte Para Notebook",
      preco: "R$ 20,00",
      descricao: "Suporte ajustável para notebook, ideal para uso em casa ou escritório.",
      imagem: "img/Suporte.webp"
    },
    "produto-luminaria": {
      nome: "Luminária de mesa",
      preco: "R$ 80,00",
      descricao: "Luminária de mesa com ajuste de brilho.",
      imagem: "img/Luminaria.webp"
    }
  };

  const container = document.getElementById("produto-detalhes");
  if (produtos[produtoId]) {
    const produto = produtos[produtoId];
    container.innerHTML = `
      <h1>${produto.nome}</h1>
      <img src="${produto.imagem}" alt="${produto.nome}">
      <p><strong>Preço:</strong> ${produto.preco}</p>
      <p>${produto.descricao}</p>
      <button onclick="window.location.href='./paginaprincipal.html'">Voltar</button>
    `;
  } else {
    container.innerHTML = "<p>Produto não encontrado.</p>";
  }
}

// Executa automaticamente quando estiver na página de produto
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("produto-detalhes")) {
    carregarDetalhes();
  }
});