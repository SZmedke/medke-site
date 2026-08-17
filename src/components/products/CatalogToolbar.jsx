import { Search } from 'lucide-react';
import { BRANDS } from '../../data/catalog';

/** Brand filter pills + subcategory chips + search + sort. URL-query driven in the page. */
export default function CatalogToolbar({ query, onQuery, brand, onBrand, subcategory, onSubcategory, subcategories, sort, onSort, resultCount }) {
  return (
    <div className="catalog-toolbar" data-component="catalog-toolbar">
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flex: '1 1 220px', minWidth: 200 }}>
        <Search size={16} className="muted" />
        <input
          className="field-input"
          style={{ minHeight: 40 }}
          placeholder="Search by part number or name"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          aria-label="Search products"
        />
      </div>
      <select className="field-select" style={{ minHeight: 40, width: 160 }} value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Sort products">
        <option value="default">Sort</option>
        <option value="name">Name A–Z</option>
        <option value="pn">Part number</option>
      </select>

      {subcategories && subcategories.length > 0 ? (
        <div className="brand-pills">
          <button className={subcategory === '' ? 'brand-pill active' : 'brand-pill'} onClick={() => onSubcategory('')}>All</button>
          {subcategories.map((s) => (
            <button
              key={s.slug}
              className={subcategory === s.slug ? 'brand-pill active' : 'brand-pill'}
              onClick={() => onSubcategory(s.slug)}
            >
              {s.name} ({s.count})
            </button>
          ))}
        </div>
      ) : null}

      <div className="brand-pills">
        <button className={brand === '' ? 'brand-pill active' : 'brand-pill'} onClick={() => onBrand('')}>All brands</button>
        {BRANDS.map((b) => (
          <button
            key={b}
            className={brand === b ? 'brand-pill active' : 'brand-pill'}
            onClick={() => onBrand(b)}
          >
            {b}
          </button>
        ))}
      </div>

      <span className="muted" style={{ fontSize: 13, marginLeft: 'auto' }}>
        Showing {resultCount} products
      </span>
    </div>
  );
}
