import InstagramIcon from '../icons/InstagramIcon';
import { VINCODE_IG } from '../../CONSTANTS';
import { navigate } from 'astro:transitions/client';
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
      <div className="max-w-[960px] w-full px-6">
        <div className="flex flex-col gap-6 items-center">

          {currentPath !== "/" && <div className='md:max-w-[960px] flex justify-between w-full gap-1 md:gap-6'>
            <a onClick={() => navigate("/", { state: { scrollTo: "services" } })} className="md:text-base text-sm font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary ">Servicios</a>

            <a onClick={() => navigate("/", { state: { scrollTo: "projects" } })} className="md:text-base text-sm  font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Proyectos</a>

            <a onClick={() => navigate("/", { state: { scrollTo: "others" } })} className="md:text-base text-sm  font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Otros Proyectos</a>

            {/* <a onClick={() => navigate("/", { state: { scrollTo: "contact" } })} className="md:text-base text-sm  font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Contáctanos</a> */}
          </div>
          }

          {/* <div className="flex md:flex-row md:gap-4 md:items-baseline flex-wrap justify-center items-center gap-3 flex-col">
            <a href="#privacy" className="text-base font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Privacy Policy</a>
            <a href="#terms" className="text-base font-normal text-text-secondary transition-all duration-300 ease-in-out hover:text-primary">Terms of Service</a>
          </div> */}

          <div className="flex gap-4 items-center">
            {/*<a href="#twitter" className="flex items-center justify-center transition-all opacity-90 duration-300 ease-in-out hover:opacity-40" aria-label="Twitter">
              <TwitterIcon width={24} height={24} color="#91B8C9" />
            </a> */}
            <a href={VINCODE_IG} target="_blank" className="flex items-center justify-center transition-all opacity-90 duration-300 ease-in-out hover:opacity-40" aria-label="Instagram">
              <InstagramIcon width={24} height={24} color="#91B8C9" />
            </a>
            {/* <a href="#facebook" className="flex items-center justify-center transition-all opacity-90 duration-300 ease-in-out hover:opacity-40" aria-label="Facebook">
              <FacebookIcon width={24} height={24} color="#91B8C9" />
            </a> */}
          </div>

          <p className="text-base font-normal text-text-secondary text-center">
            © 2025 Vincode All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}