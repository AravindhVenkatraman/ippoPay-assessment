import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('renders assessment page', () => {
    render(<App />);
    const element = screen.getByText(/Assessment/i);
    expect(element).toBeInTheDocument();
});
