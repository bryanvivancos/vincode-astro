import { Icon } from "../icons/Icon";
import type { IconName } from "../icons";

interface Props {
    href?: string;
    icon?: IconName;
    title: string;
    description: string;
    classNames: string;
}


export const SlideItems = ({ 
  href, 
  icon, 
  title, 
  description, 
  classNames 
}: Props) => {
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      href={href} className={`bg-background-card border border-border rounded-lg p-4 flex flex-col gap-3 transition-all transform duration-300 ease-in-out hover:border-primary hover:-translate-y-1 ${classNames}`}
    >
      {icon && (
        <Icon
          name={icon}
          className="w-6 h-6 text-white mb-3" // ajusta tamaño y color con Tailwind
        />
      )}

      <div className="flex flex-col gap-3">
          <h4 className="text-base font-bold leading-5 text-text-primary text-balance">{title}</h4>
          <p className="text-sm font-medium leading-5 text-text-secondary">{description}</p>
      </div>
    </Wrapper>
  );
};