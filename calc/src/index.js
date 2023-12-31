import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResultProvider from './Context/ResultProvider';
import { DarkModeProvider } from './Context/DarkModeContext';
import HistoryProvider from './Context/HistoryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <HistoryProvider>

        <ResultProvider>
          <App />
        </ResultProvider>
      </HistoryProvider>
    </DarkModeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
