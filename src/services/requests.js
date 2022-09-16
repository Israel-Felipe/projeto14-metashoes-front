import axios from "axios";

const Base_URL = "http://localhost:5000";

async function addProductToCar(body, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const promise = await axios.post(`${Base_URL}/produto`, body, config);
  return promise;
}

export { addProductToCar };
