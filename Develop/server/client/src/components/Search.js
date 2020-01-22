import React, {useState} from "react";
import API from '../utils/API';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  function productSearch(e) {
    e.preventDefault();
    console.log(searchTerm)
    API.search(searchTerm)
    .then(res => { setProducts(res.data)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  function renderRow(product) {
    return (
    <tr key={product.sku}>
      <td>{product.name}</td>
      <td>{product.salePrice}</td>
      <td><img src={product.thumbnailImage} alt="photo" /></td>
      <td>
        <button onClick={() => {}}>Add to Cart</button>
      </td>
    </tr>
    )
  }

  return (
    <section>
    <form>
      <input id="searchBar" name="searchBar" type="search" onChange={(e) => setSearchTerm(e.target.value)} />
      <label htmlFor="searchBar">Search</label>
      <button type="submit" onClick={(e) => productSearch(e)}>Search</button>
    </form>
    <div className="results">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>&nbsp;</th>
            </tr>
          </tbody>
          {products.map(renderRow)}
        </table>
      </div>
    </section>
  );
}