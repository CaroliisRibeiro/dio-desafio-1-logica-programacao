const prompt = require("prompt-sync")();

console.log ("Bem vinde! Ao CarolVerso");
let heroi_Nome = prompt("Qual é o nome do seu herói?");
let XP = Number(prompt("Qual é o nível de experiência do seu herói? " + "(Digite um número inteiro)"));

let nivel_Heroi = "";

if (XP < 1000) {
    nivel_Heroi = "Ferro";
} 
else if (XP >= 1001 && XP <= 2000) {
    nivel_Heroi = "Bronze";
} 
else if (XP >= 2001 && XP <= 5000) {
    nivel_Heroi = "Prata";
} 
else if (XP >= 5001 && XP <= 7000) {
    nivel_Heroi = "Ouro";
} 
else if (XP >= 7001 && XP <= 8000) {
    nivel_Heroi = "Platina";
} 
else if (XP >= 8001 && XP <= 9000) {
    nivel_Heroi = "Ascendente";
} 
else if (XP >= 9001 && XP <= 10000) {
    nivel_Heroi = "Imortal";
} 
else if (XP >= 10001) {
    nivel_Heroi = "Radiante";
} 
else {
    console.log("Valor inválido.");
}

console.log("O Herói de nome " + heroi_Nome + " está no nível de " + nivel_Heroi);