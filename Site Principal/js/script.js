/* ================= LINK ATIVO DO MENU ================= */

/* pega todos os links do menu */
const links = document.querySelectorAll('.nav a');

/* verifica qual página está aberta */
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('ativo');
  }
});

/* ================= FILTRO DE PRODUTOS ================= */

function filtrarProdutos(categoria){

const produtos = document.querySelectorAll(".produto-card");
let visiveis = 0;

produtos.forEach(produto => {

if(categoria === "todos"){

produto.style.display = "block";
visiveis++;

}

else if(produto.dataset.categoria === categoria){

produto.style.display = "block";
visiveis++;

}

else{

produto.style.display = "none";

}

});

document.getElementById("contador-produtos").innerText =
visiveis + " produtos encontrados";

}
