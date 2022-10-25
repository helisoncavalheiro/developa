import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

function ProjectItem({ project }) {
  return (
    <div
      className='col-sm-12 col-md-6 col-lg-4'
      id={`projectCard-${project.id}`}>
      <div className='card card-body card-hover'>
        <h5 className='card-title'>
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        </h5>
        <p className='card-subtitle'>
          {" "}
          <FontAwesomeIcon icon={faUserCircle} /> {project.owner.name}{" "}
        </p>
        <p className='card-text text-muted fs-6 mt-3'>{project.description}</p>
      </div>
    </div>
  );
}

const Home = ({ projects }) => {
  return (
    <div className='row'>
      <div className='card'>
        <div className='card-header d-flex justify-content-between'>
          <h5 className='card-title'>Meus projetos</h5>
          <Link as='button' href='/projects/new' className='btn btn-primary '>
            <FontAwesomeIcon icon={faPlusCircle} />
            &nbsp; Novo projeto
          </Link>
        </div>
        <div className='card-body'>
          <div className='row'>
            {projects.map((project) => (
              <ProjectItem
                project={project}
                key={`projectCard-${project.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
