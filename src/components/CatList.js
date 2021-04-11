import React, { Component, useDebugValue,useState } from 'react';
import CatItem from "./CatItem";
import { storeProducts } from "../data";
import styled from "styled-components";
import {CatConsumer} from '../context';
import { Link } from 'react-router-dom';


function CatList(){
    return (
    <React.Fragment>
        <CatWrapper className="py-5">
            <div className="container">
                <div className='row'>
                    <CatConsumer>
                    {value =>{
                        return value.cats.map(product=>{
                        return <CatItem key={product.id} product={product}/>
                        })
                    }}
                    </CatConsumer>
                </div>
            </div>
        </CatWrapper>
    </React.Fragment>
    )
}
const CatWrapper = styled.section``;
export default CatList;
