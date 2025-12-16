import type { ComponentType } from 'react';

interface Props {
    href?: string;
    icon?: ComponentType<{width?:number; height?:number; color?:string}>;
    title: string;
    description: string;
    classNames: string;
}


export const SlideItems = ({ href, icon:Icon, title, description, classNames }: Props) => {
  return (
    <a href={href} className={`bg-background-card border border-border rounded-lg p-4 flex flex-col gap-3 transition-all transform duration-300 ease-in-out hover:border-primary hover:-translate-y-1 ${classNames}`}>
        {Icon && <Icon width={24} height={24} color="#FFFFFF" />}
        <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold leading-5 text-text-primary text-balance">{title}</h4>
            <p className="text-sm font-medium leading-5 text-text-secondary">{description}</p>
        </div>
    </a>
  )
}
