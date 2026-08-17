import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function OemTeaser() {
  return (
    <section className="section" data-component="oem-teaser">
      <div className="container-site oem-grid">
        <div className="oem-img-wrap">
          <img
            src="/assets/images/about/factory-line.png"
            alt="Medke medical cable assembly line"
            width="640"
            height="360"
            loading="lazy"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="OEM & ODM"
            title="Your brand, our manufacturing"
            subtitle="From requirements to sample to mass production — our R&D team supports custom cables, sensors and packaging."
          />
          <ul className="oem-list">
            <li>Complete R&amp;D, production and sales system</li>
            <li>Custom connectors, lengths and packaging</li>
            <li>Free samples before bulk orders</li>
            <li>Small quantities available, larger quantities better priced</li>
          </ul>
          <Link to="/oem-solution" className="btn btn-secondary" style={{ marginTop: 12 }}>
            Start your OEM project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
