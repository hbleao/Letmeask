import { BrowserRouter } from 'react-router-dom';

import './styles/global.scss';

import { AuthProvider } from './contexts/authContext';

import { Routes } from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
