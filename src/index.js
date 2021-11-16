import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {TolgeeProvider} from "@tolgee/react";

import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <TolgeeProvider
        staticData={{
          en: () => import('./i18n/en.json'),
          ru: () => import('./i18n/ru.json'),
        }}
        loadingFallback={<>Loading...</>}
    >
      <App />
    </TolgeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
