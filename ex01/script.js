let nome = [];
let lista = "";
for(i = 0; i < 7; i++)
{
    nome[i] = prompt("Digite um nome");
}

for(i = 6; i = 0; i--)
{
    lista = lista + `${nome[i]}\n`;
}

alert(`Os nomes que voce colocou foram: ${lista}`);