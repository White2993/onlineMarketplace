import axios from "axios";

function getProducts() {
  return axios.get("/api/products");
}

function createProduct(data) {
  return axios.post("/api/products", data)
}

function deleteProduct(id) {
  return axios.delete("/api/products", id)
}

function updateProduct(id, value) {
  return axios.put("/api/products", id, value)
}

function search(searchTerm) {
  return axios.get(`/api/products?q=${searchTerm}`);
}

export default { getProducts, createProduct, deleteProduct, updateProduct, search }
