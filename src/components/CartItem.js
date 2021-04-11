import React, { Component } from "react";
export default function CartItem({item}) {
  const { id, type, img, origin } = item;

  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-4">
        <img
          src={img}
          style={{ width: "10rem", heigth: "10rem" }}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-10 mx-auto col-lg-4 ">
       <strong> <span className="d-lg-none" >Tên :</span> {type}</strong>
      </div>
      <div className="col-10 mx-auto col-lg-4 ">
        <strong>
          <span className="d-lg-none">Xuất xứ :</span> {origin}
        </strong>
      </div>
    </div>
  );
}