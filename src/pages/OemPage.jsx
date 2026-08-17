import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import OemProcess from '../components/oem/OemProcess';
import SectionHeading from '../components/common/SectionHeading';
import CtaBand from '../components/cta/CtaBand';

const CAPABILITIES = [
  'Complete R&D, production and sales system',
  'Custom connectors, cable lengths, materials and packaging',
  'OEM/ODM support with your brand labeling',
  'Free samples prior to bulk orders',
  'Approved TUV, CE & FDA certifications support local markets',
  'Small quantities available; larger quantities better priced',
];

export default function OemPage() {
  return (
    <>
      <div className="section">
        <div className="container-site">
          <SectionHeading
            eyebrow="OEM & ODM"
            title="Your brand, our manufacturing"
            subtitle="With 14+ years in medical accessories, Medke develops and manufactures custom cables and sensors to your specification."
          />

          <div className="oem-grid" style={{ marginBottom: 56 }}>
            <img src="/assets/images/oem/workshop.png" alt="Medke OEM customization workshop" width="640" height="360" loading="lazy" />
            <ul className="oem-list">
              {CAPABILITIES.map((c) => (
                <li key={c}><CheckCircle2 size={16} /> {c}</li>
              ))}
            </ul>
          </div>

          <h2 className="h-2" style={{ marginBottom: 24 }}>How an OEM project works</h2>
          <OemProcess />

          <div className="card" style={{ marginTop: 48, textAlign: 'center', padding: 40 }}>
            <h3 className="h-3">Ready to start?</h3>
            <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>
              Share your requirements and we will come back with a development plan and quotation within 1 business day.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>Start your OEM project</Link>
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
