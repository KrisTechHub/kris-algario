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
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    Bars2Icon,
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
        label: "Inbox",
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
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto text-pink-900"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="kris algario"
                        className="border border-pink-900 p-0.5"
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
                {profileMenuItems.map(({ label, icon }, key) => {
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={"flex items-center gap-2 rounded"}
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



// nav list component
const navListItems = [
    {
        label: "Account",
        icon: UserCircleIcon,
    },
    {
        label: "Blocks",
        icon: CubeTransparentIcon,
    },
    {
        label: "Docs",
        icon: CodeBracketSquareIcon,
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    className="font-medium text-pink-900"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}

export default function NavMenu() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-pink-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Kristine Algario
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="text-pink-700"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>

                <Button size="sm" variant="text" className="text-pink-900">
                    <span>Contact</span>
                </Button>
                <ProfileMenu />
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar>
    );
}