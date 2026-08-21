import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('root');

// Prerendered pages ship real markup: adopt it instead of throwing it away,
// so the first paint is instant and no content flashes.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
