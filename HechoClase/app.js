function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

const numerosAleatorios = [];

for (let i = 0; i < 10000; i++) {
    numerosAleatorios.push(generarNumeroAleatorio());
}

const frecuenciaNumeros = {};

numerosAleatorios.forEach(numero => {
  if (frecuenciaNumeros[numero]) {
    frecuenciaNumeros[numero]++;
  } else {
    frecuenciaNumeros[numero] = 1;
  }
});

console.log("Frecuencia de los números del 1 al 20:");
for (let i = 1; i <= 20; i++) {
  console.log(`Número ${i}: ${frecuenciaNumeros[i] || 0} veces`);
}