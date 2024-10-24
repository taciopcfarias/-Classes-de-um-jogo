class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  function main() {
    
    const mago = new Heroi('Merlin', 150, 'mago');
    const guerreiro = new Heroi('Conan', 35, 'guerreiro');
    const monge = new Heroi('Shaolin', 40, 'monge');
    const ninja = new Heroi('Naruto', 17, 'ninja');
  
    mago.atacar(); 
    guerreiro.atacar();  
    monge.atacar();      
    ninja.atacar();      
  }
  
  main();
  