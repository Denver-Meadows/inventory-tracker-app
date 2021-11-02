import { Chart } from "react-google-charts";

function InventoryChart() {
  return (
    <main className="dashboard-content-inventory-chart">
      <Chart
        className="inventory-chart"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "sales", "purchase"],
          [0, 20, 10],
          [1, 10, 5],
          [2, 23, 15],
          [3, 17, 9],
          [4, 18, 10],
          [5, 9, 5],
          [6, 11, 3],
          [7, 27, 19],
        ]}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Popularity",
          },
          series: {
            1: { curveType: "function" },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </main>
  );
}

export default InventoryChart;
