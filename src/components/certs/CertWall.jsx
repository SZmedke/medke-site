import { CERTS } from '../../data/catalog';
import SectionHeading from '../common/SectionHeading';

export default function CertWall() {
  return (
    <section className="section-tight" data-component="cert-wall">
      <div className="container-site">
        <SectionHeading eyebrow="Certifications" title="Approved for major global markets" />
        <div className="cert-grid">
          {CERTS.map((c) => (
            <div className="cert-card" key={c.code}>
              <div className="mono cert-code">{c.code}</div>
              <p className="muted" style={{ fontSize: 13 }}>{c.scope}</p>
            </div>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 16, fontSize: 13 }}>
          Certificate documents are available on request — ask for them when you send your inquiry.
        </p>
      </div>
    </section>
  );
}
