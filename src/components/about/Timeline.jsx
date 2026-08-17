import { TIMELINE } from '../../data/catalog';

/** Vertical hairline timeline — verifiable facts only. */
export default function Timeline() {
  return (
    <ol className="timeline" data-component="timeline">
      {TIMELINE.map((item) => (
        <li className="timeline-item" key={item.year}>
          <span className="mono timeline-year">{item.year}</span>
          <div>
            <h3 className="h-3" style={{ fontSize: 17 }}>{item.title}</h3>
            <p className="muted" style={{ fontSize: 14, marginTop: 4 }}>{item.fact}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
