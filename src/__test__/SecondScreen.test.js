import { render, screen } from '@testing-library/react';
import SecondScreen from '../screens/SecondScreen/SecondScreen.js';

describe('Test Cases for Second Screen', () => {
  test('renders the page', () => {
    render(<SecondScreen />);
    expect(screen.getByText("Explore")).toBeInTheDocument();
  });
  test('Paragraph Button should be Present', () => {
    render(<SecondScreen />);
    expect(screen.getByText("From one guests rooms to penthouses with pools and gardens")).toBeInTheDocument();
  });
}); 