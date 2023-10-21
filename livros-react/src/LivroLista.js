import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros.ts';
import ControleEditora from './controle/ControleEditora.ts'; // Importe o controlador de editoras
import './App.css'
const controladorLivros = new ControleLivros();
const controladorEditora = new ControleEditora(); // Crie uma instância do controlador de editoras

function LinhaLivro({ livro, excluir }) {
  const nomeEditora = controladorEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.título}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const excluir = (codigoLivro) => {
    controladorLivros.excluir(codigoLivro);
    setCarregado(false);
  };

  useEffect(() => {
    if (!carregado) {
      const livrosObtidos = controladorLivros.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    }
  }, [carregado]);

  return (
    <main>
      <h1>Catalogo de Livros</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}