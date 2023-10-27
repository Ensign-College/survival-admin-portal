import '../app/globals.css';
import { AppProps } from 'next/app';
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {

    return <Component {...pageProps} />;
    
}

export default MyApp;
