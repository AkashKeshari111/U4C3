import { Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from './styles.module.css'

const Product = ({items}) => {


  const {count,setCount}=useContext(CartContext)

  const [counta,setCounta]=useState(0)
  // Note: this id should come from api
  const product = { id: 1 };
  return (


    <div key={items.id} className={styles.box1} data-cy={`product-${product.id}`}>

<h3 data-cy="product-name">{items.name}</h3>
      <h6 data-cy="product-description">{items.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>(setCount(count+1))}>Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>(setCounta(counta+1))} >+</button>
        <span data-cy="product-count">
          {
            counta
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{
          if(counta>0){
            setCounta(counta-1)
          }
        }} >-</button>
        <button data-cy="product-remove-cart-item-button"  onClick={()=>(setCount(count-1))}>Remove</button>
      
      </div>
    

     
    
    </div>
    

  );
};

export default Product;
