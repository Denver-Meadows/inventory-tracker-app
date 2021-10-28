import {
  FcSalesPerformance,
  FcBullish,
  FcBearish,
  FcMoneyTransfer,
} from "react-icons/fc";

function SalesOverview() {
  return (
    <div className="dashboard-content-sales">
      <div className="sales-overview">
        <h4>Sales Overview</h4>
        <div className="sales-overview-items">
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcSalesPerformance />
            </div>{" "}
            <div className="sales-overview-item-stats">
              <p>Total Sales</p>
              <h2>$786</h2>
            </div>
          </div>
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcBullish />
            </div>
            <div className="sales-overview-item-stats">
              <p>Revenue</p>
              <h2>7384</h2>
            </div>
          </div>
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcBearish />
            </div>
            <div className="sales-overview-item-stats">
              <p>Cost</p>
              <h2>5384</h2>
            </div>
          </div>
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcMoneyTransfer />
            </div>
            <div className="sales-overview-item-stats">
              <p>Profit</p>
              <h5>500</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesOverview;
