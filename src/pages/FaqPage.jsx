import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const FAQS = [
  {
    q: 'Which brands are compatible?',
    a: '90%+ of mainstream monitors: Philips, GE, Mindray, Drager, Fukuda, Nihon Kohden, Bionet, Aeon, etc.',
  },
  {
    q: 'Do you support OEM / ODM?',
    a: 'Yes — custom connectors, cable length, logo, packaging and instruction cards are all available.',
  },
  {
    q: 'What certifications do you hold?',
    a: 'CE, FDA, ISO 13485, TUV, MDR-compliant. Documentation provided with each order.',
  },
  {
    q: 'What is the MOQ? Can I mix?',
    a: '100 pcs for stock models; mixed models in one order allowed; lower MOQ for OEM trials.',
  },
  {
    q: 'How long is delivery?',
    a: '3–7 days for stock items; 15–25 days for OEM production; express shipping available.',
  },
  {
    q: 'What is the warranty?',
    a: '12-month warranty on all products; defective items replaced free of charge.',
  },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <div className="section">
        <div className="container-site">
          <SectionHeading
            align="center"
            title="Frequently Asked Questions"
            subtitle="MOQ · OEM · Certifications · Delivery · Warranty"
          />
          <div style={{ maxWidth: 760, marginInline: 'auto' }}>
            {FAQS.map((item, i) => {
              const open = openIdx === i;
              return (
                <div className="faq-item" data-open={open ? 'true' : 'false'} key={item.q}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                  >
                    {item.q}
                    <ChevronDown size={18} />
                  </button>
                  {open ? (
                    <p className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA band */}
      <div
        style={{
          background: 'var(--accent-soft)',
          borderTop: '1px solid #CDD5EF',
          borderBottom: '1px solid #CDD5EF',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        <div className="container-site">
          <h2 className="h-2" style={{ color: 'var(--accent)' }}>Still Have Questions?</h2>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 18 }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
