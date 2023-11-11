import {useEffect, useState} from "react";
import ContactDropdown from "./ContactDropdown";
import MenuItems from "./MenuItems";
import { navItems } from "./NavData";
import { Navbar, Collapse, Typography, IconButton, } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import './NavMenu.css'




export default function NavMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false); //collapse on smaller screens
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);//collapse on smaller screens
    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [topNavClass, setTopNavClass] = useState('top-0');


    useEffect(() => { //collapse on smaller screens
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    useEffect(() => {
        const handdleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                setTopNavClass('top-0');
            } else {
                setTopNavClass('-top-[50px]')
            }
            setPrevScrollpos(currentScrollPos);
        };
        window.onscroll = handdleScroll;

        return () => {
            window.onscroll = null;
        };
    }, [prevScrollpos]);

    return (

        <Navbar color="transparent" className={`mx-auto p-2 lg:pl-6 tracking-wider h-max max-w-full fixed ease-in-out duration-300 z-100 ${topNavClass}`}>
            <div className="px-0 xl:px-20 relative mx-auto flex items-center justify-between text-mypink-800">

                    <Typography as="a" href="/Home" className="divide-x-2 divide-gray-300 font-sans me-20 flex items-start mr-4 cursor-pointer py-1.5 font-medium flex items-center">
                        <img src="./src/assets/K.svg" className="h-15 w-15 pr-2" /> 
                        <h1 className="font-CinzelBlack px-2 text-xl lg:text-2xl ">Kristine Algario</h1>
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