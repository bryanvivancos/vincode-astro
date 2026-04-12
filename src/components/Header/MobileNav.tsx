// src/components/Sidebar.tsx
import { useStore } from '@nanostores/react';
import { isMenuOpen, toggleMenu } from '../../store/menuStore';
import { CloseXIcon } from '../icons';
import { navbar_items } from '../../CONSTANTS';


export default function MobileNav( {currentPath} : {currentPath: string}) {
  
  const $isMenuOpen = useStore(isMenuOpen);
  const path = currentPath.replace(/\/$/, '').split('/')[1] ?? '';

  return (
    <aside className={`z-10000 fixed inset-0 transition-all duration-300 ease-out flex flex-col items-center justify-center 
      ${
      $isMenuOpen 
      ? 'translate-x-0 scale-100 opacity-100 pointer-events-auto backdrop-blur-xl bg-gray-900/98' 
      : 'translate-x-4 scale-95 opacity-0 pointer-events-none backdrop-blur-0 bg-transparent'
    }`}>

      <button
        className='absolute top-6 right-6 p-2 rounded-full transition-all duration-200 hover:bg-gray-800 text-white'
        onClick={() => toggleMenu()}
        aria-label="Cerrar menú"
      >
        <CloseXIcon/>
      </button>

      <div className='flex flex-col gap-12 items-center'>
        <a href='/' 
          className="flex items-center group"
          onClick={() => toggleMenu()}  
        >
          <p className="text-5xl flex items-center font-black text-white font-Codesaver transition-all duration-200 group-hover:text-primary">
            Vin<span className="text-primary font-black">{`<0`}</span>de
          </p>
        </a>

        <nav className='flex flex-col items-center gap-5'>
          {navbar_items.map(item => (
            <a
              href={`/${item.htmlId}`}
              key={item.id}
              onClick={() => toggleMenu()}
              className={`text-2xl font-semibold transition-all duration-200 ease-out hover:scale-105 ${path === item.htmlId 
                ? "text-primary"
                : "text-gray-300 hover:text-white"}`}>
                {item.name}
              </a>
          ))}
        </nav>

        <a href={`/contact`} 
          className="btn-primary text-2xl hover:scale-105 transition-transform"
          onClick={() => toggleMenu()}
        >
          Empecemos
        </a>
      </div>
    </aside>
  );
}