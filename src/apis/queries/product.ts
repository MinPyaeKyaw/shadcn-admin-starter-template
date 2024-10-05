import { getAllProducts } from "@apis/services/product";
import { useQuery } from "@tanstack/react-query";
import { productKeys } from "./keys";

export function useGetAllProducts(filters: Record<string, string | number>) {
  return useQuery({ queryKey: productKeys.filters(filters), queryFn: () => getAllProducts(filters) });
}
