function calcularBloques() {
    // Obtener el número de niveles
    const numNiveles = parseInt(document.getElementById('numNiveles').value);

    // Calcular la suma de cuadrados perfectos
    let sumaBloques = 0;
    let detalles = '';

    for (let i = 1; i <= numNiveles; i++) {
        sumaBloques += i * i;
        detalles += `<li>Nivel ${i}: ${i * i} bloques</li>`;
    }

    // Mostrar el resultado
    let resultadosHTML = `<p>Para una torre de ${numNiveles} niveles, el número total de bloques necesarios es: ${sumaBloques}</p>`;
    resultadosHTML += `<ul>${detalles}</ul>`;
    document.getElementById('resultados').innerHTML = resultadosHTML;
}

document.getElementById('calcular').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    calcularBloques();
});
