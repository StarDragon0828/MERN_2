import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "./Context";
import Layouts from "./Layouts";
import Login from "../modules/Auth/Login";
import Dashboard from "../modules/Dashboard/Dashboard";
import Empresas from "../modules/Empresas/Empresas";
import Anuncios from "../modules/Anuncios/Anuncios";
import PalavrasChave from "../modules/PalavrasChave"
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
                  path="/palavras-chave"
                  element={<PalavrasChave />}
                />
              </Route>
            ) : (
              <Route caseSensitive={false} path="/" element={<Login />} />
            )}
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
};

export default Routing;
