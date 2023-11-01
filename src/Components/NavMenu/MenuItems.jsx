import React from "react";
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
    Bars3Icon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";



// nav list component
const navListItems = [
    {
        label: "HOME",
        icon: HomeIcon,
    },
    {
        label: "ABOUT ME",
        icon: UserCircleIcon,
    },
    {
        label: "SERVICES",
        icon: ComputerDesktopIcon,
    },
    {
        label: "SKILLS",
        icon: Cog8ToothIcon,
    },
    {
        label: "PORTFOLIO",
        icon: Squares2X2Icon,
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
            {navListItems.map(({ label, icon }) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    className="font-medium text-sm"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-purple-50">
                        {React.createElement(icon, { className: "h-[16px] w-[16px] text-mypink-800" })}{" "}
                        <span className="text-mypink-800"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}



export default function MenuItems() {


    return (
            <div className="relative mx-auto flex items-center justify-between text-mypink-800 ">
                <div className="lg:block flex items-center ms-20 md:ms-10">
                    <NavList />
                </div>
            </div>
    );
}