import React from 'react'
import { ProductList } from './ProductList'

export const Products = () => {
    var pName = "iphone 15"
    var pprice = 1500
    
    var prod = {
        name:"ipad mini",
        price:900
    }
  return (
    <div>
        <h1>PRODUCTS COMPONENT</h1>
        {/* parent child */}
        <ProductList name ={pName} price = {pprice} prod ={prod}></ProductList>
    </div>
  )
}
