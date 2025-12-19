
import { navigate } from 'astro:transitions/client';
import { navbar_items } from '../../CONSTANTS';
import { useEffect, useState } from 'react';

export default function Header({initialPathname} : {initialPathname: string}) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // Estado para rastrear la ruta actual y que React re-renderice
  const [currentPath, setCurrentPath] = useState(initialPathname);

  useEffect(() => {
    // Escuchar cambios de navegación de Astro para actualizar el estado
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    document.addEventListener('astro:after-navigation', handleNavigation);
    return () => document.removeEventListener('astro:after-navigation', handleNavigation);
  }, []);

  return (
    <header className="fixed bg-background-dark border-b border-[#e5e8eb] z-1000 top-0 left-0 right-0 place-items-center">

      <div className="flex justify-between items-center h-16 max-w-7xl w-full py-4 md:py-0 px-4 sm:px-6 md:px-10">

        <a href='/' className="flex items-center gap-2 sm:gap-4">
          {/* <LogoIcon width={16} height={16} color="#FFFFFF" /> */}
          <p className="text-2xl md:text-3xl flex items-center font-black h-6 text-text-primary font-Codesaver">
            Vin<span className="text-[#0090c7] font-black">{`<0`}</span>de
          </p>
        </a>

        <nav className="flex items-center gap-8">

          {currentPath === '/' &&
            <div className="flex items-center gap-9">
              {navbar_items.map(item => (

                <a key={item.id} href={`#${item.htmlId}`} className="text-base font-medium text-text-primary transition-all duration-300 ease-in-out hover:text-primary lg:block hidden">{item.name}</a>

              ))
              }
            </div>
          }

          {currentPath !== "/form-message/message-sent" && <a href={`/#contact`} className="py-2 md:py-3 px-3 sm:px-4 md:px-5 bg-primary rounded-lg text-base font-bold text-text-primary transition-all duration-300 ease-in-out hover:bg-[#0090c7] hover:transform hover:-translate-y-0.5">Empecemos</a>}
        </nav>
      </div>
    </header>
  );
}
