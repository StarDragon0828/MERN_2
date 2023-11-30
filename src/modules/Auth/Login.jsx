import { Link } from "react-router-dom";
import { InputField, SubmitButton } from "../../components/FormElements";

const Login = () => {
    return (
        <>
            <div class="auth-page-wrapper login pt-5 vh-100">
                <div class="auth-page-content h-100">
                    <div class="container h-100">
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col-md-8 col-lg-6 col-xl-5">
                                <div class="card mt-4 login-card-bg-fill">
                                    <div class="card-body p-4 px-5">
                                        <div class="text-center mt-2">
                                            <Link to="/">
                                                <img src="./images/logo.png" alt="Login Logo" className="login-logo" />
                                            </Link>
                                            <h1 className="text-white fw-bold mb-0">turismo</h1>
                                            <p className="fs-2 text-white">intelligente</p>
                                        </div>
                                        <div class="p-2 mt-4 mx-2">
                                            <InputField type="email" name="email" title="Telefone, nome de usuario ou email" />
                                            <InputField type="password" name="password" title="Senha" />
                                            <SubmitButton type="button" title="Entrar" />               
                                            <div className="text-center mt-2">
                                                <Link className="text-decoration-none text-white" to="forgot-password">
                                                    Esqueceu sua senha?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;