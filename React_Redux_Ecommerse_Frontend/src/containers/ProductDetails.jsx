import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeProduct,
  addProductToCart
} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [booleanForAdded, setbooleanForAdded] = useState(true);
  const fetchProductDetails = async () => {
  const productData = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("ERR", err));
    dispatch(selectedProduct(productData.data));
  };
  const addToCart = () => {

    if(booleanForAdded){dispatch(addProductToCart({ ...product, quantity: 1 }));
    toast(`🎉   Added To Cart`);}
    setbooleanForAdded(false)
  };

  useEffect(() => {
    fetchProductDetails();
    return () => {
      dispatch(removeProduct());
    };
  }, []);
  const cart = useSelector((state) => state.cartProducts);

  return Object.keys(product).length > 0 ? (
    <section className="text-gray-700 overflow-hidden bg-white min-h-screen">
      <Link to={"/cart"}>
        <button className=" relative max-w-full sm:w-auto sm:absolute sm:top-[30px] sm:right-[50px] p-5 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white my-8 mx-8">
          {cart.length ? (
            <span className="bg-[red] text-[white] h-6 w-6 rounded-full absolute -top-3 -right-2 ">
              {cart.length}
            </span>
          ) : (
            <></>
          )}
          <i className="fa-sharp fa-solid fa-cart-shopping text-3xl"></i>
        </button>
      </Link>
      <div className=" container px-5 py-4 sm:mt-24 mb-12 mt-6 mx-auto border rounded">
        <div className=" mx-auto my-auto flex flex-wrap sm:flex-row flex-col items-center">
          <div className="min-h-60 h-96 sm:w-1/2 p-4 flex items-center justify-center">
            <img
              alt="ecommerce"
              className="object-contain object-center rounded border border-gray-200 h-full "
              src={product.image}
            />
          </div>
          <div className="sm:w-1/2 my-6 px-3 sm:py-8">
            <h2 className="text-sm title-font text-gray-700 tracking-widest py-1 font-semibold">
              ⭐️
              <span className="px-2 text-white py-1 bg-[#FF0000] rounded">
                Rating
              </span>
              {'  '}- {product?.rating?.rate}
            </h2>
            <h1 className="text-gray-900 text-4xl title-font font-bold mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
            </div>
            <p className="leading-relaxed pl-6">{product.description}</p>
            <div className="flex border-t border-gray-300 mt-5 pt-5">
              <button
                type="submit"
                onClick={addToCart}
                className="bg-gray-800 duration-200 focus:outline-none focus:shadow-outline font-medium h-12 hover:bg-gray-900 inline-flex items-center justify-center px-6 text-white tracking-wide transition w-full"
              >
                {booleanForAdded? "Add to Cart":"Product Added "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        hideProgressBar={false}
      />
    </section>
  ) : (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" w-12 h-12 rounded-full animate-spin border-4 border-solid border-gray-900 border-t-transparent"></div>
    </div>
  );
};

export default ProductDetails;
