import React from 'react';
import {useEffect, useState} from "react";
import ContactDropdown from "./ContactDropdown";
import MenuItems from "./MenuItems";
import { navItems } from "./NavData";
import { Navbar, Collapse, Typography, IconButton, } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import './NavMenu.css'
import logo from '../../assets/Kpink.svg';





export default function NavMenu() {
    const [isNavOpen, setIsNavOpen] = useState(false); //collapse on smaller screens
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);//collapse on smaller screens
    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [topNavClass, setTopNavClass] = useState('top-0');
    const [scrolled, setScrolled] = useState(false)


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
                setTopNavClass('top-0'); //scrolling
            } else {
                setTopNavClass('-top-[100px]') //when on top
            }
            setPrevScrollpos(currentScrollPos);
        };
        window.onscroll = handdleScroll;

        return () => {
            window.onscroll = null;
        };
    }, [prevScrollpos]);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50 ) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar color="transparent" className={scrolled ? `z-50 bg-blue-gray-50 mx-auto 2xl:px-[90px] tracking-wider max-w-full fixed ease-in-out duration-300 ${topNavClass}` : `z-50 mx-auto 2xl:px-[90px] tracking-wider max-w-full fixed ease-in-out duration-300 ${topNavClass}`}>
            {/* `mx-auto 2xl:px-[90px] tracking-wider max-w-full fixed ease-in-out duration-300 ${topNavClass}` */}
                <div className="relative flex items-center justify-between text-mypink-800">

                    <Typography as="a" href="/Home" className="divide-x-2 divide-gray-300 font-sans flex items-start cursor-pointer py-1.5 font-medium flex items-center">
                    <img src={logo} className="h-15 w-15 xs:h-12 xs:w-12 pr-2" /> 
                        <h1 className="font-CinzelBlack pl-2 text-sm md:text-lg lg:text-xl xl:text-2xl ">Kristine Algario</h1>
                    </Typography>
                    
                    <div className="flex items-center">
                        <div className="hidden lg:block flex text-mypink-800">
                            <MenuItems className="uppercase font-bold" navListItems={navItems} isVertical={false} showIcon={false}/>
                        </div>

                        <div className="flex text-inline items-center">
                            {/* Dropdown for Contact in Nav Bar */}
                            <ContactDropdown />

                            <IconButton size="sm" variant="text" onClick={toggleIsNavOpen} className="lg:hidden flex items-end text-mypink-800 ">
                                <Bars3Icon className="h-6 w-6 text-mypink-800" />
                            </IconButton>
                        </div>
                    </div>

                </div> 

                <Collapse open={isNavOpen} className="overflow-scroll bg-blue-gray-50 ">
                    <MenuItems className="text-mypink-800" isVertical={true} />
                </Collapse>

        </Navbar>

    );
}