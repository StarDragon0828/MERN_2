import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "./Context";
import Layouts from "./Layouts";
import Login from "../modules/Auth/Login";

const Routing = () => {

    const [context, setContext] = useState('');

    return (
        <>
            <Context.Provider value={[context, setContext]}>
                <Routes path="/" caseSensitive={false} element={<Layouts />}>
                    <Route caseSensitive={false} path="/" element={<Login />} />
                </Routes>
            </Context.Provider>
        </>
    )

}

export default Routing;