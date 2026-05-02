import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex align-items-center justify-content-center`}
    >
      <span>2026 Copyrights (c) Bunyan</span>
    </footer>
  );
}

export default Footer;
