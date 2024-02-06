// eslint-disable-next-line no-undef
import { render, screen } from '@testing-library/react';
import Tela from '../tela/index';


// eslint-disable-next-line no-undef
test('Validar se no componete tem o nome desejado.', () => {
  render(<Tela />);
  // eslint-disable-next-line no-undef
  const nomeUsuario = screen.getByText('Alex');
  // ou const nomeUsuario = screen.queryByText("Alex"); para encontrar opcionalmente
  // eslint-disable-next-line no-undef
  expect(nomeUsuario).toBeInTheDocument;
});

// eslint-disable-next-line no-undef
test('Pegar retorno da lista.', () => {
  render(<Tela />);
  // eslint-disable-next-line no-undef
  const ListaUsuario = screen.getAllByRole('link'); // pegando pelo nome da classe
  // eslint-disable-next-line no-undef
  expect(ListaUsuario).toHaveLength(2); // espero que tenha o tamanho de 2 itens da lista
});


// eslint-disable-next-line no-undef
test('Pegar retorno da lista.', () => {
  render(<Tela />);
  // eslint-disable-next-line no-undef
  const LinkUsuario = screen.queryByText('lik'); // pegando pelo nome da classe, retorna 1 ou 2
  // eslint-disable-next-line no-undef
  expect(LinkUsuario).not.toBeInTheDocument; // espero que tenha o tamanho de 2 itens da lista
});