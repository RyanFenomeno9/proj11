let vector1 = [];
let vector2 = [];
let vector3 = [];
let cont = 0;

for(i = 0; i < 5; i++)
{
    vector1[i] = Number(prompt(`Digite o ${i+1}º numero da primeira lista`));
}

for(i = 0; i < 5; i++)
{
    vector2[i] = Number(prompt(`Digite o ${i+1}º numero da segunda lista`));
}

for(i = 0; i < 5; i++)
{
    for(j = 0; j < 5; j++)
    {
        if(vector1[i] == vector2[j])
        {
            vector3[cont] = vector1[i];
            cont++;
        }
    }
}

alert(`${vector3}`);