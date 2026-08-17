import { TESTIMONIALS } from '../../data/catalog';
import SectionHeading from '../common/SectionHeading';

export default function Testimonials() {
  return (
    <section className="section" data-component="testimonial-wall">
      <div className="container-site">
        <SectionHeading
          eyebrow="What our clients say"
          title="Trusted by distributors worldwide"
          align="center"
        />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-name">{t.name}</span>
                {t.country ? <span className="muted">{t.country}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
