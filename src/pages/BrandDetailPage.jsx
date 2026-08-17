import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BRANDS, productsByBrand } from '../data/catalog';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/common/SectionHeading';

// Brand lookup keyed by route slug — same cards as /brands/ (hi-fi design p6).
const BRAND_SERIES = {
  philips: 'IntelliVue · MX · Fetal',
  ge: 'Dash · CARESCAPE',
  mindray: 'BeneView · iPM',
  drager: 'Vista · Infinity',
  fukuda: 'Dynascope',
  'nihon-kohden': 'BSM · Life Scope',
  bionet: 'BM series',
  aeon: 'Fetal Monitor',
};

const SLUG_OVERRIDES = { 'Fukuda Denshi': 'fukuda' };
const DISPLAY_NAMES = { 'Fukuda Denshi': 'Fukuda' };
const EXTRA_BRANDS = ['Bionet', 'Aeon'];

const toSlug = (name) => SLUG_OVERRIDES[name] || name.toLowerCase().replace(/\s+/g, '-');

const BRAND_CARDS = [
  ...BRANDS.map((name) => ({
    name: DISPLAY_NAMES[name] || name,
    slug: toSlug(name),
    series: BRAND_SERIES[toSlug(name)],
  })),
  ...EXTRA_BRANDS.map((name) => ({
    name,
    slug: toSlug(name),
    series: BRAND_SERIES[toSlug(name)],
  })),
];

export default function BrandDetailPage() {
  const { brandSlug } = useParams();
  const brand = BRAND_CARDS.find((b) => b.slug === brandSlug) || {
    name: brandSlug,
    slug: brandSlug,
    series: null,
  };
  const products = productsByBrand(brand.name);

  return (
    <>
      <div className="section">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/brands">Brands</Link>
            <ChevronRight size={14} />
            <span>{brand.name}</span>
          </nav>

          <SectionHeading
            align="center"
            title={`${brand.name} Compatible Products`}
            subtitle={
              brand.series
                ? `Compatible accessories for ${brand.series}`
                : `Compatible accessories for ${brand.name} monitors`
            }
          />

          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: 48 }}>
              <p className="h-3">Preview catalog has no {brand.name} products yet</p>
              <p className="muted" style={{ marginTop: 8, fontSize: 14, maxWidth: 520, marginInline: 'auto' }}>
                The full 472-SKU production catalog includes {brand.name} compatible items. Send us
                your monitor model and we will verify compatibility and send the complete list.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>
                Request {brand.name} compatibility list
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA band */}
      <section
        style={{
          background: 'var(--surface-warm)',
          borderTop: '1px solid #cdd5ef',
          borderBottom: '1px solid #cdd5ef',
          padding: '48px 0',
          textAlign: 'center',
        }}
      >
        <div className="container-site">
          <h2 className="h-2" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            Need {brand.name}-compatible OEM Parts?
          </h2>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 18 }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
