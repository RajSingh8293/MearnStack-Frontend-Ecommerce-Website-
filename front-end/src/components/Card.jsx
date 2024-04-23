import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCart } from '../redux/slices/cartSlice'

const Card = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="p-2 block max-w-sm px-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-center">
        <img className="h-[200px]" src={item.image} alt="image" />
      </div>
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-semibold text-gray-700 dark:text-gray-400">
          ${item.price}
        </p>
      </div>
      <div>
        <NavLink to={`/product-details/${item._id}`}>
          <p>{item.title.slice(0, 30)}</p>
        </NavLink>
      </div>
      <div className="w-[100%] mt-3 bg-black ">
        <button
          className="w-[100%] py-2 hover:bg-red-600   text-white"
          onClick={() => dispatch(addToCart(item))}
        >
          Add +
        </button>
      </div>
    </div>
  )
}

export default Card
