import type { SVGProps } from "react";
import { icons, type IconName } from "../icons";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const Component = icons[name];
  
  return <Component {...props} />;
};
