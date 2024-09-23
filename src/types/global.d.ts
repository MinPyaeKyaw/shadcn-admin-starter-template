declare global {
  type Lang = "en" | "mm";

  type Theme = "dark" | "light";

  type DataType = { value: string | Record<string, unknown>; label: string };

  type ChartType = "natural" | "linear" | "step";

  type ChartLayout = "horizontal";
}

export {};
