import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello Monorepo', () => {
	const { getByText } = render(<App />);
	const helloElement = getByText(/Hello Monorepo/i);
	expect(helloElement).toBeInTheDocument();
});
