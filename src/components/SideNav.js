import { MdOutlineDashboard } from "react-icons/md";
import { BsBox, BsCartCheck, BsPeople } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";

function SideNav() {
  return (
    <aside className="dashboard-content-side-nav">
      <ul className="side-nav">
        <li className="side-nav-item">
          {" "}
          <MdOutlineDashboard /> Dashboard
        </li>
        <li className="side-nav-item">
          {" "}
          <BsBox /> Inventory
        </li>
        <li className="side-nav-item">
          {" "}
          <BsCartCheck /> Purchasing
        </li>
        <li className="side-nav-item">
          {" "}
          <BsPeople /> Customers
        </li>
        <li className="side-nav-item">
          {" "}
          <BiBuildings /> Suppliers
        </li>
      </ul>
    </aside>
  );
}

export default SideNav;
