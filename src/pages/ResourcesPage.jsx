import ResourceIndex from '../components/resources/ResourceIndex';
import CtaBand from '../components/cta/CtaBand';

export default function ResourcesPage() {
  return (
    <>
      <div className="section">
        <div className="container-site">
          <ResourceIndex />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
