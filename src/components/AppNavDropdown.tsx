import React from "react";
import {Link} from "react-router-dom";
import {AppNavDropdownProps} from "@props";

const AppNavDropdown = (dropdown: AppNavDropdownProps) => {

    return (
        <li className="nav-item dropdown mx-2">
            <a
                href="/"
                className="nav-link dropdown-toggle"
                id={`dropdownLink${dropdown.label.replace(/\s/g, "")}`}
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false">
                {dropdown.label}
            </a>
            <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark animate__animated animate__zoomIn animate__fastest shadow">
                {
                    dropdown.routes.map((route) => (
                        <li key={`dropdownItem${dropdown.label.replace(/\s/g, "")}${route.label}`}>
                            <Link className="dropdown-item" to={route.route}>{route.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    );

};

export default AppNavDropdown;
