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
        <main className="main-content mt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-5 col-md-7">
                        <div className="card">
                            <div className="card-header text-center pt-4">
                                <h5>Crie sua conta</h5>
                            </div>
                            <div className="card-body">
                                <form role="form" onSubmit={submit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nome"
                                            aria-label="Nome"
                                            autoComplete="new-password"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            aria-label="Email"
                                            autoComplete="off"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Senha"
                                            aria-label="Senha"
                                            autoComplete="new-password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirme a senha"
                                            aria-label="Confirme a senha"
                                            autoComplete="new-password"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn bg-gradient-dark w-100 my-4 mb-2"
                                        >
                                            Criar conta
                                        </button>
                                    </div>
                                </form>
                                <p className="text-sm mt-3 mb-0">
                                    Já possui uma conta?{" "}
                                    <Link
                                        href="/login"
                                        className="text-dark font-weight-bolder"
                                    >
                                        Entrar
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
