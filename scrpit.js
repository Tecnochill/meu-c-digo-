const SENHA_CORRETA = "alopiasvulpinus";
let tentativa= prompt("Digite a senha para acessar a página:");
if(tentativa !== SENHA_CORRETA) {
    alert("Senha incorreta! acesso negado.");
    window.location.href = "about:blank";
} else {
    alert("Olá, Bem vindo ao seu catálogo!");
}
