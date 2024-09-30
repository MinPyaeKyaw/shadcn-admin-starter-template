import publicApi from "@apis/instances/public-api";

export function getAllProduct() {
  return publicApi.get("/products");
}
