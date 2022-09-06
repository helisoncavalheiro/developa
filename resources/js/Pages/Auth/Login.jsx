import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: "",
  });

  function submit(e) {
    e.preventDefault();
    post("/login");
  }
  return (
    <main className='main-content mt-0'>
      <section>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto'>
              <div className='card card-plain'>
                <div className='card-header pb-0 text-start'>
                  <h4 className='font-weight-bolder'>Entrar</h4>
                  <p className='mb-0'>Insira seu email e senha para entrar.</p>
                </div>
                <div className='card-body'>
                  <form role='form' onSubmit={submit}>
                    <div className='mb-3'>
                      <input
                        type='email'
                        className='form-control form-control-lg'
                        placeholder='Email'
                        aria-label='Email'
                        value={data.email}
                        onChange={(e) => {
                          setData("email", e.target.value);
                        }}
                      />
                    </div>
                    {errors.email != null && (
                      <p className='text-danger'>{errors.email}</p>
                    )}
                    <div className='mb-3'>
                      <input
                        type='password'
                        className='form-control form-control-lg'
                        placeholder='Senha'
                        aria-label='Senha'
                        value={data.password}
                        onChange={(e) => {
                          setData("password", e.target.value);
                        }}
                      />
                    </div>
                    {errors.password != null && (
                      <p className='text-danger'>{errors.password}</p>
                    )}
                    <div className='form-check form-switch'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        id='rememberMe'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='rememberMe'
                        value={data.remember}
                        onChange={(e) => setData("remember", e.target.value)}>
                        Lembre-me
                      </label>
                    </div>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0'>
                        Entrar
                      </button>
                    </div>
                  </form>
                </div>
                <div className='card-footer text-center pt-0 px-lg-2 px-1'>
                  <p className='mb-4 text-sm mx-auto'>
                    Não possui uma conta?{" "}
                    <Link
                      href='/register'
                      className='text-primary text-gradient font-weight-bold'>
                      Registrar
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
