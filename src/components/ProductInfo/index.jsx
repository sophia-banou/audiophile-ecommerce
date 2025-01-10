
import styles from "./ProductInfo.module.css";
import Button from "../Button/index.astro";
import QuantityCounter from "../QuantityCounter";



const ProductInfo = ({ product }) => {
  const includes = product.includes;

  function formatPrice(price) {
    return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }


  function getFirstThreeLines(text) {
    const lines = text.split(".");

    return lines.slice(0, 3).join(".");
  }

  function getRemainingLines(text) {
    const lines = text.split(".");

    return lines.slice(3).join("\n");
  }

  return (
    <div className={styles.product}>
      <section className={styles.mainInfo}>
        <picture className={styles.productImage}>
          <source srcset={product.image.desktop} media="(min-width: 1024px)" />
          <source srcset={product.image.tablet} media="(min-width: 600px)" />
          <source srcset={product.image.mobile} media="(max-width: 599px)" />
          <img src={product.image.desktop} alt={product.name} />
        </picture>
        <div className={styles.productInfo}>
          <div className={styles.productText}>
            {product.new && <span className="overline">NEW PRODUCT</span>}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h6>{formatPrice(product.price)}</h6>
          </div>
          <div className={styles.productButtons}>
            <QuantityCounter initQuantity={0} client:load />
            <Button buttonType="1" link="#" text="ADD TO CART" />
          </div>
        </div>
      </section>
      <section className={styles.secInfo}>
        <div className={styles.features}>
          <h3>FEATURES</h3>
          <p>{getFirstThreeLines(product.features)}.</p>
          <p>{getRemainingLines(product.features)}.</p>
        </div>
        <div className={styles.includes}>
          <h3>IN THE BOX</h3>
          <ul className={styles.includesList}>
            {
              includes.map((item) => (
                <div className={styles.includesItem}>
                  <p className={styles.includesQuantity}>{item.quantity}x</p>
                  <p className={styles.includesName}>{item.item}</p>
                </div>
              ))
            }
          </ul>
        </div>
      </section>
      <section className={styles.gallery}>
        <picture className={styles.galleryFirst}>
          <source
            srcset={product.gallery.first.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcset={product.gallery.first.tablet}
            media="(min-width: 600px)"
          />
          <source
            srcset={product.gallery.first.mobile}
            media="(max-width: 599px)"
          />
          <img src={product.gallery.first.desktop} alt="Gallery First" />
        </picture>
        <picture className={styles.gallerySecond}>
          <source
            srcset={product.gallery.second.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcset={product.gallery.second.tablet}
            media="(min-width: 600px)"
          />
          <source
            srcset={product.gallery.second.mobile}
            media="(max-width: 599px)"
          />
          <img src={product.gallery.second.desktop} alt="Gallery Second" />
        </picture>
        <picture className={styles.galleryThird}>
          <source
            srcset={product.gallery.third.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcset={product.gallery.third.tablet}
            media="(min-width: 600px)"
          />
          <source
            srcset={product.gallery.third.mobile}
            media="(max-width: 599px)"
          />
          <img src={product.gallery.third.desktop} alt="Gallery Third" />
        </picture>
      </section>
    </div>

  )

}


export default ProductInfo;