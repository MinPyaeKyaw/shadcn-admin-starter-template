import { useQuery } from "@tanstack/react-query";
import { productKeys } from "./keys";
import { getAllProductCategories } from "@apis/services/category";

export function useGetAllProductCategories() {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: () => getAllProductCategories(),
    select: (data) =>
      data.data.map((d: Record<string, unknown>) => ({
        value: d.slug,
        label: d.name,
      })),
  });
}
