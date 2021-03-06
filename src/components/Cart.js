import React, { Component, useDebugValue,useState } from 'react';
import { storeCats } from "../data";
import styled from "styled-components";
import {CatConsumer} from '../context';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';

function Cart(){
    return (
        <section>
        <CatConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  {/*Cart Column*/}
                  <div className="container-fluid text-center d-none d-lg-block">
                        <div className="row ">
                        <div className="col-10 mx-auto col-lg-4">
                            <strong><p className="text-uppercase">Hình ảnh</p></strong>
                        </div>
                        <div className="col-10 mx-auto col-lg-4">
                           <strong> <p className="text-uppercase">Tên</p></strong>
                        </div>
                        <div className="col-10 mx-auto col-lg-4">
                            <strong><p className="text-uppercase">Xuất Xứ</p></strong>
                        </div>
                        
                        </div>
                    </div>
                  
                  <div className="container-fluid">
                        {cart.map(item => (
                        <CartItem key={item.id} item={item} value={value} />
                        ))}
                  </div>
                 
                </React.Fragment>
              );
            } else {
              return(<h1 className="container-fluid text-center">Danh sách mèo ưa thích trống</h1>)
            }
          }}
        </CatConsumer>
      </section>
    );
}

export default Cart;