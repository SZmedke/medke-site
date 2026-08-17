import { Link } from 'react-router-dom';
import { BRANDS } from '../data/catalog';
import SectionHeading from '../components/common/SectionHeading';

// Client chips (hi-fi design p8): 8 brands, derived from the BRANDS array + 2 extras.
const CLIENT_BRANDS = [
  ...BRANDS.map((n) => (n === 'Fukuda Denshi' ? 'Fukuda' : n)),
  'Bionet',
  'Aeon',
];

const JOURNEY = [
  { year: '2008', text: '注册成立 · 注册资本 100 万元 · 厂房 1000㎡' },
  { year: '2014', text: '取得医疗耗材生产准入 · 启动 OEM / ODM 服务' },
  { year: '2024', text: '智能工厂升级 · 厂房 4000㎡ · 100+ 出口国' },
];

const FACTORY = [
  { image: '/assets/images/about/factory-01.jpg', title: 'Factory Exterior', desc: '4000㎡ 智能工厂' },
  { image: '/assets/images/about/factory-02.jpg', title: 'Workshop', desc: '无尘车间' },
  { image: '/assets/images/about/factory-03.jpg', title: 'Warehouse', desc: '成品仓 · 快速发货' },
  { image: '/assets/images/about/quality-lab.png', title: 'Quality Lab', desc: '来料/成品双重检验' },
];

export default function AboutPage() {
  return (
    <>
      {/* Company intro split — text left, image right */}
      <div className="section">
        <div className="container-site">
          <div className="about-story-grid">
            <div>
              <h2 className="h-2">Welcome to Medke</h2>
              <p className="muted" style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7 }}>
                Established in 2008 in Shenzhen with RMB 10 million registered capital. We focus on
                medical consumable accessories — patient monitor sensors, cables and probes —
                exported to 100+ countries under ISO 13485 quality management.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                <Link to="/contact" className="btn btn-secondary">Request a Catalog</Link>
              </div>
            </div>
            <img
              src="/assets/images/about/quality-lab.png"
              alt="Medke quality lab"
              width="640"
              height="480"
              loading="lazy"
              className="about-story-img"
            />
          </div>
        </div>
      </div>

      {/* Timeline (light background) */}
      <div className="section" style={{ background: 'var(--bg)' }}>
        <div className="container-site">
          <SectionHeading align="center" title="Our Journey" />
          <ol className="timeline" style={{ maxWidth: 520, margin: '0 auto' }}>
            {JOURNEY.map((m) => (
              <li className="timeline-item" key={m.year}>
                <span className="timeline-year">{m.year}</span>
                <p className="muted" style={{ fontSize: 14 }}>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Factory image cards */}
      <div className="section">
        <div className="container-site">
          <SectionHeading align="center" title="Factory at a Glance" />
          <div className="app-grid">
            {FACTORY.map((f) => (
              <figure className="app-card" key={f.title}>
                <div className="app-img-wrap">
                  <img src={f.image} alt={f.title} width="400" height="225" loading="lazy" />
                </div>
                <figcaption className="app-body">
                  <h3 className="h-3">{f.title}</h3>
                  <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>{f.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Team split — image left, text right (light background) */}
      <div className="section" style={{ background: 'var(--bg)' }}>
        <div className="container-site">
          <div className="quality-grid">
            <img
              src="/assets/images/about/about-team.jpg"
              alt="Medke team"
              width="640"
              height="480"
              loading="lazy"
            />
            <div>
              <h3 className="h-3" style={{ fontWeight: 700 }}>Our Team</h3>
              <p className="muted" style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7 }}>
                100+ professionals across sales, R&amp;D and QC. Bilingual sales team replies within
                24 hours; R&amp;D supports custom connector and packaging development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client logo chips */}
      <div className="section">
        <div className="container-site">
          <SectionHeading align="center" title="Meet Our Clients" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {CLIENT_BRANDS.map((b) => (
              <span className="chip" key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
