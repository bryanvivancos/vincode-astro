// src/components/Sidebar.tsx
import { useStore } from '@nanostores/react';
import { isMenuOpen, toggleMenu } from '../../store/menuStore';
import { CloseXIcon } from '../icons';
import { navbar_items } from '../../CONSTANTS';


export default function MobileNav( {currentPath} : {currentPath: string}) {
  
  const $isMenuOpen = useStore(isMenuOpen);
  const path = currentPath.replace(/\/$/, '').split('/')[1] ?? '';

  return (
    <aside className={`z-10000 fixed inset-0 glass-dark transition-all duration-500 ease-out flex justify-center py-32 ${
      $isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>

      <button
        className='absolute top-6 right-6 p-2 rounded-xl transition-all duration-300 hover:bg-white/10'
        onClick={() => toggleMenu()}
      >
        <CloseXIcon/>
      </button>

      <div className='flex flex-col gap-16 items-center'>
        <a href='/' 
          className="flex items-center gap-2 sm:gap-4 group"
          onClick={() => toggleMenu()}  
        >
          <p className="text-5xl md:text-6xl flex items-center font-black text-text-primary font-Codesaver text-center transition-all duration-300 group-hover:scale-105">
            Vin<span className="text-primary font-black">{`<0`}</span>de
          </p>
        </a>

        <nav className='flex flex-col items-center gap-6'>
          {navbar_items.map(item => (
            <a
              href={`/${item.htmlId}`}
              key={item.id}
              onClick={() => toggleMenu()}
              className={`text-xl font-medium transition-all duration-300 ease-out ${path === item.htmlId 
                ? "text-primary"
                : "text-text-primary hover:text-primary hover:translate-x-1"}`}>
                {item.name}
              </a>
          ))}
        </nav>

        <a href={`/contact`} 
          className="btn-primary text-lg"
          onClick={() => toggleMenu()}
        >
          Empecemos
        </a>
      </div>
    </aside>
  );
}