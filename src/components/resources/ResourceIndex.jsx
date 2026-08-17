import { ArrowRight, FileText } from 'lucide-react';
import { RESOURCES } from '../../data/catalog';
import SectionHeading from '../common/SectionHeading';

export default function ResourceIndex() {
  const featured = RESOURCES.find((r) => r.featured) || RESOURCES[0];
  const rest = RESOURCES.filter((r) => r !== featured);
  return (
    <div data-component="resource-index">
      <SectionHeading
        eyebrow="Resources"
        title="Buying guides for medical accessories"
        subtitle="Practical guides written for procurement engineers and distributors."
      />
      <div className="resource-layout">
        <a className="resource-featured" href="/resources" onClick={(e) => e.preventDefault()}>
          <img src={featured.image} alt={featured.title} width="640" height="480" loading="lazy" />
          <div>
            <span className="chip chip-accent">Featured guide</span>
            <h3 className="h-3" style={{ marginTop: 10 }}>{featured.title}</h3>
            <p className="muted" style={{ marginTop: 6, fontSize: 14 }}>{featured.summary}</p>
            <span className="category-link">Read guide <ArrowRight size={15} /></span>
          </div>
        </a>
        <ul className="resource-list">
          {rest.map((r) => (
            <li key={r.slug}>
              <a href="/resources" onClick={(e) => e.preventDefault()} className="resource-item">
                <FileText size={18} />
                <div>
                  <span className="h-3" style={{ fontSize: 16, fontWeight: 500 }}>{r.title}</span>
                  <p className="muted" style={{ fontSize: 13, marginTop: 3 }}>{r.summary}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
