import React from "react";
import SideBar from "./SideBar";
import './SidebarDrawer.css';
import { Drawer, Avatar } from "@material-tailwind/react";
import {
    HomeIcon,
    ArrowRightOnRectangleIcon,
    UserCircleIcon,
    ComputerDesktopIcon,
    Cog8ToothIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Link as ScrollLink } from 'react-scroll';
import Kpink from '../../assets/Kpink.svg';
import krisphoto from '../../assets/krisphoto.jpg';




export default function SidebarDrawer() {
    const [open, setOpen] = React.useState(false);
    

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className="shadow-xl z-50 opacity-95 hidden lg:block lg:mt-[70px] xl:mt-[90px] xl:mt-[110px] w-16 text-mypink-800 bg-blue-gray-50 shadow-xl shadow-blue-gray-900/5 custom-rounded-tr custom-rounded-br fixed sb">    
            <div className="p-2 pt-5">
                <ScrollLink to="Home" smooth={true} duration={500}>
                    <img className="w-10 py-2" src={Kpink} />
                </ScrollLink>

                <hr className="w-12 my-2 border-gray-400" />

                <ScrollLink to="Home" smooth={true} duration={500}>
                    <HomeIcon className="cursor-pointer p-2 m-1" />
                </ScrollLink>

                <ScrollLink to="About" smooth={true} duration={500}>
                    <UserCircleIcon className="cursor-pointer p-2 m-1" />
                </ScrollLink>

                <ScrollLink to="Services" smooth={true} duration={500}>
                    <ComputerDesktopIcon className="cursor-pointer p-2 m-1" />
                </ScrollLink>

                <ScrollLink to="Skills" smooth={true} duration={500}>
                    <Cog8ToothIcon className="cursor-pointer p-2 m-1" />
                </ScrollLink>

                <ScrollLink to="Portfolio" smooth={true} duration={500}>
                    <Squares2X2Icon className="cursor-pointer p-2 m-1" />
                </ScrollLink>

                <ArrowRightOnRectangleIcon onClick={openDrawer} className="p-2 flex text-center text-mypink-800 cursor-pointer p-1 m-1" />
            </div>
            <div className="h-40"></div>
            <div className="py-3 text-center custom-rounded-br shadow-xl cursor-pointer">
                <ScrollLink to="About" smooth={true} duration={500}>
                    <Avatar variant="circular" size="sm" alt="portrait" src={krisphoto} />
                </ScrollLink>
            </div>

            <Drawer open={open} onClose={closeDrawer} className="p-4 w-full max-w-[18rem] p-4">
                <SideBar />
            </Drawer>
        </div>
    );
}