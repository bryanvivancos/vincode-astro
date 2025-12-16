import type { SVGProps } from "react";

/**
 * Componente SVG de Chevron apuntando hacia arriba.
 * Acepta props estándar de SVG, lo que permite usar clases de Tailwind (como `w-6 h-6 text-red-500`).
 * * @param {SVGProps<SVGSVGElement>} props - Propiedades estándar de SVG.
 * @returns {JSX.Element} Un elemento SVG.
 */
const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 15L12 9L18 15"
      // Cambiado de color fijo (#ffffff) a `currentColor`.
      // El color del trazo (stroke) se controla con la clase `text-*` de Tailwind.
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronUpIcon;