import { FcComboChart, FcShipped } from "react-icons/fc";

function InventoryOverview() {
  return (
    <main className="dashboard-content-inventory-overview">
      <div className="inventory-overview">
        <article className="inventory-overview-article">
          <h2>Inventory Summary</h2>
          <div className="inventory-overview-article-content">
            <div className="inventory-overview-article-content-summary">
              <FcComboChart className="inventory-icon" />
              <p>Quantity on Hand</p>
              <h3>245</h3>
            </div>
            <div className="inventory-overview-article-content-summary">
              <FcShipped className="inventory-icon" />
              <p>Will be Received</p>
              <h3>30</h3>
            </div>
          </div>
        </article>
        <article className="inventory-overview-article">
          <h2>Product Details</h2>
        </article>
        <article className="inventory-overview-article">
          <h2>No. of Users</h2>
        </article>
      </div>
    </main>
  );
}

export default InventoryOverview;
