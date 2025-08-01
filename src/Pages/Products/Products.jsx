import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import Flowmeter from './Flowmeter';
import './Products.css';
import Levelmeter from './Levelmeter';
import Pressuremeter from './Pressuremeter';
import Temperature from './Temperature';
import Analysers from './Analysers';
import Air from './Air';
import Water from './Water';


const Products = () => {

  return (
    <div>
      <h1 className="text-center mb-5 pt-5" >Our Products</h1>
      <Flowmeter />
      <Levelmeter />
      <Pressuremeter />
      <Temperature />
      <Analysers />
      <Air />
      <Water />
    </div>

  );
};

export default Products;
