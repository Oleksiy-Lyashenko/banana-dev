import { SliderProjects } from '../../components/SliderProjects/SliderProjects';
import '../../styles/components/projects_page.scss';

export const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-page__content">
        <div className="container">
          <h2 className="main__page-title our-clients__title">featured projects </h2>

          <SliderProjects />
        </div>
      </div>
    </div>
  );
}
