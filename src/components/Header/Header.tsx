import { navbar_items } from "../../CONSTANTS";
import { isMenuOpen, toggleMenu } from "../../store/menuStore";
import { CloseXIcon, Menu2Icon } from "../icons";

export default function Header({ currentPath }: { currentPath: string }) {
    const path = currentPath.replace(/\/$/, "").split("/")[1] ?? "";

    return (
        <header
            className={`sticky-scroll-navbar bg-background-dark border-b border-[#e5e8eb] z-100`}
        >
            <div className="flex justify-between items-center h-16 max-w-7xl w-full py-4 md:py-0 px-4 sm:px-6 md:px-10">
                <a href="/" className="flex items-center gap-2 sm:gap-4">
                    <p className="text-2xl md:text-3xl flex items-center font-black h-6 text-text-primary font-Codesaver">
                        Vin
                        <span className="text-[#0090c7] font-black">{`<0`}</span>
                        de
                    </p>
                </a>

                <nav className="flex items-center gap-4 lg:gap-9">
                    <div className="flex items-center gap-4 lg:gap-9">
                        {navbar_items.map((item) => (
                            <a
                                key={item.id}
                                href={`/${item.htmlId}`}
                                className={`text-base font-medium  transition-all duration-300 ease-in-out  md:block hidden 
                  ${path === item.htmlId ? "text-primary" : "text-text-primary hover:text-primary"}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {path !== "contact" && (
                        <a
                            href={`/contact`}
                            className="py-2 md:py-3 px-3 sm:px-4 md:px-5 bg-primary rounded-lg text-base font-bold text-text-primary transition-all duration-300 ease-in-out hover:bg-[#0090c7] hover:transform hover:-translate-y-0.5"
                        >
                            Empecemos
                        </a>
                    )}

                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => toggleMenu()}
                    >
                        {isMenuOpen ? <Menu2Icon /> : <CloseXIcon />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
