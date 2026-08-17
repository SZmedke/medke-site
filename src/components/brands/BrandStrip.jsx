import { Link } from 'react-router-dom';
import { BRANDS } from '../../data/catalog';

export default function BrandStrip() {
  return (
    <section className="section-tight" data-component="brand-strip">
      <div className="container-site">
        <div className="brand-strip-box">
          <div>
            <h3 className="h-3">Find parts for your monitor brand</h3>
            <p className="muted" style={{ marginTop: 6, fontSize: 14 }}>
              Every Medke part is verified against the original equipment connector and lead configuration.
            </p>
          </div>
          <div className="brand-strip-chips">
            {BRANDS.map((b) => (
              <Link key={b} to={`/brands/${b.toLowerCase().replace(/\s+/g, '-')}`} className="brand-strip-chip">
                {b}
              </Link>
            ))}
            <Link to="/brands" className="brand-strip-chip accent">All brands</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
