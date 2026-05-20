import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = ({ form = {} }) => {
  const links = [
    { icon: "  fa-chart-column", title: "Status", path: "/" },
    { icon: "fa-users-gear", title: "Users Management", path: "/users" },
    { icon: "fa-chart-gantt", title: "Projects Management", path: "/projects" },
    { icon: "fa-building", title: "Developers Management", path: "/" },
    { icon: "fa-globe", title: "CMS", path: "/projects" },
    { icon: "fa-message", title: "Live Chat" ,path: "/projects"},
  ];

  return (
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>

      {links.map((item, index) =>
        item.path ? (
          <div key={index} className={styles.linkWrapper}>
            <NavLink
              to={item.path}
              className={`${styles.navItem} d-flex align-items-center gap-2 py-3 px-3`}
            >
              <i className={`fa-solid ${item.icon} fs-3`}></i>
              <span className={styles.title}>{item.title}</span>
              {item.title === "Users Management" && form?.email && (
                <span className="badge bg-warning text-dark ms-1">draft</span>
              )}
            </NavLink>
          </div>
        ) : (
          <div
            className={`${styles.navItem} d-flex align-items-center gap-2 py-3 px-3`}
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-3`}></i>
            <span className={styles.title}>{item.title}</span>
          </div>
        ),
      )}
    </aside>
  );
};

export default Sidebar;
