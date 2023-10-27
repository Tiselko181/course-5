import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './layout/Home';
import Movies from './layout/Movies';
import Tv from './layout/Tv';
import ChechoutPage from './pages/CheckoutPage';
import Checkout from './layout/Checkout';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                // path: '/',
                index: true, //замість повторювання батьківського шляху
                // element: <Home />,
                laxy: () => import('./layout/Home.jsx')
            },
            {
                path: '/Movies',
                element: <Movies />
            },
            {
                path: '/tv',
                // element: <Tv />
                element: <Navigate to='/Movies' /> //redirect
            },
        ]
    },
    {
        path: '/checkout',
        element: <ChechoutPage />,
        children: [
            {
                path: 'checkout',
                element: <Checkout />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <BrowserRouter> */}
        {/* <App /> */}
        {/* </BrowserRouter> */}
    </React.StrictMode>,
);
