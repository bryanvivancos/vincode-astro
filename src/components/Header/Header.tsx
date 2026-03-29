import { useEffect, useState } from "react";
import { navbar_items } from "../../CONSTANTS";
import { isMenuOpen, toggleMenu } from "../../store/menuStore";
import { CloseXIcon, Menu2Icon } from "../icons";

export default function Header({ currentPath }: { currentPath: string }) {
    const path = currentPath.replace(/\/$/, "").split("/")[1] ?? "";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky-scroll-navbar navbar-glass z-100 flex items-center justify-center transition-all duration-500 ease-out ${scrolled ? "backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-lg" : ""}`}
        >
            <div className="section-container flex justify-between items-center h-20 w-full">
                <a href="/" className="flex items-center gap-2 group">
                    <p className="text-2xl md:text-3xl flex items-center font-black text-text-primary font-Codesaver transition-all duration-200 group-hover:opacity-80">
                        Vin
                        <span className="text-primary font-black">{`<0`}</span>
                        de
                    </p>
                </a>

                <nav className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        {navbar_items.map((item) => (
                            <a
                                key={item.id}
                                href={`/${item.htmlId}`}
                                className={`text-sm font-medium transition-all duration-200 ease-out
                                    ${path === item.htmlId 
                                        ? "text-primary" 
                                        : "text-text-secondary hover:text-text-primary"}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {path !== "contact" && (
                        <a
                            href={`/contact`}
                            className="btn-primary hidden sm:block text-sm py-2.5 px-6"
                        >
                            Empecemos
                        </a>
                    )}

                    <button
                        className="md:hidden cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
                        onClick={() => toggleMenu()}
                    >
                        {isMenuOpen ? <Menu2Icon /> : <CloseXIcon />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
