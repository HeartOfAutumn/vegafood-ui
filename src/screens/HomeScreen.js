import Hero from '../components/Hero';
import About from '../components/About';
import Pieces from '../components/Pieces';
import Works from '../components/Works';
import Faq from '../components/Faq';

import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';

import './HomeScreen.css';

function HomeView() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="main home">
      <Hero />
      <About />
      {loading ? <LoadingBox />
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
          :
          <Pieces products={products} />
      }
      <Works />
      <Faq />
    </div>
  );
}

export default HomeView;