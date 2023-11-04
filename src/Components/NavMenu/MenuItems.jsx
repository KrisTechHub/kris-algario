import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from "react-router-dom";
import { navItems } from "./NavData";
import { MenuItem } from "@material-tailwind/react";




function NavList({ navListItems, isVertical = false }) {
    const containerClasses = isVertical
        ? "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-col lg:items-start"
        : "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center";
        
    return (
            <ul className={containerClasses}>
                {navListItems.map(({ label, icon, link }) => (
                    <Link key={label} as="a" to={link} variant="small" className="font-medium text-sm" >
                        <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-purple-50">
                            {React.createElement(icon, { className: "h-[16px] w-[16px] text-mypink-800" })}{" "}
                            <span className="text-mypink-800">{label}</span>
                        </MenuItem>
                    </Link>
                ))}
            </ul>
    );
}

NavList.propTypes = {
    navListItems: PropTypes.array.isRequired, // Define prop validation for navListItems
    isVertical: PropTypes.bool,
};

export default function MenuItems({ isVertical = true }) {
    return (
            <div>
                <NavList navListItems={navItems} isVertical={isVertical} />
            </div>
    );
}

MenuItems.propTypes = {
    isVertical: PropTypes.bool,
};