import { render, screen } from '@testing-library/react';
import FourthScreen from '../screens/FourthScreen.js/FourthScreen.js';

describe('Test Cases for Main Screen', () => {
  test('renders the page', () => {
    render(<FourthScreen />);
    expect(screen.getByText("Your Logo")).toBeInTheDocument();
  });
  test('Seach Button should be Present', () => {
    render(<FourthScreen />);
    expect(screen.getByText("© 2021 Company Name All rights reserved")).toBeInTheDocument();
  });
}); 