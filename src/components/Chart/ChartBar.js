import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeight = "0%";

  if (props.maxValue > 0) {
    barHeight = Math.round((100 * props.value) / props.maxValue) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
