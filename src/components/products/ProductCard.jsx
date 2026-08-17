import { Link } from 'react-router-dom';

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} partNumber
 * @property {string} name
 * @property {string} categorySlug
 * @property {string[]} images
 * @property {string[]} brands
 * @property {string[]} [badges]
 */
export default function ProductCard({ product }) {
  const extra = product.brands.length > 3 ? product.brands.length - 3 : 0;
  return (
    <Link to={`/product/${product.id}`} className="product-card" data-component="product-card">
      <div className="product-img-wrap">
        <img src={product.images[0]} alt={product.name} width="400" height="300" loading="lazy" />
        {product.badges && product.badges.length > 0 ? (
          <span className="product-badge">{product.badges[0]}</span>
        ) : null}
      </div>
      <div className="product-body">
        <p className="mono product-pn wrap-anywhere">{product.partNumber}</p>
        <h3 className="product-name line-clamp-2">{product.name}</h3>
        <div className="product-chips">
          {product.brands.slice(0, 3).map((b) => (
            <span className="chip" key={b}>{b}</span>
          ))}
          {extra > 0 ? <span className="chip">+{extra}</span> : null}
        </div>
        <span className="product-rfq">Request a quote →</span>
      </div>
    </Link>
  );
}
