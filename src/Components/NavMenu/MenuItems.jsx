import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { navItems } from "./NavData";
import { MenuItem } from "@material-tailwind/react";
import { Link as ScrollLink } from 'react-scroll';
import './NavMenu.css'

function NavList({ className, navListItems, isVertical = false, showIcon = true }) {
    const containerClasses = isVertical
        ? "lg:flex-col lg:items-start"
        : "lg:flex-row lg:items-center";
        
    return (
        <nav className={`${containerClasses} flex gap-2 lg:mb-0 lg:mt-0 `}>
                {navListItems.map(({ label, icon, link }) => (
                    <ScrollLink 
                    key={label} 
                    to={link} 
                    spy={true}
                    smooth={true}
                    duration={500} 
                    variant="small" 
                    className="pr-1 xl:pr-3" 
                    >
                        <MenuItem className={`${className} menuItems flex items-center lg:rounded-full`}>
                            {showIcon && React.createElement(icon, { className: "me-3 h-[16px] w-[16px]" })}
                            <span className=" tracking-wider">{label}</span>    
                        </MenuItem>
                    </ScrollLink>
                ))}
        </nav>
    );
}

NavList.propTypes = {
    navListItems: PropTypes.array.isRequired, // Define prop validation for navListItems
    isVertical: PropTypes.bool,
    showIcon: PropTypes.bool,
    className: PropTypes.string
};

export default function MenuItems({ className, isVertical = true, showIcon = true }) {
    return (
            <div>
                <NavList className={className} navListItems={navItems} isVertical={isVertical} showIcon={showIcon} />
            </div>
    );
}

MenuItems.propTypes = {
    isVertical: PropTypes.bool,
    showIcon: PropTypes.bool,
    className: PropTypes.string
};