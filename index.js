//calcular idade e definir a categoria para tal idade.
function calcularIdade(idade) {



    let categoria = "";



if (idade < 10) {
   categoria = "Criança";

} else if (idade < 15) {
    categoria = "Adolescente";
  
} else if (idade < 20) {    
     categoria = "Jovem";

} else if (idade < 30) {    
     categoria = "Adulto";

} else { 
    categoria = "Idoso";

    }
console.log(`Você esta na categoria de ${categoria}`);
}
    calcularIdade (20);



