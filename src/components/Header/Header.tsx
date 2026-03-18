import { navbar_items } from "../../CONSTANTS";
import { isMenuOpen, toggleMenu } from "../../store/menuStore";
import { CloseXIcon, Menu2Icon } from "../icons";

export default function Header({ currentPath }: { currentPath: string }) {
    const path = currentPath.replace(/\/$/, "").split("/")[1] ?? "";

    return (
        <header
            className={`sticky-scroll-navbar glass-dark border-b border-border/50 z-100 flex items-center justify-center`}
        >
            <div className="flex justify-between items-center h-18 max-w-7xl w-full py-4 md:py-0 px-6 sm:px-8 md:px-12">
                <a href="/" className="flex items-center gap-2 sm:gap-4 group">
                    <p className="text-2xl md:text-3xl flex items-center font-black h-6 text-text-primary font-Codesaver transition-all duration-300 group-hover:scale-105">
                        Vin
                        <span className="text-primary font-black">{`<0`}</span>
                        de
                    </p>
                </a>

                <nav className="flex items-center gap-6 lg:gap-10">
                    <div className="flex items-center gap-6 lg:gap-10">
                        {navbar_items.map((item) => (
                            <a
                                key={item.id}
                                href={`/${item.htmlId}`}
                                className={`text-base font-medium transition-all duration-300 ease-out md:block hidden relative
                                    ${path === item.htmlId 
                                        ? "text-primary" 
                                        : "text-text-primary hover:text-primary"}
                                    after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-left after:transition-transform after:duration-300
                                    ${path === item.htmlId ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {path !== "contact" && (
                        <a
                            href={`/contact`}
                            className="btn-primary hidden sm:block"
                        >
                            Empecemos
                        </a>
                    )}

                    <button
                        className="md:hidden cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                        onClick={() => toggleMenu()}
                    >
                        {isMenuOpen ? <Menu2Icon /> : <CloseXIcon />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
