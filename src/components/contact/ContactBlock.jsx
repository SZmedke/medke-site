import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data/catalog';

export default function ContactBlock() {
  return (
    <div className="contact-block" data-component="contact-block">
      <div className="contact-row">
        <Mail size={17} />
        <div>
          <span className="field-label" style={{ marginBottom: 2 }}>Email</span>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
      </div>
      <div className="contact-row">
        <Phone size={17} />
        <div>
          <span className="field-label" style={{ marginBottom: 2 }}>Business phone</span>
          <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}>{COMPANY.phone}</a>
        </div>
      </div>
      <div className="contact-row">
        <MessageCircle size={17} />
        <div>
          <span className="field-label" style={{ marginBottom: 2 }}>WhatsApp</span>
          <a href={`${COMPANY.whatsappLink}?text=${encodeURIComponent('Hello Medke, I have an inquiry.')}`} target="_blank" rel="noreferrer">
            {COMPANY.whatsapp}
          </a>
        </div>
      </div>
      <div className="contact-row">
        <MapPin size={17} />
        <div>
          <span className="field-label" style={{ marginBottom: 2 }}>Office address</span>
          <span>{COMPANY.address}</span>
        </div>
      </div>
      <div className="contact-row">
        <Clock size={17} />
        <div>
          <span className="field-label" style={{ marginBottom: 2 }}>Working hours</span>
          <span>{COMPANY.hours}</span>
        </div>
      </div>
      <p className="muted" style={{ marginTop: 16, fontSize: 13, fontStyle: 'italic' }}>{COMPANY.responsePromise}</p>
    </div>
  );
}
