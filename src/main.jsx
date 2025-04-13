import React from 'react';
import ReactDOM from 'react-dom/client';
import CinephileChecklist from './CinephileChecklist';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CinephileChecklist />
  </React.StrictMode>
);

// Registro del service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg.scope))
      .catch(err => console.log('Fallo en el registro:', err));
  });
}
