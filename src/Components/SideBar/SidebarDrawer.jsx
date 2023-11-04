import React from "react";
import SideBar from "./SideBar";
import { Drawer, Button } from "@material-tailwind/react";
import {
    HomeIcon,
    ArrowsPointingOutIcon,
    UserCircleIcon,
    ComputerDesktopIcon,
    Cog8ToothIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";



export default function SidebarDrawer() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className="p-2 w-14 text-mypink-800 bg-gray-50 shadow-xl shadow-blue-gray-900/5 rounded-tr-md rounded-br-md">    
            <img src="./src/assets/K.svg" className="h-12 w-12 pr-2" /> 

                <hr className="w-12 my-2 border-gray-400" />
            <HomeIcon className="cursor-pointer"/>

            <ArrowsPointingOutIcon onClick={openDrawer} className="p-1 flex text-center text-mypink-800 cursor-pointer"/>
            <Drawer open={open} onClose={closeDrawer} className="p-4 w-full max-w-[18rem] p-4">
                <SideBar />
            </Drawer>
        </div>
    );
}