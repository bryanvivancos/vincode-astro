// src/components/Sidebar.tsx
import { useStore } from '@nanostores/react';
import { isMenuOpen, toggleMenu } from '../../store/menuStore';
import { CloseXIcon } from '../icons';
import { navbar_items } from '../../CONSTANTS';


export default function MobileNav( {currentPath} : {currentPath: string}) {
  
  const $isMenuOpen = useStore(isMenuOpen);
  const isOnPage = navbar_items.some(item => `/${item.htmlId}` === currentPath)

  return (
    <aside className={`z-10000 fixed inset-0 bg-background-dark transition-transform  flex justify-center py-32 ${
      $isMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>

      <button
				className='absolute top-5 right-5'
				onClick={() => toggleMenu()}
			>
				<CloseXIcon/>
			</button>

      <div className='flex flex-col gap-20 items-center'>
				<a href='/' 
          className="flex items-center gap-2 sm:gap-4"
          onClick={() => toggleMenu()}  
        >
          <p className="text-5xl md:text-7xl flex items-center font-black text-text-primary font-Codesaver text-center">
            Vin<span className="text-[#0090c7] font-black">{`<0`}</span>de
          </p>
        </a>

        <nav className='flex flex-col items-center gap-5'>
          {navbar_items.map(item => (
            <a
              href={item.htmlId}
              key={item.id}
              onClick={() => toggleMenu()}
              className={`${currentPath === `/${item.htmlId}` 
                ? "text-primary"
                : "text-text-primary hover:text-primary"}`}>
                {item.name}
              </a>
          ))}
        </nav>

        <a href={`/contact`} 
          className="py-2 md:py-3 px-3 sm:px-4 md:px-5 bg-primary rounded-lg text-base font-bold text-text-primary transition-all duration-300 ease-in-out hover:bg-[#0090c7] hover:transform hover:-translate-y-0.5"
          onClick={() => toggleMenu()}
        >
        Empecemos
        </a>
			</div>
    </aside>
  );
}