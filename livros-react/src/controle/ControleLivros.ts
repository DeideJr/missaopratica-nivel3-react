import Livro from "../modelo/Livro";


class ControleLivros {

    private livros: Array<Livro> = [
      new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java', ['Bert Bates', 'Kathy Sierra']),
      new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel']),
      new Livro(3, 3, 'Core Java for the Impatient', 'Resumo do Livro 3', ['Cay Horstmann']),
    ];
  
    obterLivros(): Array<Livro> {
      return this.livros;
    }
  
    incluir(novoLivro: Livro): void {
      const codigosLivros = this.livros.map((livro) => livro.codigo);
      const novoCodigo = Math.max(...codigosLivros) + 1;
      novoLivro.codigo = novoCodigo;
      this.livros.push(novoLivro);
      console.log('Novo livro adicionado:', this.livros);
    }
  
    excluir(codigoLivro: number): void {
      const index = this.livros.findIndex((livro) => livro.codigo === codigoLivro);
      if (index !== -1) {
        this.livros.splice(index, 1);
      }
    }
  }
  
  export default ControleLivros;