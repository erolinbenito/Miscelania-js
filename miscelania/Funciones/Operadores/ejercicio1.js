const formulario = document.getElementById("calculadora-triangulo");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const base = parseFloat(formulario.base.value);
    const altura = parseFloat(formulario.altura.value);

    if (isNaN(base) || isNaN(altura)) {
        resultado.textContent = "Error: Ingresa valores numéricos válidos.";
        return;
    }

    const area = (base * altura) / 2;

    resultado.textContent = `El área del triángulo es: ${area}`;
});
