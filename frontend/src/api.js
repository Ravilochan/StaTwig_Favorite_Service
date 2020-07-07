import axios from "axios";

export const BASE_URL = "http://localhost:9000";
export const id_user = "5d6ede6a0ba62570afcedd3a";
const id = "5d6ede6a0ba62570afcedd3a";

export function getProducts() {
  return axios
    .get(`${BASE_URL}/api/favorites/${id}`)
    .then((response) => response.data);
}

export function removeCartProduct(cart) {
  return fetch(`${BASE_URL}/api/unfav`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  }).then((response) => response.json());
}
