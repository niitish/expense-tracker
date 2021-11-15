import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const vals = props.dataPoints.map((dataPoint) => dataPoint.value);
  const globMax = Math.max(...vals);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={globMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
