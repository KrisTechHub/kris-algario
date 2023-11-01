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
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 tracking-wider">
            <div className="relative mx-auto flex items-center justify-between text-mypink-800 ">


                <div className="hidden lg:block flex items-center ms-20 md:ms-10">
                    <NavList />
                </div>

                <IconButton
                    size="sm"
                    color="text-mypink-800"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden flex items-end"
                >
                    <Bars3Icon className="h-6 w-6 text-mypink-800" />
                </IconButton>

            </div>


        </Navbar>
    );
}