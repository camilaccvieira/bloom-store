"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList/ProductList';
import ProductCarrousel from '../components/ProductCarrousel/ProductCarrousel';

import Header from '../components/Header/Header';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('list');
  
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredProducts,'filteredProducts',products)

  return (
    <div>
      <Header search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}/>
      <ProductCarrousel />      
      <ProductList products={filteredProducts} view={view} itemsPerPage={itemsPerPage}/>
    </div>
  );
};

export default Home;