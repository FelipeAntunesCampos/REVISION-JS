//valores base;
let forcaBase = 10;
let defesaBase = 8;
let agilidadeBase = 12;

//Bonus / penalidades;
let bonusEspada = 5;
let bonusArmadura = 2;
let penalidadeEscudo = 4;

//Calculo atributos;
let forcaTotal = forcaBase + bonusEspada;
let defesaTotal = defesaBase + bonusArmadura;
let agilidadeTotal = agilidadeBase - penalidadeEscudo;

//Exibindo os resultados finais;
console.log("⚔Força total:", forcaTotal);
console.log("🛡Defesa Total:", defesaTotal);
console.log("🏃‍♂️Agilidade Final:", agilidadeTotal);
