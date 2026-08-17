const STEPS = [
  { n: '01', title: 'Requirements', fact: 'Share your specs: connector, length, material, packaging.' },
  { n: '02', title: 'Sample', fact: 'We develop a sample and ship it for your approval.' },
  { n: '03', title: 'Contract', fact: 'Agree pricing, MOQ and lead time.' },
  { n: '04', title: 'Production', fact: 'Mass production under our quality management system.' },
  { n: '05', title: 'QC', fact: 'Incoming, in-process and outgoing inspection on every batch.' },
  { n: '06', title: 'Shipping', fact: 'Careful packing and on-time delivery worldwide.' },
];

export default function OemProcess() {
  return (
    <ol className="oem-steps" data-component="oem-process">
      {STEPS.map((s) => (
        <li className="oem-step" key={s.n}>
          <span className="mono oem-step-n">{s.n}</span>
          <div>
            <h3 className="h-3" style={{ fontSize: 16 }}>{s.title}</h3>
            <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>{s.fact}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
