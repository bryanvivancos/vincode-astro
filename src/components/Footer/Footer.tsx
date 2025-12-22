import { Icon } from "../icons/Icon";
import { navbar_items, VINCODE_IG } from '../../CONSTANTS';

export default function Footer(
  {currentPath} : {currentPath: string}
) {

  return (
    <footer className="py-10 sm:py-12 md:py-15 place-items-center">
      <div className="max-w-240 w-full px-6">
        <div className="flex flex-col gap-6 items-center">

          {currentPath !== "/" && 
          
          <div className='grid grid-cols-3 w-full place-items-center gap-1 md:gap-6'>
            {
              navbar_items.map( item => (
                <a key={item.id} 
                  href={`/${item.htmlId}`} 
                  className={`md:text-base text-sm font-normal transition-all duration-300 ease-in-out text-center 
                  ${currentPath === `/${item.htmlId}` ? "text-primary": "text-text-secondary hover:text-primary"}`}
                >
                  {item.name}
                </a>
              ) )
            }
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