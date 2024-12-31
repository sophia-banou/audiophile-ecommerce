
import styles from "./CartModal.module.css";
import data from "../../data/data.json";
import CartItem from "./item";

const CartModal = ({ }) => {
  //temp
  const product = data.find(p => p.id === 1);

  let quantity = 3;

  let cart = [];
  cart.push({ product, quantity });
  console.log(cart)

  return (
    <>
      <div className={styles.cartModal} id="cartmodal">
        <div className={styles.cartModalInner}>
          <div className={styles.cartModalHead}>
            <h6 className={styles.headQuantity}>{`CART (${quantity})`}</h6>
            <a href="#" className={styles.headRemove}>
              <p>Remove All</p>
            </a>
          </div>
          <div className={styles.cartBody}>
            {cart.map((item) => (
              <CartItem product={item?.product} quantity={item?.quantity} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cartOverlay} id="cartoverlay"></div>
    </>
  );
}

export default CartModal;