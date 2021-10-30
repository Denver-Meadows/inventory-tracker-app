import InventorySummary from "./InventorySummary";
import NumOfUsers from "./NumOfUsers";

function InventoryOverview() {
  return (
    <main className="dashboard-content-inventory-overview">
      <div className="inventory-overview">
        <InventorySummary />
        <article className="inventory-overview-article">
          <h2>Product Details</h2>
        </article>
        <NumOfUsers />
      </div>
    </main>
  );
}

export default InventoryOverview;
