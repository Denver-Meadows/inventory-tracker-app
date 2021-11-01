import SideNav from "./components/SideNav";
import TopInfoBar from "./components/TopInfoBar";
import SalesOverview from "./components/SalesOverview";
import PurchaseOverview from "./components/PurchaseOverview";
import InventoryOverview from "./components/InventoryOverview";
import InventoryItems from "./components/InventoryItems";

// Refactor to remove bottom paginated inventory listing on small screens.  Only there on large screens.

function App() {
  return (
    <main className="dashboard">
      <div className="dashboard-content">
        <TopInfoBar />
        <SideNav />
        <SalesOverview />
        <PurchaseOverview />
        <InventoryOverview />
      </div>
    </main>
  );
}

export default App;
