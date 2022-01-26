import { render, screen } from '@testing-library/react';
import About from "./componets/About";

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/We Want to Add the Sprinkles to Your Day/i);
  expect(linkElement).toBeInTheDocument();
});
