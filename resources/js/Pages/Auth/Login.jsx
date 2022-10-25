import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Auth from "@/Layouts/Auth";

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
    <div className='card'>
      <div className='card-header text-start'>
        <h4 className='card-title'>Entrar</h4>
        <p className='mb-0'>Insira seu email e senha para entrar.</p>
      </div>
      <div className='card-body'>
        <form role='form' onSubmit={submit}>
          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
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
              className='form-control'
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
          <div className='row'>
            <button
              type='submit'
              className='btn btn-lg btn-block btn-primary mt-4 mb-0 fw-bold'>
              Entrar
            </button>
          </div>
        </form>
      </div>
      <div className='card-footer text-center'>
        <p className='mb-4 text-sm mx-auto'>
          Não possui uma conta?{" "}
          <Link href='/register' className='text-primary text-gradient fw-bold'>
            Registrar
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.layout = (page) => <Auth>{page}</Auth>;
export default Login;
