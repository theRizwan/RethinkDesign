import { render, screen } from '@testing-library/react';
import { ALL_RIGHTS, YOUR_LOGO } from '../constants/constants.js';
import FourthScreen from '../screens/FourthScreen.js/FourthScreen.js';

describe('Test Cases for Fourth Screen', () => {
  test('renders the page', () => {
    render(<FourthScreen />);
    expect(screen.getByText(YOUR_LOGO)).toBeInTheDocument();
  });
  test('ALL RIGHTS Reserved Message should be Present', () => {
    render(<FourthScreen />);
    expect(screen.getByText(ALL_RIGHTS)).toBeInTheDocument();
  });
}); 