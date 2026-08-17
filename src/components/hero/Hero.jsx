import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { BRANDS, STATS } from '../../data/catalog';

export default function Hero() {
  return (
    <section className="hero" data-component="hero">
      <div className="container-site hero-grid">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-solid">Medke® · Shenzhen · Est. 2008</span>
          <h1 className="h-display hero-title">
            Replacement parts for patient monitors and ventilators — built for OEM-grade reliability.
          </h1>
          <p className="lede hero-lede">
            14+ years manufacturing ECG cables, SpO2 sensors, temperature probes and ventilator consumables. 472 products, 100+ countries, TUV/CE/FDA/ISO certified.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Browse 472 products <ArrowRight size={16} />
            </Link>
            <Link to="/brands" className="btn btn-secondary">
              Check brand compatibility
            </Link>
          </div>
          <div className="stat-strip" style={{ marginTop: 36 }}>
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-media">
          <img
            className="hero-img"
            src="/assets/images/hero/hero-product.jpg"
            alt="Medke patient monitor cable product"
            width="550"
            height="550"
            fetchpriority="high"
          />
          <div className="hero-compat">
            <ShieldCheck size={15} />
            <span>Compatible with</span>
            {BRANDS.slice(0, 4).map((b) => (
              <span className="chip" key={b}>{b}</span>
            ))}
            <span className="chip chip-accent">+more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
