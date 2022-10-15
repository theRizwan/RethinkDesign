import { render, screen } from '@testing-library/react';
import ThirdScreen from '../screens/ThirdScreen/ThirdScreen.js';

describe('Test Cases for Main Screen', () => {
  test('renders the page', () => {
    render(<ThirdScreen />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });
  test('Seach Button should be Present', () => {
    render(<ThirdScreen />);
    expect(screen.getByText("Allow us to tell you a short story...")).toBeInTheDocument();
  });
}); 