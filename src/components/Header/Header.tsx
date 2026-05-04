import { useEffect, useState } from "react";
import { navbar_items } from "../../CONSTANTS";
import { toggleMenu } from "../../store/menuStore";
import { Menu2Icon } from "../icons";

export default function Header({ currentPath }: { currentPath: string }) {
    const path = currentPath.replace(/\/$/, "").split("/")[1] ?? "";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Navbar flotante tipo píldora */}
                <nav className={`
                    flex items-center justify-between
                    px-8 py-4 rounded-full
                    transition-all duration-300
                    ${scrolled 
                        ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-gray-100' 
                        : 'bg-white/60 backdrop-blur-md border border-white/20'}
                `}>
                    {/* Logo minimalista */}
                    <a href="/" className="group">
                        <span className="text-xl md:text-2xl font-black text-text-primary font-bold font-Codesaver transition-colors duration-200 group-hover:text-primary">
                            Vin<span className="text-primary">&lt;0</span>de
                        </span>
                    </a>

                    {/* Links centrados - solo desktop */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navbar_items.map((item) => (
                            <a
                                key={item.id}
                                href={`/${item.htmlId}`}
                                className={`
                                    text-base font-bold tracking-wide
                                    transition-all duration-200
                                    relative
                                    ${path === item.htmlId 
                                        ? "text-primary" 
                                        : "text-text-secondary hover:text-text-primary"}
                                `}
                            >
                                {item.name}
                                {path === item.htmlId && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        {path !== "contacto" && (
                            <a
                                href="/contacto"
                                className="hidden sm:block px-6 py-2.5 bg-primary text-white font-semibold rounded-full text-sm transition-all duration-200 hover:bg-primary-hover hover:scale-105"
                            >
                                Empecemos
                            </a>
                        )}

                        {/* Menu móvil */}
                        <button
                            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={() => toggleMenu()}
                            aria-label="Abrir menú"
                        >
                            <Menu2Icon />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
