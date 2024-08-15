
function calcularFatorial(n) {
    if (n < 0) {
        return "O número deve ser um inteiro positivo.";
    }
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
function calcularFibonacci(n) {
    if (n < 0) {
        return "O número deve ser um inteiro positivo.";
    }
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci.slice(0, n + 1);
}
function calcularInformacoesMatematicas(numero) {
    if (numero < 0 || !Number.isInteger(numero)) {
        return "Por favor, insira um número inteiro positivo.";
    }

    const fatorial = calcularFatorial(numero);
    const fibonacci = calcularFibonacci(numero);

    return {
        fatorial: fatorial,
        fibonacci: fibonacci
    };
}
const numero = parseInt(prompt("Digite um número inteiro positivo:"));
const resultado = calcularInformacoesMatematicas(numero);

console.log(`Fatorial de ${numero}: ${resultado.fatorial}`);
console.log(`Sequência de Fibonacci até ${numero}: ${resultado.fibonacci.join(", ")}`);
