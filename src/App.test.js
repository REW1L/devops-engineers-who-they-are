import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders landing page with title', () => {
  render(<App />);
  const titleElement = screen.getByText(/DevOps Engineers: Who Are They?/i);
  expect(titleElement).toBeInTheDocument();
});

test('initially hides the YouTube video', () => {
  render(<App />);
  const youtubeContainer = screen.queryByTitle('YouTube video player');
  expect(youtubeContainer).not.toBeInTheDocument();
});

test('shows the YouTube video after clicking "Watch now"', () => {
  render(<App />);
  const button = screen.getByText(/Watch now/i);
  fireEvent.click(button);
  const youtubeContainer = screen.getByTitle('YouTube video player');
  expect(youtubeContainer).toBeInTheDocument();
  expect(button).not.toBeInTheDocument();
});

