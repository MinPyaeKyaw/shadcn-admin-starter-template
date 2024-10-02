import publicApi from "@apis/instances/public-api";

export function getAllProduct(filters?: Record<string, string | number>) {
  return publicApi.get("/products", {
    params: filters
  });
}
