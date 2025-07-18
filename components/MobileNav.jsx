"use client";

import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger, SheetClose} from "./ui/sheet";
import {Button} from "./ui/button";
import {usePathname} from "next/navigation";
import {CiMenuFries} from "react-icons/ci";

const links = [{
    name: "home",
    path: "/"
}, {
    name: "projects",
    path: "/projects"  
}, {
    name: "contact",
    path: "/contact" 
}]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-white cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
                <div className="font-bold text-xl mb-8 mt-32 mx-auto">
                    <SheetClose asChild>
                        <Link href="/contact?focus=firstname">
                            <Button className="hover:bg-secondary hover:text-secondary-foreground cursor-pointer">
                                Hire Me
                            </Button>
                        </Link>
                    </SheetClose>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link
                                href={link.path}
                                className={
                                    `${pathname === link.path ? "text-accent border-b-2 border-accent" : ""} capitalize hover:border-b-2 hover:text-accent transition-all`
                                }
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;