import React from 'react';
import { render } from '@testing-library/react';
import Signup from './Signup';

test('renders app without crashing', () => {
  const { getByTestId } = render(<Signup />);
  const SignupDiv = getByTestId('Signup');
  expect(SignupDiv).toBeInTheDocument();
});
