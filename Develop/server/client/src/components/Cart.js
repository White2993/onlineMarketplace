import React, { useEffect, useState } from 'react';
import API from '../utils/API'
import Navigation from './Navigation'

export default function Cart() {
  const [cart, setCart] = useState('');

  //useEffect(() => {callProducts}, [])

  function callProducts() {
    API.getProducts()
      .then(res => setCart(res.data))
      .catch(err => console.log(err))
  }

  function productDelete(data) {
    API.deleteProduct(data)
      .then(res => callProducts())
      .catch(err => console.log(err))
  }

  function cartProducts(product) {
    return (
    <tr key={product.sku}>
      <td>{product.name}</td>
      <td>{product.salePrice}</td>
      <td><img src={product.thumbnailImage} alt="photo" /></td>
      <td>
        <button onClick={(e) => productDelete(e)} type="submit" >Delete</button>
      </td>
    </tr>
    )
  }

  return (
  <div> 
    <Navigation />
    <h1>Your Cart</h1>
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Qty</th>
            <th>&nbsp;</th>
          </tr>
        </tbody>
        {cart.map(cartProducts)}
      </table>
    </div>
  </div> 
  )
}