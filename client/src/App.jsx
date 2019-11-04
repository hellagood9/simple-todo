// NOTE: Responsable de setup y configraciones globales
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import Home from './views/Home';

// TODO: De momento instanciamos Home directamente
// pero App es el punto de partida para React Router
// Importaremos los componentes tipo View y los asociaremos a una ruta
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
  
);
export default App;
