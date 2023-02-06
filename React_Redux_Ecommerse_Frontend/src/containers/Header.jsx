import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cart=useSelector(state=>state.cartProducts)

    return (
        <div className='bg-[#E5E5E5]'>
            <div className="flex flex-row items-center justify-center">
                <img className=" h-24 rounded-sm mix-blend-multiply" src="../../store.jpeg" alt="" />
            </div>
        </div>
    );
}

export default Header;
