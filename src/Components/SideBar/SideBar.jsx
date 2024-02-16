import React from "react";
import MenuItems from "../NavMenu/MenuItems";
import krisphoto from '../../assets/krisphoto.jpg';
import Kpink from '../../assets/Kpink.svg';

import { Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Alert } from "@material-tailwind/react";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, CubeTransparentIcon } from "@heroicons/react/24/outline";

export default function SideBar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div>

            <div className="flex items-center justify-center pt-4">
                <img src={krisphoto} alt="brand" className="h-20 w-20 space rounded-full" />
            </div>
            
            <Typography variant="h5" className="font-mono flex items-center text-mypink-800 justify-center p-4">
                <img src={Kpink} alt="brand" className="h-8 w-8" />
                ristine Algario
            </Typography>

            <List>
                <Accordion open={open === 1} icon={
                        <ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />
                }>

                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 text-mypink-800">
                            <ListItemPrefix>
                                <PhoneArrowDownLeftIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography className="mr-auto font-bold">
                                Contact 
                            </Typography>
                        </AccordionHeader>
                    </ListItem>

                    <AccordionBody className="py-1">
                        <List className="p-0 text-mypink-800">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Work Profiles
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Socials
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Email
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
            
                <hr className="my-2 border-blue-gray-50" />
                <div>
                    <MenuItems className="text-mypink-800 font-bold" />
                </div>
                
            </List>


            {/* ALERT */}
            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                    Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                    Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                    and premium.
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80"
                        onClick={() => setOpenAlert(false)}
                    >
                        Dismiss
                    </Typography>
                    <Typography as="a" href="#" variant="small" className="font-medium">
                        Upgrade Now
                    </Typography>
                </div>
            </Alert>
        </div>
    );
}