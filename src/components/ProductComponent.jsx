import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {
    const dispatch = useDispatch();
    
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "iphone 16",
      price: 1000,
      description: "iphone 16 is the latest phone from apple",
    },
    {
      id: 2,
      name: "iphone 15",
      price: 900,
      description: "iphone 15 is the latest phone from apple",
    },
  ]);
  return (
    <div>
      <h1>ProductComponent</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <div className="card-header">{product.name}</div>
              <div className="card-body">
                <p>{product.price}</p>
                <p>{product.description}</p>
              </div>
              <div>
                <button onClick={()=>{dispatch(addToCart(product))}} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
