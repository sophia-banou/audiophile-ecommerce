
import styles from "./QuantityCounter.module.css";
import { useState } from "react";

const QualityCounter = ({ initQuantity }) => {
  const [quantity, setQuantity] = useState(initQuantity);

  const increaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((prev) => prev + 1);
  }

  const decreaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div className={styles.counter}>
      <div className={styles.counterInner}>
        <a href="#" onClick={decreaseQuantity}><p className={styles.symbol}>-</p></a>
        <p className={styles.quantity}>{quantity || 0}</p>
        <a href="#" onClick={increaseQuantity}><p className={styles.symbol}>+</p></a>
      </div>
    </div >
  );
}
export default QualityCounter;
