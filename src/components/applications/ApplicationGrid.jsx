import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { APPLICATIONS } from '../../data/catalog';
import SectionHeading from '../common/SectionHeading';

export default function ApplicationGrid() {
  return (
    <section className="section" style={{ background: 'var(--surface-warm)' }} data-component="application-grid">
      <div className="container-site">
        <SectionHeading
          eyebrow="Applications"
          title="Where Medke accessories are used"
          subtitle="From the ICU to the operating room — monitoring solutions that capture SpO2, ECG, BP and temperature with confidence."
        />
        <div className="app-grid">
          {APPLICATIONS.map((app) => (
            <Link key={app.slug} to={`/applications/${app.slug}`} className="app-card">
              <div className="app-img-wrap">
                <img src={app.image} alt={app.name} width="640" height="360" loading="lazy" />
              </div>
              <div className="app-body">
                <h3 className="h-3">{app.name}</h3>
                <p className="muted" style={{ marginTop: 6, fontSize: 14 }}>{app.summary}</p>
                <span className="category-link">
                  Learn more <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
