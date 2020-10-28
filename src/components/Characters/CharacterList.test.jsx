import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/xFilesApi';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/xFilesApi.js');

describe('CharacterList component', () => {
  it('displays the list of Characters', async() => {
    getCharacters.mockResolvedValue([
      {
        name: 'Test Testerson',
        status: 'Meh',
        occupation: 'Crushing it full time',
        image: 'http://www.placecage.com/200/200',
        description: 'this is the best test ever written'
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
