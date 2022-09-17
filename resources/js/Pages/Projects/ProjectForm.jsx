import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

function ProjectForm() {
  const { data, setData, errors, post, processing, progress } = useForm({
    name: "",
    description: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post("/projects");
  };

  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-header'>
            <h4 className='card-title'>Novo projeto</h4>
          </div>
          <div className='card-body'>
            <form>
              <div className='row mb-3'>
                <div className='col-sm-2'>
                  <label htmlFor='name' className='col-form-label required'>
                    Nome
                  </label>
                </div>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className={`form-control ${errors.name && "is-invalid"}`}
                    id='name'
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  {errors.name && (
                    <span className='text-danger fw-bold'>{errors.name}</span>
                  )}
                </div>
              </div>

              <div className='row mb-3'>
                <div className='col-sm-2'>
                  <label className='col-form-label'>Descrição</label>
                </div>
                <div className='col-sm-10'>
                  <textarea
                    className={`form-control ${
                      errors.description && "is-invalid"
                    }`}
                    value={data.description}
                    onChange={(e) =>
                      setData("description", e.target.value)
                    }></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className='card-body d-flex justify-content-end'>
            <button
              className='btn btn-success '
              onClick={submit}
              disabled={processing}>
              <FontAwesomeIcon icon={faCheckCircle} /> Salvar
              {processing && (
                <>
                  &nbsp;
                  <span
                    class='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'></span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
