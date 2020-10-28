import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders character component', () => {
    const { asFragment } = render(<Character 
      name="Test Testerson"
      status="Meh"
      occupation="Crushing it full time"
      image="http://www.placecage.com/200/200"
      description="this is the best test ever written"
    />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
