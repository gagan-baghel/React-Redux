import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProductToCart,
  removeProductFromCart,
} from "../redux/actions/productAction";

const CartElements = ({change}) => {
  const dispatch = useDispatch();
  const cartlist = useSelector((state) => state?.cartProducts).sort();
  const increaseQuantity = (index) => {
    cartlist[index].quantity++;
    dispatch(editProductToCart(cartlist[index]));

  };
  const decreaseQuantity = (index) => {
    if (cartlist[index].quantity > 0)
      dispatch(
        editProductToCart({
          ...cartlist[index],
          quantity: cartlist[index].quantity - 1,
        })
      );
  };


  const removeFromList = (index) => {dispatch(removeProductFromCart(index));

}

  const cartList = cartlist.map((item, i) => {
    return (
      <div
        key={item.id}
        className="flex sm:flex-row flex-col items-center hover:bg-gray-100  md:px-6 py-5 space-y-3"
      >
        <div className="flex sm:w-2/5">
          <div className="w-20">
            <img className="h-24" src={item.image} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow ">
            <span className="font-bold text-sm">{item.title}</span>
            <span className="text-red-500 text-xs">{item?.category}</span>
            <a
              onClick={() => {
                removeFromList(i);
              }}
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-between w-1/2 sm:justify-center md:w-1/5">
          <h2 className="font-bold text-sm items-center flex sm:hidden px-4 ">
            QUANTITY
          </h2>
          <div  className="flex justify-center items-center" onClick={() => {
              decreaseQuantity(i);
            }}>
          <svg
            className="fill-current text-gray-600 w-3"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg></div>
          <div
            className="mx-2 border text-center w-8"
          >{item?.quantity}</div>

          <div className="flex justify-center items-center" onClick={() => {
              increaseQuantity(i);
            }}>
          <svg
            
            className="fill-current text-gray-600 w-3 "
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg></div>
        </div>
        <div className="flex justify-between md:justify-center w-1/2 sm:w-1/5">
          <h2 className="font-bold text-sm items-center flex sm:hidden px-4 ">
            PRICE
          </h2>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${item?.price}
          </span>
        </div>
        <div className="flex justify-between md:justify-center w-1/2 sm:w-1/5">
          <h2 className="font-bold text-sm items-center flex sm:hidden px-4 ">
            TOTAL PRICE
          </h2>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${Math.trunc(item?.price * item?.quantity*100)/100 }
          </span>
        </div>
      </div>
    );
  });

  return <>
  {cartList}
  </>;
};

export default CartElements;
