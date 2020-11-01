import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders character component', () => {
    const { asFragment } = render(<Character 
      name="Test Testerson"
      status="Meh"
      species="Maybe human"
      image="http://www.placecage.com/200/200"
      location="Mars"
    />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
