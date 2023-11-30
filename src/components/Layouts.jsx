import { useContext } from "react";
import Context from "./Context";
import Asidebar from "./Asidebar";
import { Outlet } from "react-router-dom";

const Layouts = () => {

    const [context] = useContext(Context);

    return (
        <>
            {context &&
                <>
                    <Asidebar />
                    <Outlet />
                </>
            }

        </>
    )

}

export default Layouts;