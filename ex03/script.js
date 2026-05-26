let pessoas = [];
let sum = 0;
let lista = "";
let tri = 0;

for(i = 0; i < 9; i++)
{
    pessoas[i] = {};
    pessoas[i].nome = prompt(`Digite o nome da ${i+1}º pessoa`);
    pessoas[i].idade = Number(prompt(`Digite a idade da ${i+1}º pessoa`));
}

for(i = 0; i < 9; i++)
{
    if(pessoas[i].idade < 18)
    {
        lista = lista + `\n nome: ${pessoas[i].nome}, idade: ${pessoas[i].idade}`;
    }
}

alert(`Os alunos menores de idade são: ${lista}`);