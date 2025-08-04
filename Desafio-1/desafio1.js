//Criação das Variáveis Principais:
let nome = "Trendius"; // Nome do personagem;
let classe = "guerreiro"; // Tipo de herói (guerreiro, maga, engenheira arcana, etc.);
let nivel = 12; // Nível do herói (número entre 1 e 20, por exemplo);
let vida = 100; // Pontos de vida;
let ouro = 50; // Quantidade de moedas;
let xp = 15 // Experiência acumulada;

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
console.log(nome + ", o " + classe + " destemido, forjou seu caminho através das terras perigosas de Salvador.");
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