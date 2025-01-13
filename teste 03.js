const faturamento = [0, 1200, 3000, 0, 5000, 1500, 0, 700, 3500, 8000, 0, 0, 200, 6000, 3000];

// Remover dias sem faturamento
const diasComFaturamento = faturamento.filter(valor => valor > 0);

// Cálculos
const menorFaturamento = Math.min(...diasComFaturamento);
const maiorFaturamento = Math.max(...diasComFaturamento);
const mediaMensal = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;
const diasAcimaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias acima da média mensal: ${diasAcimaMedia}`);


/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;  
*/