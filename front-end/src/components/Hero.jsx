import React, { useState } from 'react'

const Hero = () => {
  const [activeImage, setImage] = useState(0)
  const images = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1600091106710-7be582d40984?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]
  const nextSlide = () => {
    setImage(activeImage === images.length - 1 ? 0 : activeImage + 1)
  }
  const prevSlide = () => {
    setImage(activeImage === 0 ? images.length - 1 : activeImage - 1)
  }
  return (
    <section className=" w-[100%] relative h-[500px] overflow-hidden">
      <div className="ml-5 left-0 sm:top-52 absolute bg-white p-2 rounded-full">
        <p onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </p>
      </div>
      <div className="absolute mr-5 lg:top-50 sm:top-52 right-10 bg-white p-2 rounded-full">
        <p onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </p>
      </div>

      {images.map((blog, ind) => (
        <div
          className={`
		  ind === activeImage ? 'currentSlide active' : 'currentSlide'  `}
          key={blog.id}
        >
          {ind === activeImage && (
            <div className="flex gap-5">
              <div className="col md:w-[100%] sm:w-[100%]  overflow-hidden ">
                <img
                  className=" w-[100%] object-cover object-center"
                  src={blog.image}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default Hero
