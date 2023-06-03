import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './components/HelloWorld';

const container = document.getElementById('root');
const root = container ? createRoot(container) : null;

root?.render(<HelloWorld />);