import React from 'react'

const Offers = () => {
  return (
	<section className="flex justify-center bg-gray-800">
	<div className="py-24 px-10  flex-col text-center">
	  <div>
		<h1 className="font-bold lg:text-5xl md:text-5xl sm:text-4xl text-3xl text-white">
		  Get 25% off during our one-time sale
		</h1>
		<p className="text-white lg:text-xl md:text-xl text-noraml py-5 ">
		  Most of our products are limited releases that won't come <br />{' '}
		  back. Get your favorite items while they're in stock.
		</p>
	  </div>
	  <div className="w-[100%] flex justify-center">
		<button className="text-sm lg:text-xl md:text-xl sm:text-noraml w-[40%] bg-[#121827] font-semibold text-[#d5cfcf] py-2 px-5">
		  Get Offers
		</button>
	  </div>
	</div>
  </section>
  )
}

export default Offers