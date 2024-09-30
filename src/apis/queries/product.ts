import { getAllProduct } from "@apis/services/product";
import { useQuery } from "@tanstack/react-query";
import { productKeys } from "./keys";

export function useGetAllProducts() {
  return useQuery({ queryKey: productKeys.all, queryFn: getAllProduct });
}
