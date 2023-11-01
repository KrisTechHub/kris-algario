import React from "react";
import ContactDropdown from "./ContactDropdown";
import MenuItems from "./MenuItems";

import {
    Navbar,
    Collapse,
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
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 tracking-wider">
            <div className="relative mx-auto flex items-center justify-between text-mypink-800 ">

                <Typography as="a" href="#" className="divide-x-2 divide-mypink-600 font-sans me-20 flex items-start mr-4 ml-2 cursor-pointer py-1.5 font-medium flex items-center">
                    <svg className="px-2 lg:text-lg md:text-base" width="63" height="34" viewBox="0 0 73 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.8966 24.1568L56.6549 22.3975H15.5772L9.88631 17.2549H4.19543V19.1495H9.88631L15.5772 24.1568H57.8966Z" fill="#500035" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.51724 20.7059C3.90748 20.7059 5.03448 19.5471 5.03448 18.1177C5.03448 16.6882 3.90748 15.5294 2.51724 15.5294C1.12701 15.5294 0 16.6882 0 18.1177C0 19.5471 1.12701 20.7059 2.51724 20.7059ZM2.51717 19.227C3.11299 19.227 3.59599 18.7303 3.59599 18.1177C3.59599 17.5051 3.11299 17.0085 2.51717 17.0085C1.92136 17.0085 1.43835 17.5051 1.43835 18.1177C1.43835 18.7303 1.92136 19.227 2.51717 19.227Z" fill="#500035" />
                        <path d="M60.0314 26.8683L61.2529 28.4706H30.2069L30.2069 26.7468L29.7874 26.7451H30.2069V26.7468L60.0314 26.8683Z" fill="#500035" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.5287 30.1961C29.9189 30.1961 31.046 29.0373 31.046 27.6079C31.046 26.1784 29.9189 25.0197 28.5287 25.0197C27.1385 25.0197 26.0115 26.1784 26.0115 27.6079C26.0115 29.0373 27.1385 30.1961 28.5287 30.1961ZM28.5286 28.7171C29.1245 28.7171 29.6075 28.2205 29.6075 27.6079C29.6075 26.9953 29.1245 26.4986 28.5286 26.4986C27.9328 26.4986 27.4498 26.9953 27.4498 27.6079C27.4498 28.2205 27.9328 28.7171 28.5286 28.7171Z" fill="#500035" />
                        <path d="M73 44L63.6984 31.5741H25.1224L21.8842 29.3334H16.7816V30.7593H21.8842L25.1224 33.2037H35.1804L32.7272 37.3797H28.7531V38.9074H31.5959V44H41.852V33.2037H53.6772L61.2245 44H73Z" fill="#500035" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.297 32.4146C16.6873 32.4146 17.8143 31.2558 17.8143 29.8264C17.8143 28.397 16.6873 27.2382 15.297 27.2382C13.9068 27.2382 12.7798 28.397 12.7798 29.8264C12.7798 31.2558 13.9068 32.4146 15.297 32.4146ZM15.297 30.9355C15.8928 30.9355 16.3758 30.4389 16.3758 29.8262C16.3758 29.2136 15.8928 28.717 15.297 28.717C14.7011 28.717 14.2181 29.2136 14.2181 29.8262C14.2181 30.4389 14.7011 30.9355 15.297 30.9355Z" fill="#500035" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.5876 40.7955C27.9778 40.7955 29.1048 39.6367 29.1048 38.2073C29.1048 36.7778 27.9778 35.619 26.5876 35.619C25.1973 35.619 24.0703 36.7778 24.0703 38.2073C24.0703 39.6367 25.1973 40.7955 26.5876 40.7955ZM26.5875 39.3165C27.1833 39.3165 27.6663 38.8199 27.6663 38.2073C27.6663 37.5947 27.1833 37.098 26.5875 37.098C25.9917 37.098 25.5087 37.5947 25.5087 38.2073C25.5087 38.8199 25.9917 39.3165 26.5875 39.3165Z" fill="#500035" />
                        <path d="M30.3164 0V18.1069H20.1379V19.8431H56.0682L72.1609 0H59.307L44.1252 18.1069H40.4816V0H30.3164Z" fill="#500035" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5697 21.4454C19.96 21.4454 21.087 20.2866 21.087 18.8572C21.087 17.4277 19.96 16.2689 18.5697 16.2689C17.1795 16.2689 16.0525 17.4277 16.0525 18.8572C16.0525 20.2866 17.1795 21.4454 18.5697 21.4454ZM18.5698 19.9665C19.1656 19.9665 19.6486 19.4699 19.6486 18.8572C19.6486 18.2446 19.1656 17.748 18.5698 17.748C17.974 17.748 17.491 18.2446 17.491 18.8572C17.491 19.4699 17.974 19.9665 18.5698 19.9665Z" fill="#500035" />
                    </svg>
                    
                    <h1 className="px-2 lg:text-lg md:text-base ">Algario</h1>
                </Typography>
                
                <div className="hidden lg:block flex items-center ms-20 md:ms-10">
                    <MenuItems navListItems={navListItems} isVertical={false} />
                </div>

                <div className="flex items-center">
                    {/* Dropdown for Contact in Nav Bar */}
                    <ContactDropdown /> 

                    <IconButton size="sm" variant="text" onClick={toggleIsNavOpen} className="mr-2 lg:hidden flex items-end text-mypink-800">
                        <Bars3Icon className="h-6 w-6 text-mypink-800" />
                    </IconButton>
                </div>

            </div> 

            <Collapse open={isNavOpen} className="overflow-scroll">
                <MenuItems />
            </Collapse>
        </Navbar>
    );
}