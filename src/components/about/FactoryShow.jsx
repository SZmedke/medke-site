const SHOTS = [
  { src: '/assets/images/about/factory-01.jpg', alt: 'Medke factory production area' },
  { src: '/assets/images/about/factory-02.jpg', alt: 'Medke assembly workbench' },
  { src: '/assets/images/about/factory-03.jpg', alt: 'Medke production line detail' },
];

export default function FactoryShow() {
  return (
    <div className="factory-grid" data-component="factory-show">
      {SHOTS.map((s) => (
        <figure className="factory-card" key={s.src}>
          <img src={s.src} alt={s.alt} width="400" height="300" loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
