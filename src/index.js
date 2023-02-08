import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navheader from './components/header/Navheader';
import PageTnx from './components/help/PageTnx';
import PageEmail from './components/help/PageEmail';
import SendMoney from './components/help/SendMoney';
import SendingMoney from './components/help/SendingMoney';
import HomePage from './components/help/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navheader />,
  },
  {
    path: "/homepage",
    element: <HomePage />
  },
  {
    path: "/pg1",
    element: <div>Hello Palash</div>
  },
  {
    path: "/sndingmoney",
    element: <SendingMoney />
  },
  {
    path: "/sndmoney",
    element: <SendMoney />
  },
  {
    path: "/pgtnx",
    element: <PageTnx />
  },
  {
    path: "/pgemail",
    element: <PageEmail />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
