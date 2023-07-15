import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

//const PUBLIC_URL = 'goit-react-hw-08-phonebook';

const PUBLIC_URL = 'https://damiandawidowski.github.io/goit-react-hw-08-phonebook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </PersistGate> 
    </Provider>
  </React.StrictMode>
);
