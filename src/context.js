import React, { Component,useEffect,useState } from "react";
import { storeCats, detailCat_Item } from "./data";
const CatContext = React.createContext();

function CatProvider({children}) {

  const [cats,setCats] = useState([]);
  const [detailCat,setDetailCat] = useState(detailCat_Item);
  const [cart,setCart] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [modalCat,setModalCat] = useState(detailCat_Item);

  useEffect(()=>{
    setCatList();
  },[])
  const setCatList = ()=>{
    let list_cat = [];
    storeCats.forEach(item=>{
      const singleCat = {...item}
      list_cat =[...list_cat,singleCat];
    });
    setCats(list_cat);
  }
  function getItem(id){
      const cat_item = cats.find(item=>item.id===id);
      return cat_item;
  }
  function handleDetail(id){
    const cat_item = getItem(id);
    setDetailCat(cat_item);

  }
  function addToCart(id){
    const tempCats = [...cats];
    const index = tempCats.indexOf(getItem(id));
    const cat_item = tempCats[index];
    cat_item.count = 1;
    cat_item.inCart = true;
    const price = cat_item.price;
    cat_item.total = price;
    setCats([...tempCats]);
    setCart([...cart,cat_item]);
    setDetailCat({cat_item});
  }
  function openModal(id){
    const cat_item = getItem(id);
    setModalCat(cat_item);
    setModalOpen(true);
  }
  const closeModal = () =>{
    setModalOpen(false);
  }

  return (
    <CatContext.Provider
      value={{
        cats:cats,
        detailCat:detailCat,
        cart:cart,
        modalOpen:modalOpen,
        modalCat:modalCat,
        handleDetail:handleDetail,
        addToCart:addToCart,
        openModal:openModal,
        closeModal:closeModal
      }}
    >
      {children}
    </CatContext.Provider>
  );
}

const CatConsumer = CatContext.Consumer;

export { CatProvider, CatConsumer};
