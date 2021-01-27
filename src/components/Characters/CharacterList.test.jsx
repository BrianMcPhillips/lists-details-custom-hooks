import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/rickAndMorty';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/rickAndMorty.js');

describe('CharacterList component', () => {
  it('displays the list of Characters', async() => {
    getCharacters.mockResolvedValue([
      {
        name: 'Test Testerson',
        status: 'Meh',
        species: 'maybe human',
        image: 'http://www.placecage.com/200/200',
        location: 'mars'
      },
      {
        name: 'Test Testerson jr',
        status: 'Meh',
        species: 'maybe human',
        image: 'http://www.placecage.com/200/200',
        location: 'mars'
      }
    ]);

    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getByText('Loading!');

    const characterList = await screen.findByTestId('characters');
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
