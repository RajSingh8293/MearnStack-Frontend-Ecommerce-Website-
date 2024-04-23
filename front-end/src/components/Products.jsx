import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// get all products
const Products = () => {
  const [data, setData] = useState([])

  const getProducts = async () => {
    try {
      const request = await fetch('http://localhost:4343/api/v1/products', {
        headers: {
          // authorization : JSON.parse(localStorage.getItem('token'))
          // jwt token ends
          // jwt token and with verify authentication start
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
          // jwt token and with verify authentication ends
        },
      })
      const result = await request.json()
      setData(result.products)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  // const getProducts = async () => {
  //   // let result = await fetch('http://localhost:3000/getallproducts')
  //   // jwt starts
  //   let result = await fetch('http://localhost:3000/getallproducts', {
  //     // jwt token starts
  //     headers: {
  //       // authorization : JSON.parse(localStorage.getItem('token'))
  //       // jwt token ends
  //       // jwt token and with verify authentication start
  //       authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
  //       // jwt token and with verify authentication ends
  //     },
  //   })
  //   // jwt ends
  //   let prodata = await result.json()
  //   // console.log(prodata);
  //   setData(prodata)
  //   // console.log(setData(prodata));
  // }
  // console.log(data);

  // delete products

  const deleteProduct = async (id) => {
    // console.log("Deleted");
    let result = await fetch(`http://localhost:3000/product/${id}`, {
      method: 'delete',
      // jwt token and with verify authentication start
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
      // jwt token and with verify authentication ends
    })
    let data = await result.json()
    if (data) {
      alert('Record is deleted')
      getProducts()
    }
  }

  const searchHandle = async (e) => {
    // console.log(e.target.value);
    let key = e.target.value
    // agar key(searchbar me) me value h to ye data dikha de varna else part wala dikha de
    if (key) {
      let data = await fetch(
        `http://localhost:3000/search/${key}`,
        // jwt token and with verify authentication start
        {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem('token'),
            )}`,
          },
          // jwt token and with verify authentication ends
        },
      )
      //data is readstream data so, use json();
      let result = await data.json()
      // console.log(result);
      if (result) {
        setData(result)
      }
    } else {
      getProducts()
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <section className="w-[100%] lg:w-[80%] lg:flex lg:flex-col lg:justify-center lg:tems-center">
        <div className="w-[100%] flex flex-col justify-center items-center gap-5 px-8 py-5">
          <h1 className="text-3xl font-bold"> All Products</h1>
          <div className=" w-[80%]  search border bg-red-400">
            <input
              type="text"
              className="w-[100%] px-2 py-2"
              placeholder="Search here..."
              onChange={searchHandle}
            />
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data?.map((item, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">
                      <img className="h-[60px]" src={item.image} alt="" />{' '}
                    </td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">
                      <button
                        className="btn"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Delete
                      </button>
                      <button className="btn">
                        <Link to={`/update/${item._id}`}>Update</Link>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <h1 className="text-3xl font-semibold text-gray-600">
                    No data found
                  </h1>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Products
