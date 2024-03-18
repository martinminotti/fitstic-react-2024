import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { MyComponent } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement  //react monta l'applicazione all'interno del div con id root, che deve essere presente nel file index.html
);

//questo nodo renderizza l'applicazione all'interno del div con id root
root.render(
  <React.StrictMode>

    <App />
    {/* <MyComponent /> */}

    
  </React.StrictMode>
);


