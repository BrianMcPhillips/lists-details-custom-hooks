import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacterById } from '../../services/rickAndMorty';
import Detail from './Detail';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/rickAndMorty.js');

describe('Detail component', () => {
  it('display a character to detail page after load', () => {
    getCharacterById.mockResolvedValue({
      name: 'Test Testerson',
      status: 'Meh',
      species: 'Maybe human',
      image: 'http://www.placecage.com/200/200',
      location: 'mars'
    });

    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Route path="/character/:id" component={Detail} />
      </MemoryRouter>);

    screen.getByText('Loading!');

    return waitFor(() => {
      screen.getByText('Test Testerson');
      screen.getByText('Status: Meh');
      screen.getByText('Species: Maybe human');
      screen.getByAltText('Test Testerson');
      screen.getByText('Location: mars');
    });
  });
});
