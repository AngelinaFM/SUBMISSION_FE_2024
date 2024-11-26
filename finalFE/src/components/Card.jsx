import React, { useEffect, useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Card = ({ img, Harga, Tittle, category, onAddToCart }) => {

  const [data, setData] = useState([])
  const handleAddToCart = (id) => {
    console.log(id)
  }
  return (
    <div className="bg-white rounded-md w-40 md:w-[280px] h-60 md:h-80 flex flex-col justify-between border m-2 shadow-md">
      <img
        src={img}
        alt=""
        className="object-contain h-1/2 md:h-2/3 block rounded-md"
      />
      <div className="relative h-1/2 md:h-1/3 w-full rounded-md pl-2">
        <h3 className="truncate font-bold text-black">{Tittle}</h3>
        <h3 className="truncate font-bold text-black">{category}</h3>
        <p className="absolute bottom-2 right-0 w-16 text-secondary font-bold">
          ${Harga}
        </p>
        <div className="flex items-center justify-between mt-2">
          <button
            className="bg-orange-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
          <Link to="/Keranjang">
            <ShoppingCart
              size={32}
              className="cursor-pointer hover:text-black"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
