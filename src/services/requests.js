import axios from "axios";

const Base_URL = "https://metashoes.herokuapp.com";

async function getAllProducts() {
  const promise = await axios.get(`${Base_URL}/produto`);
  return promise;
}

async function especifyProduct(id) {
  const promise = await axios.get(`${Base_URL}/produto/${id}`);
  return promise;
}

async function addProductToCar(body, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.post(`${Base_URL}/market`, body, config);
  return promise;
}

async function removeProductFromCar(id, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.delete(`${Base_URL}/market/${id}`, config);
  return promise;
}

async function getProductFromCar(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.get(`${Base_URL}/market`, config);
  return promise;
}

export {
  addProductToCar,
  removeProductFromCar,
  getProductFromCar,
  especifyProduct,
  getAllProducts,
};
