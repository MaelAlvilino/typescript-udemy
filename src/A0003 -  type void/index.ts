function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Emmanuel',
  sobrenome: 'Alves',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Emmanuel', 'Alves');
pessoa.exibirNome();

export { pessoa };
