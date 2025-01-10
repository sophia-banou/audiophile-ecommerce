import styles from "./CartModal.module.css";
import QualityCounter from "../QuantityCounter";

const CartItem = ({ product, quantity }) => {
    function formatPrice(price) {
        return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.itemLeft}>
                <picture className={styles.itemPicture}>
                    <source
                        srcset={product.image.desktop}
                        media="(min-width: 1024px)"
                    />
                    <source
                        srcset={product.image.tablet}
                        media="(min-width: 600px)"
                    />
                    <source
                        srcset={product.image.mobile}
                        media="(max-width: 599px)"
                    />
                    <img src={product.image.desktop} alt={product.short} />
                </picture>
                <div className={styles.itemText}>
                    <p className={styles.itemName}>{product.short}</p>
                    <p className={styles.itemPrice}>{formatPrice(product.price)}</p>
                </div>
            </div>
            <QualityCounter initQuantity={quantity} />
        </div>
    );
}

export default CartItem;