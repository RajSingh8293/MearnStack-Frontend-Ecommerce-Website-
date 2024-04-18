import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Hero from '../../components/Hero'
import Offers from '../../components/Offers'
import NewsLetter from '../../components/NewsLetter'

const Home = () => {
  const [data, setData] = useState([])
  const [phonesData, setPhonesData] = useState([])
  const getProducts = async () => {
    try {
      const request = await fetch('http://localhost:4343/api/v1/products', {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      })
      const result = await request.json()
      setData(result.products)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const phoneData = data.filter((item) => item.category === 'Phone')
  const earPhones = data.filter((item) => item.category === 'Earphones')

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className="">
      {/* hero  */}
      <Hero />

      {/* phone products  */}
      <section className="lg:py-24 md:py-24 flex py-16 justify-center px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {phoneData.slice(0, 5).map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Get 25%  */}
      <Offers />

      {/* earphones  */}
      <section className=" lg:py-24 md:py-24 flex py-16 justify-center px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {earPhones.slice(0, 5).map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Newsletter  */}
      <NewsLetter />
    </section>
  )
}

export default Home
