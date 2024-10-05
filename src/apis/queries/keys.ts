export const productKeys = {
  all: ["product"] as const,
  detail: (id: string) => [...productKeys.all, id] as const,
  filters: (filters: Record<string, string | number>) => [...productKeys.all, ...Object.values(filters)] as const,
};

export const categoryKeys = {
  all: ["category"] as const,
  detail: (id: string) => [...categoryKeys.all, id] as const,
  filters: (filters: Record<string, string | number>) => [...categoryKeys.all, ...Object.values(filters)] as const,
};
