import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from "../components/LoadingBox";
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Card, Row, Col, Container } from "react-bootstrap"

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {


    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <div className='header row center'>
        <img className='large' src="https://images.freekaamaal.com/store_desc_images/1511854212.jpg" alt="" />

      </div>
      {loading ? (
        <LoadingBox>

        </LoadingBox>

      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (


        <div className="row center">

          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>

      )}
      <div className='header row center'>
        <img className='large' src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/A3TA2BFDXYURBV/d1bdcd07-2ddb-4caf-82ab-614f4f0d1165._CR0,15,970,300_PT0_SX970__.jpg" alt="" />

      </div>
    </div>
  );
}   