import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

test('Verifica se a Pokedéx é renderizada no caminho "/" ', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={ ['/'] }>
      <App />
    </MemoryRouter>,
  );

  expect(getByText('Encountered pokémons')).toBeInTheDocument();
});

test('Testando se há um conjunto fixo de links de navegação', () => {
  const { queryAllByRole } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const links = queryAllByRole('link');
  expect(links[0].text).toBe('Home');
  expect(links[1].text).toBe('About');
  expect(links[2].text).toBe('Favorite Pokémons');
  expect(links[0].pathname).toBe('/');
  expect(links[1].pathname).toBe('/about');
  expect(links[2].pathname).toBe('/favorites');
});
