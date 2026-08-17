import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import SectionHeading from '../common/SectionHeading';

export default function Categories() {
  return (
    <section className="section" data-component="category-grid">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our products"
          title="Five product lines, 27 subcategories"
          subtitle="Compatible accessories for more than 90% of the brand monitors on the market. Every item is inspected before shipping."
        />
        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} to={`/product-category/${cat.slug}`} className="category-card">
              <div className="category-img-wrap">
                <img src={cat.image} alt={cat.name} width="400" height="300" loading="lazy" />
              </div>
              <div className="category-body">
                <h3 className="h-3">{cat.name}</h3>
                <p className="mono category-count">{cat.subcategories.reduce((a, s) => a + s.count, 0)} models</p>
                <p className="category-blurb">{cat.blurb}</p>
                <span className="category-link">
                  View category <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
