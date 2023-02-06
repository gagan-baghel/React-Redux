import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProduct } from "../redux/actions/productAction";
import { ToastContainer,toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductList = () => {
  const cart = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("ERR", err));
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="bg-[#E5E5E5]">
      <Link to={"/cart"}>
        <button className=" relative max-w-full sm:w-auto sm:absolute sm:top-[30px] sm:right-[50px] p-5 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white my-8 mx-8">
          {cart.length ? (
            <span className="bg-[red]  text-[white] h-6 w-6 rounded-full absolute -top-3 -right-2 ">
              {cart.length}
            </span>
          ) : (
            <></>
          )}
          <i className="fa-sharp fa-solid fa-cart-shopping text-3xl"></i>
        </button>
      </Link>
      <ProductComponent />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        hideProgressBar={false}
      />
    </div>
  );
};

export default ProductList;
