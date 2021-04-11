import React, { Component } from "react";
import { CatConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default function Details(){
  return (
    <CatConsumer>
      {value => {
        const {
          id,
          origin,
          img,
          info,
          price,
          type,
          inCart
        } = value.detailCat;
        console.log(value.detailCat);
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{type}</h1>
              </div>
            </div>
            {/* end of title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="" />
              </div>
              {/* cat info */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>Cat's Name : {type}</h1>
                <h4 className="text-type text-uppercase text-muted mt-3 mb-2">
                  Origin : <span className="text-uppercase">{origin}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    Price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Information:
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>Back to cat list</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.handleDetail(id);
                    }}
                  >
                    {inCart ? "Added in your favorite list" : "Add to your favorite list"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </CatConsumer>
  );
}
