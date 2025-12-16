import type { SVGProps } from "react";

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // Extiende las propiedades para permitir className (Tailwind), width, height, etc.
    {...props}
  >
    <path
      d="M6 9L12 15L18 9"
      // Se reemplaza el color fijo (#ffffff) por `currentColor`.
      // Esto permite que el color del stroke se controle con la clase `text-*` de Tailwind.
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronDownIcon;

