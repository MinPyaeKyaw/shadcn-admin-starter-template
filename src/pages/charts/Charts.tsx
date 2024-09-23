import AreaChartAxes from "./components/chart-area-axes";
import AreaChartDefault from "./components/chart-area-default";
import AreaChartGradient from "./components/chart-area-gradient";
import AreaChartIcon from "./components/chart-area-icons";
import AreaChartInteractive from "./components/chart-area-interactive";
import AreaChartLegend from "./components/chart-area-legend";
import AreaChartLinear from "./components/chart-area-linear";
import AreaChartStacked from "./components/chart-area-stacked";
import AreaChartStackedExpand from "./components/chart-area-stacked-expand";
import AreaChartStep from "./components/chart-area-step";
import BarChartActive from "./components/chart-bar-active";
import BarChartDefault from "./components/chart-bar-default";
import BarChartLabelCustom from "./components/chart-bar-label-custom";
import BarChartLabel from "./components/chart-bar-label";
import BarChartHorizontal from "./components/chart-bar-horizontal";
import BarChartMixed from "./components/chart-bar-mixed";
import BarChartMultiple from "./components/chart-bar-multiple";
import BarChartNegative from "./components/chart-bar-negative";
import BarChartStacked from "./components/chart-bar-stacked";
import LineChartDefault from "./components/chart-line-default";
import LineChartDotsColors from "./components/chart-line-dots-colors";
import LineChartDotsCustom from "./components/chart-line-dots-custom";
import LineChartDots from "./components/chart-line-dots";
import LineChartLabelCustom from "./components/chart-line-label-custom";
import LineChartLabel from "./components/chart-line-label";
import LineChartLinear from "./components/chart-line-linear";
import LineChartMultiple from "./components/chart-line-multiple";
import LineChartStep from "./components/chart-line-step";
import PieChartDonutActive from "./components/chart-pie-donut-active";
import PieChartDonutText from "./components/chart-pie-donut-text";
import PieChartDonut from "./components/chart-pie-donut";
import PieChartInteractive from "./components/chart-pie-interactive";
import PieChartLabelCustom from "./components/chart-pie-label-custom";
import PieChartLabelList from "./components/chart-pie-label-list";
import PieChartLabel from "./components/chart-pie-label";
import PieChartLegend from "./components/chart-pie-legend";

export function Charts() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <AreaChartAxes />
      <AreaChartDefault />
      <AreaChartGradient />
      <AreaChartIcon />
      <AreaChartInteractive />
      <AreaChartLegend />
      <AreaChartLinear />
      <AreaChartStackedExpand />
      <AreaChartStacked />
      <AreaChartStep />

      <BarChartActive />
      <BarChartDefault />
      <BarChartHorizontal />
      <BarChartLabelCustom />
      <BarChartLabel />
      <BarChartMixed />
      <BarChartMultiple />
      <BarChartNegative />
      <BarChartStacked />

      <LineChartDefault />
      <LineChartDotsColors />
      <LineChartDotsCustom />
      <LineChartDots />
      <LineChartLabelCustom />
      <LineChartLabel />
      <LineChartLinear />
      <LineChartMultiple />
      <LineChartStep />

      <PieChartDonutActive />
      <PieChartDonutText />
      <PieChartDonut />
      <PieChartInteractive />
      <PieChartLabelCustom />
      <PieChartLabelList />
      <PieChartLabel />
      <PieChartLegend />
    </div>
  );
}
