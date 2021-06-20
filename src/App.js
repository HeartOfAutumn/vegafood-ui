import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { Layout } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="mainLayout">
        <AntHeader>
          <Header />
        </AntHeader>
        <AntContent>
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
        </AntContent>
        <AntFooter>
          <Footer />
        </AntFooter>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
