import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import store from './redux/store'; // Ensure you have the store properly configured and imported
import { PropertyProvider } from './context/propertycontext'; // Import PropertyProvider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <GoogleOAuthProvider clientId="YOUR_ACTUAL_GOOGLE_CLIENT_ID">
        <PropertyProvider>
          <App />
        </PropertyProvider>
      </GoogleOAuthProvider>
    </Router>
  </Provider>
);
