import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacterById } from '../../services/rickAndMorty';
import Detail from './Detail';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/xFilesApi');

describe('Detail component', () => {
  it('display a character to detail page after load', () => {
    getCharacterById.mockResolvedValue({
      name: 'Test Testerson',
      status: 'Meh',
      Species: 'Maybe human',
      image: 'http://www.placecage.com/200/200',
      location: 'mars'
    });

    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Route path="/character/:name" component={Detail} />
      </MemoryRouter>);

    screen.getByText('Loading!');

    return waitFor(() => {
      screen.getByText('Test Testerson');
      screen.getByText('Meh');
      screen.getByText('Crushing it full time');
      screen.getByAltText('Test Testerson');
      screen.getByText('this is the best test ever written');
    });
  });
});
