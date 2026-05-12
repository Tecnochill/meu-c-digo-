let idade = 20;
let temConvite = true;

if (idade >= 18 && temConvite) {
    console.log("Pode entrar.");
} else {
    console.log("Não pode entrar.");
}

let desconto = true;
let Temlogin = false;
if (desconto && Temlogin) {
    console.log("Tem desconto a aplicar");
} else {
    console.log("Não tem desconto a aplicar");
}

let BlackFriday = false;
let temCupom = true;

if (BlackFriday || temCupom) {
    console.log("Produto com desconto!");
} else {
    console.log("Preço normal.");
}

let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
  console.log("É fim de semana!");
} else {
  console.log("É dia de semana.");
}

let PercyJackson;
let HarryPotter;

if (PercyJackson!= HarryPotter) {
    console.log("São do mesmo autor");
} else {
    console.log ("Não são do mesmo autor");
}

let Princesa;
let Cavaleiro;

if (Princesa!=Cavaleiro) {
    console.log("Podem se apaixonar");
} else {
    console.log ("Não podem se apaixonar");
}
