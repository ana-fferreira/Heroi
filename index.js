class Heroi {   

  constructor(nome, idade,tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo


            }


atacar() {
    let ataque = "";

 if (this.tipo === "mago") {
    ataque = "magia";

 } else if (this.tipo === "guerreiro") {
    ataque = "espada";

} else if (this.tipo === "monge") {
    ataque = "artes marciais";

} else if (this.tipo === "ninja") {
    ataque = "shuriken";
} 
    

      console.log(`O ${this.tipo} atacou usando ${ataque}`);

     }
}

   let herois = [
      new Heroi("Muo", 50, "mago"),
      new Heroi("Mio", 60, "guerreiro"),
      new Heroi("Mao", 70, "monge"),
      new Heroi("Mpo", 80, "ninja")

   ];

       for (let heroi of herois) {
 heroi.atacar();

       }
      
    