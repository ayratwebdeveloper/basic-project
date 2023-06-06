// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import "./components/index.scss";
// import HelloWorld from './components/HelloWorld';

// const container = document.getElementById('root');
// const root = container ? createRoot(container) : null;

// root?.render(<HelloWorld />);

import React from "react";
import { createRoot } from "react-dom/client";
import Index from "./components/Index";


const container = document.getElementById("root");
const root = createRoot(container);


root.render(<Index />);