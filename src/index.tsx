import React from 'react';
import ReactDOM from 'react-dom/client';
import { Screen } from '@/main/screens';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Screen />
  </React.StrictMode>,
);
