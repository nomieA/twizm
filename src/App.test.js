import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input placeholder', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('请输入用户名');
  expect(input).toBeInTheDocument();
});
