import {
  AreaChartStacked,
  BarChartMultiple,
  PieChartDonutText,
} from "./components";

export function Charts() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <AreaChartStacked />

      <BarChartMultiple />

      <PieChartDonutText />
    </div>
  );
}
