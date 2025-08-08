//Criação das Variáveis Principais:
let nome = "Trendius"; // Nome do personagem;
let classe = "guerreiro"; // Tipo de herói (guerreiro, maga, engenheira arcana, etc.);
let nivel = 12; // Nível do herói (número entre 1 e 20, por exemplo);
let vida = 100; // Pontos de vida;
let ouro = 50; // Quantidade de moedas;
let xp = 15; // Experiência acumulada;
let agilidade = 25; //Agilidade do personagem (de 1 a 100 podendo ultrapassar, tornando agilidade adicional);
let vidaMaxima = 100; //Vida maxima que o personagem pode chegar;
let poderInimigo = 30; //Valor do poder inimigo ao personagem principal;
let mana = 30; //Mana de 1 a 100;
let combatesVencidos = 0; //Combates vencidos contra inimigos;
let localHistoria = "Salvador"; //Local da historia

//Definição de Constantes Mágicas:
let NOME_ARMA = "Espada temperada"; // Ex: "Espada Flamejante";
let DANO_BASE = 70; // Ex: 40;
let NOME_ARMADURA = "Armadura de Placas"; // Ex: "Capa de Dados";
let DEFESA_BASE = 30; // Ex: 20;

//Aplicação de Operadores de Atribuição:
let valorRecebidoDeXpPorTreinamento = 150; //Valor Recebido de xp por cada treinamento;
let pocaoValorOuros = 30; //Preço da poção;
let pocaoValorVida = 40; //Quanto a poção acrescenta de vida;
let encantarArma = 2; //encantamento da espada

xp += valorRecebidoDeXpPorTreinamento; // Valor Do treinamento adicionado ao xp do personagem;
ouro -= pocaoValorOuros; // Valor de ouro removido para comprar a poção;
vida += pocaoValorVida; // Acrescenta valor de vida após utilizar a poção;
DANO_BASE *= encantarArma; // Dobra o valor de dano da espada, após encantamento;

//Cálculo de Atributos Finais:
ataqueTotal = nivel + DANO_BASE; //Criação do dano total com base no nivel + Dano base;
defesaTotal = DEFESA_BASE + (nivel / 2); //Criação da Defesa total com base na defesa base + nivel divido por 2;

//Avaliação de Prontidão com Operadores Lógicos:
vidaSuficiente = vida > 70; // Verificar se a vida é suficiente se for maior que 70;
ataqueForte = ataqueTotal > 60; // Verificar se o ataque é forte se o ataque total for mais que 60;
nivelAvancado = nivel >= 10; //Verificar se o nivel é avancado se o nivel for >= 10
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado); //Verificar se pode enfrentar o guardião, se a vida for suficiente e (O ataque for forte ou o nivel avancado);

//Geração da Lore do Personagem:
console.log("---");
console.log("📜 História DO HERÓI: " + nome);
console.log("");
console.log(nome + ", o " + classe + " destemido, forjou seu caminho através das terras perigosas de " + localHistoria + ".");
console.log("Com uma reputação construída em batalha, ele é um herói de nível " + nivel + ", temido por seus inimigos e respeitado por seus aliados.");
console.log("");
console.log("Seu equipamento é tão lendário quanto suas proezas. Empunhando uma " + NOME_ARMA + ", agora atribuida com um encantamento mítico que dobrou seu dano para " + DANO_BASE + ", " + nome + " aplica golpes que gritam pelos vales.");
console.log("Sua " + NOME_ARMADURA + ", com uma defesa base de " + DEFESA_BASE + ", combinada com sua agilidade e experiência, concede-lhe uma defesa total de " + defesaTotal + ".");
console.log("");
console.log("A vida de um aventureiro é pesada, e " + nome + " sabe disso. Após incansáveis treinamentos, sua experiência acumulada (XP) subiu para " + xp + ", aproximando-o de novos patamares de poder.");
console.log("Recentemente, ele garantiu sua sobrevivência comprando uma poção vital, gastando " + pocaoValorOuros + " moedas de ouro e restaurando sua vida para " + vida + " pontos.");
console.log("");
console.log("Com a mente voltada para os desafios que se aproximam, " + nome + " avalia sua prontidão.");
console.log("Sua vida está mais do que suficiente? " + vidaSuficiente + " | Seu ataque é forte? " + ataqueForte + " | Seu nível é avançado? " + nivelAvancado + ".");
console.log("Tudo indica que ele pode enfrentar o Guardião? " + podeEnfrentarGuardiao + ". O destino de Salvador espera sobre suas mãos pesadas e habilidades inevitáveis, e " + nome + " está pronto para a batalha final.");
console.log("---");
console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nome + " ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 1
console.log("Após os eventos em " + localHistoria + ", nosso herói " + nome);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]
// [Aqui você implementa o 1 capítulo]
// CAPÍTULO 1: Condicionais Simples na narrativa
console.log("🌅 CAPÍTULO 1: O Aviso dos Anciões");

