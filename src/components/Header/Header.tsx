import { navbar_items } from '../../CONSTANTS';


export default function Header(
  {currentPath} : {currentPath: string}
) {
  
  const isOnPage = navbar_items.some(item => `/${item.htmlId}` === currentPath)

    return (
    <header className="fixed bg-background-dark border-b border-[#e5e8eb] z-1000 top-0 left-0 right-0 place-items-center">

      <div className="flex justify-between items-center h-16 max-w-7xl w-full py-4 md:py-0 px-4 sm:px-6 md:px-10">

        <a href='/' className="flex items-center gap-2 sm:gap-4">
          {/* <LogoIcon width={16} height={16} color="#FFFFFF" /> */}
          <p className="text-2xl md:text-3xl flex items-center font-black h-6 text-text-primary font-Codesaver">
            Vin<span className="text-[#0090c7] font-black">{`<0`}</span>de
          </p>
        </a>

        <nav className="flex items-center gap-4 lg:gap-9">

          {(currentPath === '/' 
          || currentPath === '/contact'
          || isOnPage) &&
            <div className="flex items-center gap-4 lg:gap-9">
              {navbar_items.map(item => (

                <a key={item.id} href={`${item.htmlId}`} 
                  className={`text-base font-medium  transition-all duration-300 ease-in-out  md:block hidden 
                  ${currentPath === `/${item.htmlId}` ? "text-primary": "text-text-primary hover:text-primary"}`}>{item.name}
                </a>
              ))
              }
            </div>
          }

          { currentPath !== '/contact' &&
            <a href={`/contact`} className="py-2 md:py-3 px-3 sm:px-4 md:px-5 bg-primary rounded-lg text-base font-bold text-text-primary transition-all duration-300 ease-in-out hover:bg-[#0090c7] hover:transform hover:-translate-y-0.5">Empecemos</a>}
        </nav>
      </div>
    </header>
  );
}
