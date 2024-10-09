import AreaChartAxes from "@components/charts/chart-area-axes";
import AreaChartDefault from "@components/charts/chart-area-default";
import AreaChartGradient from "@components/charts/chart-area-gradient";
import AreaChartIcon from "@components/charts/chart-area-icons";
// import AreaChartInteractive from "@components/charts/chart-area-interactive";
import AreaChartLegend from "@components/charts/chart-area-legend";
import AreaChartLinear from "@components/charts/chart-area-linear";
import AreaChartStacked from "@components/charts/chart-area-stacked";
import AreaChartStackedExpand from "@components/charts/chart-area-stacked-expand";
import AreaChartStep from "@components/charts/chart-area-step";
// import BarChartActive from "@components/charts/chart-bar-active";
// import BarChartDefault from "@components/charts/chart-bar-default";
// import BarChartLabelCustom from "@components/charts/chart-bar-label-custom";
// import BarChartLabel from "@components/charts/chart-bar-label";
// import BarChartHorizontal from "@components/charts/chart-bar-horizontal";
// import BarChartMixed from "@components/charts/chart-bar-mixed";
// import BarChartMultiple from "@components/charts/chart-bar-multiple";
// import BarChartNegative from "@components/charts/chart-bar-negative";
// import BarChartStacked from "@components/charts/chart-bar-stacked";
// import LineChartDefault from "@components/charts/chart-line-default";
// import LineChartDotsColors from "@components/charts/chart-line-dots-colors";
// import LineChartDotsCustom from "@components/charts/chart-line-dots-custom";
// import LineChartDots from "@components/charts/chart-line-dots";
// import LineChartLabelCustom from "@components/charts/chart-line-label-custom";
// import LineChartLabel from "@components/charts/chart-line-label";
// import LineChartLinear from "@components/charts/chart-line-linear";
// import LineChartMultiple from "@components/charts/chart-line-multiple";
// import LineChartStep from "@components/charts/chart-line-step";
// import PieChartDonutActive from "@components/charts/chart-pie-donut-active";
// import PieChartDonutText from "@components/charts/chart-pie-donut-text";
// import PieChartDonut from "@components/charts/chart-pie-donut";
// import PieChartInteractive from "@components/charts/chart-pie-interactive";
// import PieChartLabelCustom from "@components/charts/chart-pie-label-custom";
// import PieChartLabelList from "@components/charts/chart-pie-label-list";
// import PieChartLabel from "@components/charts/chart-pie-label";
// import PieChartLegend from "@components/charts/chart-pie-legend";
// import PieChartSeparatorNone from "@components/charts/chart-pie-separator-none";
// import PieChartSimple from "@components/charts/chart-pie-simple";
// import PieChartStacked from "@components/charts/chart-pie-stacked";
// import RadarChartDefault from "@components/charts/chart-radar-default";
// import RadarChartDots from "@components/charts/chart-radar-dots";
// import RadarChartGridCircleFill from "@components/charts/chart-radar-grid-circle-fill";
// import RadarChartGridCircleNoLines from "@components/charts/chart-radar-grid-circle-no-lines";
// import RadarChartGridCircle from "@components/charts/chart-radar-grid-circle";
// import RadarChartGridCustom from "@components/charts/chart-radar-grid-custom";
// import RadarChartGridFill from "@components/charts/chart-radar-grid-fill";
// import RadarChartGridNone from "@components/charts/chart-radar-grid-none";
// import RadarChartIcon from "@components/charts/chart-radar-icons";
// import RadarChartLabelCustom from "@components/charts/chart-radar-label-custom";
// import RadarChartLegend from "@components/charts/chart-radar-legend";
// import RadarChartLinesOnly from "@components/charts/chart-radar-lines-only";
// import RadarChartMultiple from "@components/charts/chart-radar-multiple";
// import RadialChartGrid from "@components/charts/chart-radial-grid";
// import RadialChartLabel from "@components/charts/chart-radial-label";
// import RadialChartShape from "@components/charts/chart-radial-shape";
// import RadialChartSimple from "@components/charts/chart-radial-simple";
// import RadialChartStacked from "@components/charts/chart-radial-stacked";
// import RadialChartText from "@components/charts/chart-radial-text";
// import TooltipChartAdvanced from "@components/charts/chart-tooltip-advanced";
// import TooltipChartDefault from "@components/charts/chart-tooltip-default";
// import TooltipChartFormatter from "@components/charts/chart-tooltip-formatter";
// import TooltipChartIcon from "@components/charts/chart-tooltip-icons";
// import TooltipChartIndicatorLine from "@components/charts/chart-tooltip-indicator-line";
// import TooltipChartIndicatorNone from "@components/charts/chart-tooltip-indicator-none";
// import TooltipChartLabelCustom from "@components/charts/chart-tooltip-label-custom";
// import TooltipChartLabelFormatter from "@components/charts/chart-tooltip-label-formatter";
// import TooltipChartLabelNone from "@components/charts/chart-tooltip-label-none";

export function Charts() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <AreaChartAxes />
      <AreaChartDefault />
      <AreaChartGradient />
      <AreaChartIcon />
      <AreaChartLegend />
      <AreaChartLinear />
      <AreaChartStackedExpand />
      <AreaChartStacked />
      <AreaChartStep />

      {/* <BarChartActive />
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
      <PieChartSeparatorNone />
      <PieChartSimple />
      <PieChartStacked />

      <RadarChartDefault />
      <RadarChartDots />
      <RadarChartGridCircleFill />
      <RadarChartGridCircleNoLines />
      <RadarChartGridCircle />
      <RadarChartGridCustom />
      <RadarChartGridFill />
      <RadarChartGridNone />
      <RadarChartIcon />
      <RadarChartLabelCustom />
      <RadarChartLegend />
      <RadarChartLinesOnly />
      <RadarChartMultiple />

      <RadialChartGrid />
      <RadialChartLabel />
      <RadialChartShape />
      <RadialChartSimple />
      <RadialChartStacked />
      <RadialChartText />

      <TooltipChartAdvanced />
      <TooltipChartDefault />
      <TooltipChartFormatter />
      <TooltipChartIcon />
      <TooltipChartIndicatorLine />
      <TooltipChartIndicatorNone />
      <TooltipChartLabelCustom />
      <TooltipChartLabelFormatter />
      <TooltipChartLabelNone /> */}
    </div>
  );
}
