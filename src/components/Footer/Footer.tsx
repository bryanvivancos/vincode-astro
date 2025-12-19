import { Icon } from "../icons/Icon";
import { VINCODE_IG } from '../../CONSTANTS';
import { useEffect, useState } from 'react';


export default function Footer({initialPathname} : {initialPathname: string}) {
  // const location = useLocation()
  // const navigate = useNavigate()
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
    <footer className="py-10 sm:py-12 md:py-15 place-items-center">
      <div className="max-w-240 w-full px-6">
        <div className="flex flex-col gap-6 items-center">

          {currentPath !== "/" && currentPath !== "/form-message/message-sent" && <div className='grid grid-cols-3 w-full place-items-center gap-1 md:gap-6'>
            <a href='/#services' className="md:text-base text-sm font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary ">Servicios</a>

            <a href='/#projects' className="md:text-base text-sm  font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Proyectos</a>

            <a href='/#others' className="md:text-base text-sm  font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Otros Proyectos</a>

          </div>
          }

          <div className="flex gap-4 items-center">

            <a href={VINCODE_IG} target="_blank" className="flex items-center justify-center transition-all opacity-90 duration-300 ease-in-out hover:opacity-40" aria-label="Instagram">
              <Icon name="InstagramIcon" width={24} height={24} color="#91B8C9" />
            </a>
            
          </div>

          <p className="text-base font-normal text-text-secondary text-center">
            © 2025 Vincode All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}