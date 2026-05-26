let nums = [];
let sum = 0;
let lista = "";
for(i = 0; i < 8; i++)
{
    nums[i] = Number(prompt("Digite um numero"));
}

for(i = 0; i < 8; i++)
{
    sum = sum + nums[i];
}

sum = sum/8;

for(i = 0; i < 8; i++)
{
    if (nums[i] > sum)
    {
        lista = lista + `\n${nums[i]}`;
    }
}

alert(`Os valores acima da média são: ${lista}`);