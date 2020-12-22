import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import App from '../App';
import Data from '../data';

test('Botoes em pokedex funcionamento', () => {
  const history = createMemoryHistory();

  const { queryByText, getByText, queryAllByRole } = render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  const nextPokemon = queryByText('Próximo pokémon');
  expect(nextPokemon.tagName).toBe('BUTTON');
  expect(nextPokemon).toBeInTheDocument();
  fireEvent.click(nextPokemon);
  const newPokemon = getByText('Charmander');
  expect(newPokemon).toBeInTheDocument();
  const ultimoPokemon = Data[Data.length - 1];
  expect(ultimoPokemon.name).toBe('Dragonair');
  fireEvent.click(nextPokemon);
  const firstPokemon = Data[0];
  expect(firstPokemon.name).toBe('Pikachu');
  const allPokemons = queryByText('All');
  expect(allPokemons).toBeInTheDocument();
  expect(allPokemons.tagName).toBe('BUTTON');
  const buttonsType = queryAllByRole('button');
  expect(buttonsType[1].innerHTML).toBe('Electric');
  expect(buttonsType[2].innerHTML).toBe('Fire');
  expect(buttonsType[3].innerHTML).toBe('Bug');
  expect(buttonsType[4].innerHTML).toBe('Poison');
  expect(buttonsType[5].innerHTML).toBe('Psychic');
  expect(buttonsType[6].innerHTML).toBe('Normal');
  expect(buttonsType[7].innerHTML).toBe('Dragon');
  const typePokemon = buttonsType[1];
  fireEvent.click(typePokemon);
});
