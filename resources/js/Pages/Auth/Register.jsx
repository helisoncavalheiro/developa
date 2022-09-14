import Auth from "@/Layouts/Auth";
import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function submit(e) {
    e.preventDefault();
    post("/register");
  }
  return (
    <div className='card'>
      <div className='card-header text-center pt-4'>
        <h5>Crie sua conta</h5>
      </div>
      <div className='card-body'>
        <form role='form' onSubmit={submit}>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Nome'
              aria-label='Nome'
              autoComplete='new-password'
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
            />
            {errors.name != null && (
              <p className='text-danger'>{errors.password}</p>
            )}
          </div>
          <div className='mb-3'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              aria-label='Email'
              autoComplete='off'
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
            />
            {errors.email != null && (
              <p className='text-danger'>{errors.email}</p>
            )}
          </div>
          <div className='mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Senha'
              aria-label='Senha'
              autoComplete='new-password'
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
            />
            {errors.password != null && (
              <p className='text-danger'>{errors.password}</p>
            )}
          </div>
          <div className='mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Confirme a senha'
              aria-label='Confirme a senha'
              autoComplete='new-password'
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
            />
            {errors.password_confirmation != null && (
              <p className='text-danger'>{errors.password_confirmation}</p>
            )}
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='btn bg-gradient-dark w-100 my-4 mb-2'>
              Criar conta
            </button>
          </div>
        </form>
        <p className='text-sm mt-3 mb-0'>
          Já possui uma conta?{" "}
          <Link href='/login' className='text-dark font-weight-bolder'>
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

Register.layout = (page) => <Auth>{page}</Auth>;

export default Register;
