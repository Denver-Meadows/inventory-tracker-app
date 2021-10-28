import { FcBarChart, FcCancel, FcBearish, FcLeft } from "react-icons/fc";

function PurchaseOverview() {
  return (
    <div className="dashboard-content-sales">
      <div className="sales-overview">
        <h4>Purchases Overview</h4>
        <div className="sales-overview-items">
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcBarChart />
            </div>{" "}
            <div className="sales-overview-item-stats">
              <p>Total Purchases</p>
              <h2>86</h2>
            </div>
          </div>
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcCancel />
            </div>
            <div className="sales-overview-item-stats">
              <p>Cancellations</p>
              <h2>41</h2>
            </div>
          </div>
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcBearish />
            </div>
            <div className="sales-overview-item-stats">
              <p>Cost</p>
              <h2>$5384</h2>
            </div>
          </div>
          <div className="sales-overview-items-item">
            <div className="sales-overview-item-icon">
              <FcLeft />
            </div>
            <div className="sales-overview-item-stats">
              <p>Returns</p>
              <h2>12</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOverview;

{
  /* <div className="dashboard-content-purchase">
<h3>Purchase Info</h3>
</div> */
}
