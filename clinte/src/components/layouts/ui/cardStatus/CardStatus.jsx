import styles from "./CardStatus.module.css";
const CardStatus = ({ counter,title,icon}) => {
  return (
    <>
      <div className={`${styles.cardStatus} px-4 d-flex align-items-center`}>
        <div
          className={`${styles.icon} w-100 d-flex justify-align-content-center align-items-center`}>
        <span className={styles.icon}>{icon}</span>
        </div>
        <div
          className={`${styles.info} w-100 d-flex flex-column align-items-center`}
        >
          <span className={styles.counter}>{counter}</span>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </>
  );
}
export  default CardStatus;
