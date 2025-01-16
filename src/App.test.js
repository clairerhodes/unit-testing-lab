import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a to do app', () => {
  const app = render(<App />)
});
