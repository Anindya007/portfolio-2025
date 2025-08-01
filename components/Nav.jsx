"use client";
import Link from "next/link";
import { usePathname} from 'next/navigation';

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

const Nav = () => {

    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={
                        `${pathname === link.path ? "text-accent border-b-2 border-accent" : ""} capitalize hover:border-b-2 hover:text-accent transition-all`
                    }
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}

export default Nav;