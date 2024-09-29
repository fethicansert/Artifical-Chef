import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = '853209858472-h6etm5f9v014de9nqmrs3b4docjmtd1j.apps.googleusercontent.com';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={'853209858472-h6etm5f9v014de9nqmrs3b4docjmtd1j.apps.googleusercontent.com'}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>

);

