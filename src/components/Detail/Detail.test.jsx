import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacterByName } from '../../services/xFilesApi';
import Detail from './Detail';

jest.mock('../../services/xFilesApi');

describe('Detail component', () => {
  it.skip('display a character to detail page after load', () => {
    getCharacterByName.mockResolvedValue({
      name: 'Test Testerson',
      status: 'Meh',
      occupation: 'Crushing it full time',
      image: 'http://www.placecage.com/200/200',
      description: 'this is the best test ever written'
    });

    render();

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
