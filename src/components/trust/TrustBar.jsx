import { BadgeCheck } from 'lucide-react';
import { CERTS } from '../../data/catalog';

export default function TrustBar() {
  return (
    <section className="trust-bar" data-component="trust-bar">
      <div className="container-site trust-inner">
        <BadgeCheck size={18} />
        <span className="trust-text">TUV / CE / FDA / ISO certified manufacturer</span>
        <span className="trust-sep" aria-hidden="true" />
        <span className="trust-text">14+ years in medical accessories</span>
        <span className="trust-sep" aria-hidden="true" />
        <span className="trust-text">Selling in EU &amp; US markets</span>
      </div>
    </section>
  );
}