// Verificação baseada no nível do personagem
if (nivel < 10) {
    console.log("⚠️ Um ancião o adverte: 'Você ainda não alcançou a habilidade necessaria para prosseguir!'");
    console.log("Mas " + nome + " decide prosseguir mesmo assim...");
}

// Verificação de recursos especiais
if (ouro >= 70) {
    console.log("💰 Os Ouros brilham em seus bolsos, atraindo olhares cobiçosos...");
}

// Verificação de classe específica
if (classe === "guerreiro") {
    console.log("✨ A energia das suas espadas flui através de suas veias e de seus grandiosos braços..."); 
}

// [Aqui você implementa o 2 capítulo]

// CAPÍTULO 2: Escolha Estratégica
console.log("🛡️ CAPÍTULO 2: A Encruzilhada do Destino");

// Escolha baseada em recursos
if (ouro >= 50) {
    console.log("💰 Com ouro suficiente, " + nome + " compra equipamentos melhores para prosseguir sua jornada!");
    ataqueTotal += 5;
    defesaTotal += 3;
    ouro -= 50;
    console.log("A Força Total e a defesa Total aumentaram! Ouro restante: " + ouro);
} else {
    console.log("💔 Sem ouro suficiente, " + nome + " deve confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! O sua agilidade aumenta em +2");
    agilidade += 2;
}

// Sistema de recompensas narrativo
if (xp >= 100) {
    console.log("🎉 A sabedoria acumulada se manifesta! " + nome + " sente-se mais poderoso e mais grandioso!");
    nivel++;
    xp = 0;
    vida = vidaMaxima; // Vida restaurada
} else {
    console.log("📊 " + nome + " ainda busca mais conhecimento e experiência...");
    console.log("Sabedoria atual: " + xp + "/100");
}

// [Aqui você implementa o 3 capítulo]

// CAPÍTULO 3: A Batalha Decisiva
console.log("⚔️ CAPÍTULO 3: A Batalha Decisiva");

// Sistema de combate inteligente baseado na situação
if (vida <= 30) {
    console.log("🆘 Com pouca vida, " + nome + " usa uma tática desesperada!");
    console.log("Ataque final com toda a força restante!");
    poderInimigo -= (ataqueTotal * 2);
} else if (mana >= 15 && classe === "Guerreiro") {
    console.log("✨ " + nomePersonagem + " canaliza todo sua habilidade com a força de suas espadas!");
    console.log("Uso excessivo de força!");
    poderInimigo -= (ataqueTotal + 20);
    mana -= 15;
} else if (agilidade >= 15) {
    console.log("🏃‍♂️ Com grande agilidade, executa um ataque certeiro!");
    poderInimigo -= ataqueForte;
} else {
    console.log("🛡️ Luta defensiva e calculada!");
    poderInimigo -= (ataqueTotal / 2);
    vida += 10; // Recupera um pouco de vida
}

// EPÍLOGO - Resultado final
if (poderInimigo <= 0) {
    console.log("🎉 VITÓRIA ÉPICA! " + nome + " triunfa!");
    xp += 100;
    combatesVencidos++;
    console.log("A lenda de " + localHistoria + " cresce...");
} else {
    console.log("⚔️ A batalha foi árdua, mas " + nome + " sobrevive para lutar outro dia!");
    combatesVencidos++;
}

