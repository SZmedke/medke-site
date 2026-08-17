import { Link } from 'react-router-dom';
import { BRANDS } from '../data/catalog';
import SectionHeading from '../components/common/SectionHeading';

// Compatible-brand cards per hi-fi design (p5): brand name + compatible series.
// 6 of the 8 cards are read from the BRANDS array in src/data/catalog.js;
// Bionet + Aeon are appended to match the approved visual design.
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

export default function BrandsPage() {
  return (
    <>
      <div className="section">
        <div className="container-site">
          <SectionHeading
            align="center"
            title="Compatible Brands"
            subtitle="90%+ of mainstream patient monitor brands covered"
          />
          {/* 4-column grid: product-grid provides the responsive 4→3→2→1 column layout */}
          <div className="product-grid">
            {BRAND_CARDS.map((b) => (
              <Link key={b.slug} to={`/brands/${b.slug}`} className="brand-card" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 15, fontWeight: 600 }}>{b.name}</h3>
                <small style={{ display: 'block', color: 'var(--meta)', fontSize: 12, marginTop: 4, fontWeight: 400 }}>
                  {b.series}
                </small>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer band (soft highlight background) */}
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
            Compatible with, not original manufacturer
          </h2>
          <p
            className="muted"
            style={{
              marginTop: 10,
              fontSize: 14,
              lineHeight: 1.7,
              maxWidth: 680,
              marginInline: 'auto',
            }}
          >
            All Medke products are designed as compatible replacements. Brand names &amp; logos are
            trademarks of their respective owners, used for compatibility reference only.
          </p>
        </div>
      </section>

      <div className="section" style={{ textAlign: 'center', paddingTop: 40 }}>
        <div className="container-site">
          <Link to="/contact" className="btn btn-primary">
            Check Your Model Compatibility
          </Link>
        </div>
      </div>
    </>
  );
}
