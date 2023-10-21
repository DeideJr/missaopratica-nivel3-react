import Editora from '../modelo/Editora';

// Defina a variável editoras com pelo menos três elementos em formato JSON
const editoras: Array<Editora> = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley'),
];

class ControleEditora {
  // Implemente o método para retornar o vetor de editoras
  getEditoras(): Array<Editora> {
    return editoras;
  }

  // Implemente o método para obter o nome da editora com base no codEditora
  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = editoras.find((editora) => editora.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}

export default ControleEditora;