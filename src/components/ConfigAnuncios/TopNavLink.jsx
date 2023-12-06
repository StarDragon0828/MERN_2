import { NavLink } from "react-router-dom";
import "./index.scss";

const TopNavLink = () => {
    const navLinks = [
        {
            name: "Min. e Destinos",
            path: "/config-anuncios/min-des",
        },
        {
            name: "Gênero",
            path: "/config-anuncios/genero",
        },
        {
            name: "Destaque",
            path: "/config-anuncios/destaque",
        },
        {
            name: "Reservas",
            path: "/config-anuncios/reservas",
        },
        {
            name: "Compras",
            path: "/config-anuncios/compras",
        },
        {
            name: "Validação",
            path: "/config-anuncios/validacao",
        },
    ];

    return (
        <div
            className="btn-group gap-3 top-nav-link"
            role="group"
            aria-label="Basic example"
        >
            {navLinks.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className="top-nav-link-item border-0 rounded-2"
                    activeClassName="selected"
                    style={{
                        filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25))",
                    }}
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
};

export default TopNavLink;
