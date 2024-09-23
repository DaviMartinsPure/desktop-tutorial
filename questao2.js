console.log("Indentificar letras A")

function contarLetrasA(texto) {
    const textoMinusculo = texto.toLowerCase();

    let contador = 0;

    for (let i = 0; i < textoMinusculo.length; i++) {
        if (textoMinusculo[i] === 'a') {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso:
const minhaString = "Ola, mundo! A letra 'a' aparece varias vezes e muitas dessas vezes vao estar corretas.";
const quantidadeDeAs = contarLetrasA(minhaString);

console.log(`A letra 'a' aparece ${quantidadeDeAs} vezes na string.`);