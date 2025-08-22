function calcularIdade(idade) {
    let categoria = "";

    if (idade < 10) {
        categoria = "Criança";
    } else if (idade < 20) {
        categoria = "Jovem";
    } else if (idade < 60) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }

    console.log("Você está na categoria de " + categoria);
}

calcularIdade(27);