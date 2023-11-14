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



export default function SidebarDrawer() {
    const [open, setOpen] = React.useState(false);
    

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className="hidden lg:block lg:mt-[70px] xl:mt-[90px] xl:mt-[110px] w-16 text-mypink-800 bg-blue-gray-50 shadow-xl shadow-blue-gray-900/5 custom-rounded-tr fixed sb">    
            <div className="p-2 pt-5">
                <img className="w-10 py-2" src="./src/assets/K.svg" />
                <hr className="w-12 my-2 border-gray-400" />
                <HomeIcon className="cursor-pointer p-2 m-1" />
                <UserCircleIcon className="cursor-pointer p-2 m-1" />
                <ComputerDesktopIcon className="cursor-pointer p-2 m-1" />
                <Cog8ToothIcon className="cursor-pointer p-2 m-1" />
                <Squares2X2Icon className="cursor-pointer p-2 m-1" />
                <ArrowRightOnRectangleIcon onClick={openDrawer} className="p-2 flex text-center text-mypink-800 cursor-pointer p-1 m-1" />
            </div>
            <div className="h-40"></div>
            <div className="py-3 text-center custom-rounded-br">
                <Avatar variant="circular" size="sm" alt="kris algario" src="./src/assets/krisphoto.jpg" />
            </div>

            <Drawer open={open} onClose={closeDrawer} className="p-4 w-full max-w-[18rem] p-4">
                <SideBar />
            </Drawer>
        </div>
    );
}