function Project({ project }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h5 className='card-title'>{project.name}</h5>
        <p className='card-subtitle text-muted'>ID do projeto: {project.id}</p>
      </div>
      <div className='card-body'></div>
    </div>
  );
}

export default Project;
