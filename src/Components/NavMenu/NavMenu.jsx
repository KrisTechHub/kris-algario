import {useEffect, useState} from "react";
import ContactDropdown from "./ContactDropdown";
import MenuItems from "./MenuItems";
import { navItems } from "./NavData";
import { Navbar, Collapse, Typography, IconButton, } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";




export default function NavMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (

            <Navbar className="bg-transparent mx-auto p-2 lg:pl-6 tracking-wider h-max max-w-full rounded-none">
            <div className="px-0 xl:px-20 relative mx-auto flex items-center justify-between text-mypink-800 ">

                    <Typography as="a" href="/Home" className="divide-x-2 divide-gray-300 font-sans me-20 flex items-start mr-4 cursor-pointer py-1.5 font-medium flex items-center">
                        <img src="./src/assets/K.svg" className="h-12 w-12 pr-2" /> 
                    <h1 className="font-CinzelBold px-2 text-xl lg:text-2xl ">Kristine Algario</h1>
                    </Typography>
                    
                <div className="flex items-center">
                        <div className="hidden lg:block flex items-center ms-20 md:ms-10">
                            <MenuItems navListItems={navItems} isVertical={false} showIcon={false}/>
                        </div>

                        <div className="flex text-inline">
                            {/* Dropdown for Contact in Nav Bar */}
                            <ContactDropdown />

                            <IconButton size="sm" variant="text" onClick={toggleIsNavOpen} className="mr-2 lg:hidden flex items-end text-mypink-800">
                                <Bars3Icon className="h-6 w-6 text-mypink-800" />
                            </IconButton>
                        </div>
                    </div>

                </div> 

                <Collapse open={isNavOpen} className="overflow-scroll">
                    <MenuItems navListItems={navItems} isVertical={true} />
                </Collapse>

            </Navbar>

    );
}