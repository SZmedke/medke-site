/**
 * @typedef {Object} SectionHeadingProps
 * @property {string} [eyebrow]
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} [align] 'left' | 'center'
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''} style={{ marginBottom: 32 }}>
      {eyebrow ? <span className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</span> : null}
      <h2 className="h-1" style={{ marginTop: eyebrow ? 14 : 0 }}>{title}</h2>
      {subtitle ? <p className="lede" style={{ marginTop: 10, marginInline: align === 'center' ? 'auto' : 0 }}>{subtitle}</p> : null}
    </div>
  );
}
