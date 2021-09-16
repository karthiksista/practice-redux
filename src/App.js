import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from './redux/actions/productActions';
import './style.css';

export default function App() {
  const prod = useSelector(state => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const resposnse = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => console.log(error));
    console.log(resposnse.data);
    dispatch(setProducts(resposnse.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('prod', prod);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
