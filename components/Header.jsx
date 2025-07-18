import Link from "next/link";
import {Button} from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center gap-8">
            <div className="container mx-auto">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Anindya<span className="text-accent">.</span>
                    </h1>
                </Link>              
            </div>

            <div className="hidden xl:flex items-center gap-8">
                
                <Nav/>
                <Link href="/contact?focus=firstname">
                    <Button className="hover:bg-secondary hover:text-secondary-foreground cursor-pointer">
                        Hire Me
                    </Button>
                </Link>
                                   
            </div>

            <div className="xl:hidden">
                <MobileNav/>
            </div>
            </div>
        </header>
    )
}

export default Header;