console.log("");
console.log(`🏁 FIM DO CAPÍTULO - ${nome} agora tem ${combatesVencidos} combates vencidos, Aguarde o próximo nível da aventura!`);

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===
// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
// Inventário mágico - primeira coleção arcana
let inventario = ["Poção de Vida", "Espada temperada", "Armadura de Placas"];
let aliados = ["Mago ZAGODE", "Guerreira Iumini", "Arqueiro TENUS"];
let inimigosEncontrados = ["Goblin da tempestade Sombria", "Lork de Barma", "Dragão da ciência"];
let salasCastelo = ["Biblioteca dos Medievais de Arcana", "Armadilha Silenciosa de Cristal Temperado", "Torre Do Medielativo"];
let tesouroColetado = [];

console.log("🏰 === " + nome + " ADENTRA O CASTELO DOS PODERES DE ZEUS, Conhecido como castelo de arrays ===");
console.log("Após as vitórias dos níveis anteriores, nosso herói chegou ao castelo lendário invicto...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");

// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús Místicos do Castelo De Zeus");

// 3.5.1. Declaração e inicialização
let pocoesEncontradas = ["Cura Total", "Força Exterminal", "Capa de Invisibilidade"];
let armadilhasAtiradas = []; // Array vazio - será preenchido na aventura

// 3.5.2. Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

// Modificando elemento específico
inventario[0] = "Poção de Vida Suprema Total"; // Upgrade da poção!
console.log("✨ " + nome + " aprimorou uma poção, e conseguiu um feito inédito!");

// 3.5.3. Métodos de array fundamentais
inventario.push("Colar de Proteção Mística","Anel de magnetismo"); // Adiciona no final um item
console.log("⛓💍 Novos dois itens adicionados! Inventário: " + inventario);
console.log("Anel de magnetismo atrapalhou nosso guerreiro, Então......");

let itemRemovido = inventario.pop(); // Remove do final
console.log("Nosso guerreiro decide jogar o anel nos mares dos ímpios.");
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);

// === CAPÍTULO 2: O RITUAL DA EXPLORAÇÃO ===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as Masmorras Sistemáticas de odin");

// Explorando cada sala do castelo usando for tradicional
console.log("🗺️ Começando exploração das " + salasCastelo.length + " salas místicas e sombrias...");

for (let i = 0; i < salasCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log("📚 " + nome + " encontra pergaminhos medievais antigos na exploração da sala!");
xp += 50;
} else if (i === 1) {
console.log("💎 Cristais brilhantes encontrados na exploração das salas concedem poder mágico ao guerreiro!");
tesouroColetado.push("Cristal de Poder Da Sorte Medieval"); //Adiciona primeiro item no array vazio
} else {
console.log("⏰ O tempo se distorce ao redor de " + nome + "!");
vida -= 10; // Pequeno dano temporal
}
}

console.log("📊 Exploração das salas medievais completa! XP Total: " + xp + " | Vida Total: " + vida); 

// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos para uma nova trajetória mística");

// Recrutando aliados com for (Laço de repetição) tradicional
console.log("🏹 " + nome + " convoca seus aliados Aracanos para a batalha final mais esperada:");
for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("⚡ Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");

// Cada posição no array determina habilidade especial
if (i === 0) { // Primeiro aliado - Líder mágico 
console.log("🔮 Como líder mágico Supremo, " + aliado + " multiplica o poder da equipe!");
ouro += 50;
ataqueTotal = ataqueTotal * 2
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como defensor principal Supremo, " + aliado + " fortalece a resistência!");
vida += 30;
defesaTotal += 40;
} else { // Demais aliados - Especialistas
console.log("🏹 Como especialista Supremo, " + aliado + " aprimora táticas de combate!");
xp += 40;
ataqueTotal += 30;
defesaTotal += 30;
}
} //Fim do loop de repetição FOR

console.log("🎖️ Equipe completa e fortalecida! Ouro Total: " + ouro + " | Vida máxima: " + vida + " | Ataque Total: " + ataqueTotal + " | Defesa Total: " + defesaTotal);

