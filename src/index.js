import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './root';
import Header from './components/header';
import Category from './components/category';
import Products from './components/products';
import Latestproducts from './components/latestproducts';
import Offers from './components/offers';
import Testimonial from './components/testimonial';
import Brands from './components/brands';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Root></Root>
    <Category></Category>
    <Products></Products>
    <Latestproducts></Latestproducts>
    <Offers></Offers>
    <Testimonial></Testimonial>
    <Brands></Brands>
    <Footer></Footer>
    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
