import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let options = props.options;
  const priceRef = useRef();
  let data = useCart();
  let foodItem = props.foodItem;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  
  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;
        break;
      }
    }
  
    console.log(food);
    console.log(new Date());
  
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          des: props.foodItem.description,
          img: props.ImgSrc,
        });
      }
  
      // Always show the notification even if the item already exists in the cart
      toast.success(`${props.foodItem.name} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      return;
    }
  
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.ImgSrc,
    });
  
    // Show the notification when adding a new item to the cart
    toast.success(`${props.foodItem.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    // Check if priceRef.current is defined before setting the size
    if (priceRef.current && priceOptions.includes(priceRef.current.value)) {
      setSize(priceRef.current.value);
    } else {
      // Set a default size if priceRef.current.value is not valid
      setSize(priceOptions[0]);
    }
  }, [priceOptions]);
  let finalPrice = qty * parseInt(options[size]);
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "20rem", maxHeight: "460px" }}
        >
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text" >Made with love using Indian Masalas</p>   
            <div className="container w-100 rounded">
              <select
                className="m-2 h-100  bg-danger rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100  bg-danger rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-7"> ₹{finalPrice}/-</div>
              <hr></hr>
              <div
                className="btn btn-success justify-center ms-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
