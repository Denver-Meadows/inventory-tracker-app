import { BsBox } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

function TopInfoBar() {
  return (
    <div className="dashboard-content-info-bar">
      <div className="logo">
        <h2>
          <BsBox /> Inventory+
        </h2>
      </div>
      <div className="user-info">
        <div className="user-info-notify user-info-item">
          <IoMdNotificationsOutline />
        </div>
        <div className="user-info-login user-info-item">
          <button>login</button>
        </div>
        <div className="user-info-settings user-info-item">
          <FiSettings />
        </div>
      </div>
    </div>
  );
}

export default TopInfoBar;
