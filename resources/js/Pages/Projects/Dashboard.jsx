import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

const Dashboard = () => {
  return (
    <div className='row'>
      <div className='card'>
        <div className='card-header d-flex justify-content-between'>
          <h5 className='card-title'>Meus projetos</h5>
          <Link
            as='button'
            href='/projects/new'
            class='btn bg-gradient-primary '>
            <FontAwesomeIcon icon={faPlusCircle} />
            &nbsp; Novo projeto
          </Link>
        </div>
        <div className='card-body'></div>
      </div>
    </div>
  );
};

export default Dashboard;
