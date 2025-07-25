import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Utils/DarkMode';
import CartItems from './Utils/CartContext';
import {BrowserRouter} from "react-router";
import { Provider } from 'react-redux';
import reduxWishlist from './store/Redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxWishlist}>
    <BrowserRouter>
        <ThemeProvider>
          <CartItems>
            <React.StrictMode>
              <App/>
            </React.StrictMode>
          </CartItems>  
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
