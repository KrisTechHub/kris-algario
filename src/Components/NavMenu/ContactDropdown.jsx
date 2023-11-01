import React from 'react';

import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    Cog8ToothIcon,
    HomeIcon,
    ComputerDesktopIcon,
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    Bars2Icon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";


// profile menu component
const profileMenuItems = [
    {
        label: "Job Profiles",
        icon: UserCircleIcon,
    },
    {
        label: "Socials",
        icon: Cog6ToothIcon,
    },
    {
        label: "Email",
        icon: InboxArrowDownIcon,
    }
];


function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    className="tracking-wide flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto text-mypink-800 hover:bg-purple-50"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="kris algario"
                        className="border border-mypink-800 p-0.5"
                        src="./src/assets/krisphoto.jpg"
                    />
                    <p>Contact</p>
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>

            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }) => {
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={"flex items-center gap-2 rounded text-mypink-800 tracking-wide"}
                        >
                            {React.createElement(icon, {
                                className: "h-4 w-4",
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}



const ContactDropdown = () => {
    return (
        <div>
            <ProfileMenu />
        </div>
    );
};


export default ContactDropdown;