import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { APPLICATIONS, getCategory } from '../data/catalog';
import CtaBand from '../components/cta/CtaBand';

export default function ApplicationDetailPage({ slug: slugProp }) {
  const { slug: slugParam } = useParams();
  const slug = slugProp || slugParam;
  const app = APPLICATIONS.find((a) => a.slug === slug);

  if (!app) {
    return (
      <div className="section container-site">
        <h1 className="h-1">Application not found</h1>
        <p className="muted" style={{ marginTop: 8 }}><Link to="/applications" className="category-link">Back to applications</Link></p>
      </div>
    );
  }

  return (
    <>
      <div className="section">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link to="/applications">Applications</Link>
            <ChevronRight size={14} />
            <span>{app.name}</span>
          </nav>
          <div className="app-detail-hero" style={{ marginTop: 20 }}>
            <img src={app.image} alt={app.name} width="960" height="540" />
          </div>
          <div className="app-detail-body">
            <h1 className="h-1">{app.name}</h1>
            <p className="lede" style={{ marginTop: 12 }}>{app.summary}</p>

            <h2 className="h-2" style={{ marginTop: 36 }}>Recommended product lines</h2>
            <div className="category-grid" style={{ marginTop: 20 }}>
              {app.categories.map((catSlug) => {
                const cat = getCategory(catSlug);
                if (!cat) return null;
                return (
                  <Link key={catSlug} to={`/product-category/${catSlug}`} className="category-card">
                    <div className="category-img-wrap">
                      <img src={cat.image} alt={cat.name} width="400" height="300" loading="lazy" />
                    </div>
                    <div className="category-body">
                      <h3 className="h-3">{cat.name}</h3>
                      <span className="category-link">View products <ArrowRight size={15} /></span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="card" style={{ marginTop: 40 }}>
              <h3 className="h-3">Need a full solution for your facility?</h3>
              <p className="muted" style={{ marginTop: 6, fontSize: 14 }}>
                Tell us your monitor fleet and we will prepare a compatible accessories list with quantities and pricing.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 14 }}>Request a solution</Link>
            </div>
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
