import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input and button', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('请输入用户名');
  expect(input).toBeInTheDocument();
  const button = screen.getByRole('button', { name: '🚽' });
  expect(button).toBeInTheDocument();
});
