import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data/catalog';

export default function CtaBand() {
  return (
    <section className="cta-band" data-component="cta-band">
      <div className="container-site cta-inner">
        <div>
          <h2 className="h-1" style={{ color: '#fff' }}>Ready to grow your business?</h2>
          <p className="cta-sub">Build your custom medical cables and sensors business now. {COMPANY.responsePromise}</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary">
            Get a quote <ArrowRight size={16} />
          </Link>
          <a
            className="btn cta-wa"
            href={`${COMPANY.whatsappLink}?text=${encodeURIComponent('Hello Medke, I would like a quote.')}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
