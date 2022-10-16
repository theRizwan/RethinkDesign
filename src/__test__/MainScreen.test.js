import { render, screen } from '@testing-library/react';
import MainScreen from '../screens/MainScreen/MainScreen.js';


describe('Test Cases for Main Screen', () => {
  test('renders the page', () => {
    render(<MainScreen />);
    expect(screen.getByText("Rethink your living & renting")).toBeInTheDocument();
  });
  test('Seach Button should be Present', () => {
    render(<MainScreen />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
