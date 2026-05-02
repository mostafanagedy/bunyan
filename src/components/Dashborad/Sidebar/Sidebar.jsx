import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const links = [
    { icon: "fa-users", title: "Stats" },
    { icon: "fa-users-gear", title: "Users Management" },
    { icon: "fa-chart-gantt", title: "Projects Management" },
    { icon: "fa-building", title: "Developers Management" },
    { icon: "fa-globe", title: "CMS" },
    { icon: "fa-message", title: "Live Chat" },
  ];

  return (
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>
      <nav >
        {links.map((item, index) => (
          <div className={`${styles.navItem} d-flex align-items-center gap-2 py-3 px-3`} key={index}>
            <i className={`fa-solid ${item.icon} fs-3`}></i>
            <span className={styles.title}>{item.title}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
