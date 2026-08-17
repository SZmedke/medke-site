import { Check, Minus, HelpCircle } from 'lucide-react';

/** Signature dark data-block — compatibility by brand and model series. */
export default function CompatibilityMatrix({ compat }) {
  return (
    <div className="data-block" data-component="compatibility-matrix">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
        <span className="dlabel">Compatible with — verified model series</span>
        <span style={{ fontSize: 12, color: '#ADB8E3', display: 'inline-flex', gap: 10, alignItems: 'center' }}>
          <Check size={13} className="ok" /> verified &nbsp;<Minus size={13} className="no" /> not in range
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model series</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {compat.map((c) => (
            <tr key={c.brand}>
              <td style={{ fontWeight: 500 }}>{c.brand}</td>
              <td>{c.series.join(' · ')}</td>
              <td><span className="ok">✓</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        href="#inquiry"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, color: '#FFFFFF', fontSize: 13 }}
      >
        <HelpCircle size={14} /> Not sure about your model? Ask us
      </a>
    </div>
  );
}
