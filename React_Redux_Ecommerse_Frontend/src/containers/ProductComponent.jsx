import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector( state => state.allProducts?.products)
    const renderList = products?.map((product)=>{
        return (
            <div key={product?.id} className="m-6 mt-12 w-[250px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <Link to={`product/${product.id}`}>
            <img src={product.image} loading="lazt" alt="Product" className="h-[220px] w-[250px] object-contain rounded-t-xl mt-2" />
            <div className="px-4 py-3 w-[250px]">
                <span className="text-gray-400 mr-3 uppercase text-xs">{product.category}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3"> <span className="bg-[#8df18d] rounded px-2 py-1"> ${product.price} </span></p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">${Math.trunc(product.price*1.75)} </p>
                    </del>
                    <div className="ml-auto hover:rounded p-2 hover:bg-black hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        )
    })
    return (
        <div className="flex flex-wrap p-4 sm:mx-24 sm:justify-between justify-center ">
            {renderList}
        </div>
    );
}

export default ProductComponent;
 