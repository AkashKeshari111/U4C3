import { styled } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from './Product/Product'
import style from './style.module.css'

const Products = () => {


  const [sendInfo,setSendInfo]=useState([])

  useEffect(()=>{
    fetch(` http://localhost:8080/products`)
    .then(res=>res.json())
    .then((data)=>{
        setSendInfo(data)
        console.log(data)
    })
  },[])
  

  return <div  className={style.box}>{sendInfo.map((items)=>(<Product key={items.id} items={items}/>))}</div>;
};

export default Products;
