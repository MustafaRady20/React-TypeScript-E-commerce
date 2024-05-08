
import ReactDOM from 'react-dom/client'
import "./main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRouter';

// Redux 
import { store, presistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={presistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
)
