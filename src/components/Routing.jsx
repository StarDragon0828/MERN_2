import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "./Context";
import Layouts from "./Layouts";
import Login from "../modules/Auth/Login";
import Dashboard from "../modules/Dashboard/Dashboard";
import Empresas from "../modules/Empresas/Empresas";
import Anuncios from "../modules/Anuncios/Anuncios";
import DestinosTuristicos from "../modules/DestinosTuristicos/DestinosTuristicos";
import ConfigAnuncios from "../modules/ConfigAnuncios";
import Compras from "../modules/ConfigAnuncios/Compras";
import Destaque from "../modules/ConfigAnuncios/Destaque";
import Genero from "../modules/ConfigAnuncios/Genero";
import MinDes from "../modules/ConfigAnuncios/MinDes";
import Reservas from "../modules/ConfigAnuncios/Reservas";
import Validacao from "../modules/ConfigAnuncios/Validacao";

const Routing = () => {
    const [context, setContext] = useState("");
    let token = localStorage.getItem("dashboard-token");

    useEffect(() => {
        console.log(token);
        if (token) {
            setContext((prevstate) => ({
                ...prevstate,
                auth: { login: true },
            }));
        }
    }, [token]);

    return (
        <>
            <Context.Provider value={[context, setContext]}>
                <Routes>
                    <Route caseSensitive={false} path="" element={<Layouts />}>
                        {context && context.auth ? (
                            <Route>
                                <Route
                                    caseSensitive={false}
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/empresas"
                                    element={<Empresas />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/anuncios"
                                    element={<Anuncios />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/destinos-turisticos"
                                    element={<DestinosTuristicos />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios"
                                    element={<ConfigAnuncios />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios/min-des"
                                    element={<MinDes />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios/genero"
                                    element={<Genero />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios/destaque"
                                    element={<Destaque />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios/reservas"
                                    element={<Reservas />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios/compras"
                                    element={<Compras />}
                                />
                                <Route
                                    caseSensitive={false}
                                    path="/config-anuncios/validacao"
                                    element={<Validacao />}
                                />
                            </Route>
                        ) : (
                            <Route
                                caseSensitive={false}
                                path="/"
                                element={<Login />}
                            />
                        )}
                    </Route>
                </Routes>
            </Context.Provider>
        </>
    );
};

export default Routing;
