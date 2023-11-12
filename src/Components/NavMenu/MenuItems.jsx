import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from "react-router-dom";
import { navItems } from "./NavData";
import { MenuItem } from "@material-tailwind/react";
import './NavMenu.css'




function NavList({ navListItems, isVertical = false, showIcon = true }) {
    const containerClasses = isVertical
        ? "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-col lg:items-start"
        : "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center";
        
    return (
        <ul className={`${containerClasses}`}>
                {navListItems.map(({ label, icon, link }) => (
                    <Link key={label} as="a" to={link} variant="small" className="pr-1 xl:pr-3" >
                        <MenuItem className="flex items-center lg:rounded-full hover:bg-purple-50 text-mypink-800">
                            {showIcon && React.createElement(icon, { className: "h-[16px] w-[16px]" })}
                            <span className="under-line text-[15px] text-mypink-800">{label}</span>
                        </MenuItem>
                    </Link>
                ))}
            </ul>
    );
}

NavList.propTypes = {
    navListItems: PropTypes.array.isRequired, // Define prop validation for navListItems
    isVertical: PropTypes.bool,
    showIcon: PropTypes.bool
};

export default function MenuItems({ isVertical = true, showIcon = true }) {
    return (
            <div>
            <NavList navListItems={navItems} isVertical={isVertical} showIcon={showIcon} />
            </div>
    );
}

MenuItems.propTypes = {
    isVertical: PropTypes.bool,
    showIcon: PropTypes.bool
};