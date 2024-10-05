import publicApi from "@apis/instances/public-api";

export function getAllProductCategories() {
  return publicApi.get("/products/categories");
}
