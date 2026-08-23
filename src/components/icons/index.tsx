import type { SVGProps } from "react";

export const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M20.25 5.25H16.5V4.5a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 7.5 4.5v.75H3.75a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5M9 4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v.75H9zm11.25 2.25v3.901a17.256 17.256 0 0 1-16.5.001V6.75zm0 12H3.75v-6.409a18.768 18.768 0 0 0 16.5-.001zM9.75 10.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clipRule="evenodd" /></svg>
);
export const CardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M21 4.5H3A1.5 1.5 0 0 0 1.5 6v12A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 21 4.5M21 6v2.25H3V6zm0 12H3V9.75h18zm-1.5-2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75m-6 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75" clipRule="evenodd" /></svg>
);
export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      // Se reemplaza el color fijo (#f8f8fa) por `#00a8e8`.
      // Esto permite que el color del stroke se controle con la clase `text-*` de Tailwind.
      stroke="#00a8e8" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
</svg>
);
export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
);
export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
);
export const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      // Cambiado de color fijo (#f8f8fa) a `#00a8e8`.
      // El color del trazo (stroke) se controla con la clase `text-*` de Tailwind.
      stroke="#00a8e8" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ClickIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00a8e8" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
</svg>
);
export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
<g clipPath="url(#clip0_12_630)">
<path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.2448 16.5542 16.5542 20.2448 12 20.25ZM18 12C18 12.4142 17.6642 12.75 17.25 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12V6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12Z" fill="#00a8e8"/>
</g>
<defs>
<clipPath id="clip0_12_630">
<rect width="24" height="24" fill="#00a8e8"/>
</clipPath>
</defs>
</svg>
);
export const CogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>
);
export const ComputerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>
);
export const CustomSoftwareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" /><path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" /><path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" /><path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" /></svg>
);
export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
<g clipPath="url(#clip0_12_610)">
<path fillRule="evenodd" clipRule="evenodd" d="M20.25 3.75H12.75V2.25C12.75 1.83579 12.4142 1.5 12 1.5C11.5858 1.5 11.25 1.83579 11.25 2.25V3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V16.5C2.25 17.3284 2.92157 18 3.75 18H7.44L5.41406 20.5312C5.15518 20.8549 5.20765 21.3271 5.53125 21.5859C5.85485 21.8448 6.32705 21.7924 6.58594 21.4688L9.36 18H14.64L17.4141 21.4688C17.6729 21.7924 18.1451 21.8448 18.4688 21.5859C18.7924 21.3271 18.8448 20.8549 18.5859 20.5312L16.56 18H20.25C21.0784 18 21.75 17.3284 21.75 16.5V5.25C21.75 4.42157 21.0784 3.75 20.25 3.75ZM20.25 16.5H3.75V5.25H20.25V16.5ZM9.75 11.25V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5V11.25C8.25 10.8358 8.58579 10.5 9 10.5C9.41421 10.5 9.75 10.8358 9.75 11.25ZM12.75 9.75V13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5V9.75C11.25 9.33579 11.5858 9 12 9C12.4142 9 12.75 9.33579 12.75 9.75ZM15.75 8.25V13.5C15.75 13.9142 15.4142 14.25 15 14.25C14.5858 14.25 14.25 13.9142 14.25 13.5V8.25C14.25 7.83579 14.5858 7.5 15 7.5C15.4142 7.5 15.75 7.83579 15.75 8.25Z" fill="#00a8e8"/>
</g>
<defs>
<clipPath id="clip0_12_610">
<rect width="24" height="24" fill="#00a8e8"/>
</clipPath>
</defs>
</svg>
);
export const ExclamationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" /></svg>
);
export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.37-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.37 9.75-9.75c-.006-5.38-4.368-9.74-9.75-9.75m.75 17.97v-5.97H15c.414 0 .75-.34.75-.75s-.336-.75-.75-.75h-2.25V10.5c0-.83.672-1.5 1.5-1.5h1.5c.414 0 .75-.34.75-.75s-.336-.75-.75-.75h-1.5c-1.657 0-3 1.34-3 3v2.25H9c-.414 0-.75.34-.75.75s.336.75.75.75h2.25v5.97a8.26 8.26 0 0 1-7.491-8.6A8.25 8.25 0 0 1 12 3.75a8.25 8.25 0 0 1 8.241 7.87 8.26 8.26 0 0 1-7.491 8.6" clipRule="evenodd" /></svg>
);
export const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M12 2.25A9.75 9.75 0 0 0 2.25 12 9.75 9.75 0 0 0 12 21.75 9.75 9.75 0 0 0 21.75 12c-.006-5.382-4.368-9.744-9.75-9.75m-2.472 13.5h4.944c-.503 1.719-1.347 3.269-2.472 4.49-1.125-1.221-1.969-2.771-2.472-4.49m-.34-1.5a13.7 13.7 0 0 1 0-4.5h5.624c.249 1.49.249 3.01 0 4.5zM3.75 12a8.2 8.2 0 0 1 .312-2.25h3.606a15.2 15.2 0 0 0 0 4.5H4.062A8.2 8.2 0 0 1 3.75 12m10.722-3.75H9.528c.503-1.719 1.347-3.269 2.472-4.49 1.125 1.221 1.969 2.771 2.472 4.49m1.86 1.5h3.606a8.27 8.27 0 0 1 0 4.5h-3.606a15.2 15.2 0 0 0 0-4.5m3.015-1.5h-3.321a13.4 13.4 0 0 0-1.9-4.219 8.28 8.28 0 0 1 5.221 4.219M9.874 4.031a13.4 13.4 0 0 0-1.9 4.219H4.653a8.28 8.28 0 0 1 5.221-4.219M4.653 15.75h3.321a13.4 13.4 0 0 0 1.9 4.219 8.28 8.28 0 0 1-5.221-4.219m9.473 4.219a13.4 13.4 0 0 0 1.9-4.219h3.321a8.28 8.28 0 0 1-5.221 4.219" clipRule="evenodd" /></svg>
);
export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" fillRule="evenodd" d="M12 7.5c-2.485 0-4.5 2.01-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.01 4.5-4.5A4.506 4.506 0 0 0 12 7.5m0 7.5c-1.657 0-3-1.34-3-3s1.343-3 3-3 3 1.34 3 3-1.343 3-3 3m4.5-12.75h-9A5.253 5.253 0 0 0 2.25 7.5v9a5.253 5.253 0 0 0 5.25 5.25h9a5.253 5.253 0 0 0 5.25-5.25v-9a5.253 5.253 0 0 0-5.25-5.25m3.75 14.25a3.75 3.75 0 0 1-3.75 3.75h-9a3.75 3.75 0 0 1-3.75-3.75v-9A3.75 3.75 0 0 1 7.5 3.75h9a3.75 3.75 0 0 1 3.75 3.75zM18 7.12a1.124 1.124 0 1 1-2.25 0c0-.62.504-1.12 1.125-1.12S18 6.5 18 7.12" clipRule="evenodd" /></svg>
);
export const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
    />
  </svg>
);
export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M12.894 17.471a.75.75 0 0 1 0 1.061l-.932.937a5.253 5.253 0 1 1-7.426-7.431l2.261-2.262a5.25 5.25 0 0 1 7.201-.214c.31.276.339.751.064 1.062a.754.754 0 0 1-1.062.064 3.75 3.75 0 0 0-5.142.152l-2.261 2.259a3.75 3.75 0 1 0 5.304 5.304l.932-.932a.75.75 0 0 1 1.061 0m6.57-12.937a5.256 5.256 0 0 0-7.426 0l-.932.933a.749.749 0 1 0 1.061 1.06l.932-.932a3.75 3.75 0 1 1 5.304 5.304l-2.261 2.264a3.75 3.75 0 0 1-5.142.149.753.753 0 0 0-.998 1.126 5.25 5.25 0 0 0 7.201-.212l2.261-2.262a5.256 5.256 0 0 0 0-7.428z" clipRule="evenodd" /></svg>
);
export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M8 15.27A7.27 7.27 0 1 1 15.27 8H8z" clipRule="evenodd" /></svg>
);
export const MobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00a8e8" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
);
export const MoneyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
);
export const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
<g clipPath="url(#clip0_12_620)">
<path fillRule="evenodd" clipRule="evenodd" d="M22.95 14.1C22.6186 14.3485 22.1485 14.2814 21.9 13.95C20.9833 12.7178 19.5358 11.994 18 12C17.6985 12 17.4263 11.8194 17.3091 11.5416C17.2304 11.3551 17.2304 11.1449 17.3091 10.9584C17.4263 10.6806 17.6985 10.5 18 10.5C19.1692 10.4999 20.1435 9.60425 20.2418 8.43916C20.3401 7.27406 19.5297 6.22784 18.377 6.03184C17.2243 5.83584 16.1136 6.55539 15.8212 7.6875C15.7177 8.08877 15.3085 8.33012 14.9072 8.22656C14.5059 8.12301 14.2646 7.71377 14.3681 7.3125C14.7687 5.76266 16.1088 4.63794 17.7047 4.51237C19.3005 4.38679 20.8001 5.28805 21.4381 6.75618C22.0761 8.2243 21.7119 9.93555 20.5312 11.0166C21.5511 11.4581 22.4376 12.1588 23.1028 13.0491C23.2222 13.2086 23.2731 13.4091 23.2444 13.6062C23.2158 13.8034 23.1098 13.9811 22.95 14.1ZM17.8988 19.875C18.0465 20.1075 18.055 20.4023 17.9207 20.6429C17.7865 20.8834 17.5311 21.031 17.2557 21.0273C16.9802 21.0236 16.7289 20.8691 16.6012 20.625C15.64 18.9973 13.8903 17.9986 12 17.9986C10.1097 17.9986 8.36001 18.9973 7.39875 20.625C7.27105 20.8691 7.0198 21.0236 6.74434 21.0273C6.46887 21.031 6.21353 20.8834 6.07928 20.6429C5.94502 20.4023 5.95346 20.1075 6.10125 19.875C6.82837 18.6257 7.93706 17.6425 9.26437 17.07C7.73297 15.8975 7.11905 13.8795 7.73805 12.0528C8.35704 10.2261 10.0713 8.997 12 8.997C13.9287 8.997 15.643 10.2261 16.262 12.0528C16.8809 13.8795 16.267 15.8975 14.7356 17.07C16.0629 17.6425 17.1716 18.6257 17.8988 19.875ZM12 16.5C13.6569 16.5 15 15.1569 15 13.5C15 11.8431 13.6569 10.5 12 10.5C10.3431 10.5 9 11.8431 9 13.5C9 15.1569 10.3431 16.5 12 16.5ZM6.75 11.25C6.75 10.8358 6.41421 10.5 6 10.5C4.83076 10.4999 3.85646 9.60425 3.75816 8.43916C3.65987 7.27406 4.47034 6.22784 5.62303 6.03184C6.77572 5.83584 7.88644 6.55539 8.17875 7.6875C8.2823 8.08877 8.69154 8.33012 9.09281 8.22656C9.49408 8.12301 9.73543 7.71377 9.63188 7.3125C9.23134 5.76266 7.89116 4.63794 6.29533 4.51237C4.6995 4.38679 3.19991 5.28805 2.56189 6.75618C1.92388 8.2243 2.28813 9.93555 3.46875 11.0166C2.44995 11.4585 1.56442 12.1592 0.9 13.0491C0.651213 13.3804 0.71816 13.8507 1.04953 14.0995C1.3809 14.3483 1.85121 14.2814 2.1 13.95C3.01674 12.7178 4.46416 11.994 6 12C6.41421 12 6.75 11.6642 6.75 11.25Z" fill="#00a8e8"/>
</g>
<defs>
<clipPath id="clip0_12_620">
<rect width="24" height="24" fill="#00a8e8"/>
</clipPath>
</defs>
</svg>
);
export const PuzzleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-puzzle" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" /></svg>
);
export const RectanglesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>

  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
</svg>
);
export const RocketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
);
export const ServerIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>

  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
</svg>
);
export const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
);
export const Square3StackIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>

   <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>
);
export const StarRatingIcon = (props: SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 928 20" {...props}><defs><clipPath xmlns="http://www.w3.org/2000/svg" id="prefix__a"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath><clipPath xmlns="http://www.w3.org/2000/svg" id="prefix__b"><path fill="#fff" d="M22 0h20v20H22z" /></clipPath><clipPath xmlns="http://www.w3.org/2000/svg" id="prefix__c"><path fill="#fff" d="M44 0h20v20H44z" /></clipPath><clipPath xmlns="http://www.w3.org/2000/svg" id="prefix__d"><path fill="#fff" d="M66 0h20v20H66z" /></clipPath><clipPath xmlns="http://www.w3.org/2000/svg" id="prefix__e"><path fill="#fff" d="M88 0h20v20H88z" /></clipPath></defs><g xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#prefix__a)"><path fill="#00a8e8" fillRule="evenodd" d="m18.32 8.94-3.523 3.07 1.055 4.58c.115.49-.075 1-.482 1.29-.406.3-.95.32-1.38.06l-3.993-2.42-3.985 2.42c-.43.26-.974.24-1.38-.06a1.24 1.24 0 0 1-.482-1.29l1.054-4.57L1.68 8.94a1.26 1.26 0 0 1-.373-1.34c.156-.48.583-.81 1.084-.86l4.646-.4L8.85 2.02A1.24 1.24 0 0 1 10 1.25c.503 0 .956.3 1.15.77l1.819 4.32 4.643.4c.502.05.929.38 1.085.86s.008 1.01-.373 1.34z" clipRule="evenodd" /></g><g clipPath="url(#prefix__b)"><path fill="#00a8e8" fillRule="evenodd" d="m40.32 8.94-3.523 3.07 1.055 4.58c.115.49-.075 1-.482 1.29-.406.3-.95.32-1.38.06l-3.993-2.42-3.985 2.42c-.43.26-.974.24-1.38-.06a1.24 1.24 0 0 1-.482-1.29l1.054-4.57-3.524-3.08a1.26 1.26 0 0 1-.373-1.34c.156-.48.583-.81 1.084-.86l4.646-.4 1.813-4.32A1.24 1.24 0 0 1 32 1.25c.503 0 .956.3 1.15.77l1.819 4.32 4.643.4c.502.05.929.38 1.085.86s.008 1.01-.373 1.34z" clipRule="evenodd" /></g><g clipPath="url(#prefix__c)"><path fill="#00a8e8" fillRule="evenodd" d="m62.32 8.94-3.523 3.07 1.055 4.58c.115.49-.075 1-.482 1.29-.406.3-.95.32-1.38.06l-3.993-2.42-3.985 2.42c-.43.26-.974.24-1.38-.06a1.24 1.24 0 0 1-.482-1.29l1.054-4.57-3.524-3.08a1.26 1.26 0 0 1-.373-1.34c.156-.48.583-.81 1.084-.86l4.646-.4 1.813-4.32A1.24 1.24 0 0 1 54 1.25c.503 0 .956.3 1.15.77l1.819 4.32 4.643.4c.502.05.929.38 1.085.86s.008 1.01-.373 1.34z" clipRule="evenodd" /></g><g clipPath="url(#prefix__d)"><path fill="#00a8e8" fillRule="evenodd" d="m84.32 8.94-3.523 3.07 1.055 4.58c.115.49-.075 1-.482 1.29-.406.3-.95.32-1.38.06l-3.993-2.42-3.985 2.42c-.43.26-.974.24-1.38-.06a1.24 1.24 0 0 1-.482-1.29l1.054-4.57-3.524-3.08a1.26 1.26 0 0 1-.373-1.34c.156-.48.583-.81 1.084-.86l4.646-.4 1.813-4.32A1.24 1.24 0 0 1 76 1.25c.503 0 .956.3 1.15.77l1.819 4.32 4.643.4c.502.05.929.38 1.085.86s.008 1.01-.373 1.34z" clipRule="evenodd" /></g><g clipPath="url(#prefix__e)"><path fill="#00a8e8" fillRule="evenodd" d="m106.32 8.94-3.523 3.07 1.055 4.58c.115.49-.075 1-.482 1.29-.406.3-.95.32-1.38.06l-3.993-2.42-3.985 2.42c-.43.26-.974.24-1.38-.06a1.24 1.24 0 0 1-.482-1.29l1.054-4.57-3.524-3.08a1.26 1.26 0 0 1-.373-1.34c.156-.48.583-.81 1.084-.86l4.646-.4 1.813-4.32A1.24 1.24 0 0 1 98 1.25c.503 0 .956.3 1.15.77l1.819 4.32 4.643.4c.502.05.929.38 1.085.86s.008 1.01-.373 1.34z" clipRule="evenodd" /></g></g></svg>
);
export const SuitcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
);
export const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="m18.736 12.27-.938-7.5a1.88 1.88 0 0 0-1.86-1.65H2.5c-.69 0-1.25.56-1.25 1.26v6.87c0 .69.56 1.25 1.25 1.25h3.364l2.952 5.9c.106.22.322.35.559.35 1.726 0 3.125-1.4 3.125-3.13v-1.24h4.375c.538 0 1.051-.24 1.407-.64s.521-.94.454-1.47M5.625 11.25H2.5V4.38h3.125zm11.719 1.66a.57.57 0 0 1-.469.21h-5a.626.626 0 0 0-.625.63v1.87c0 .9-.631 1.67-1.507 1.84l-2.868-5.73V4.38h9.063c.315-.01.58.23.62.54l.937 7.5a.6.6 0 0 1-.151.49" clipRule="evenodd" /></svg>
);
export const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M18.281 6.26c-.356-.4-.868-.64-1.406-.64H12.5V4.38c0-1.73-1.399-3.13-3.125-3.13a.61.61 0 0 0-.559.35L5.864 7.5H2.5c-.69 0-1.25.56-1.25 1.25v6.87c0 .7.56 1.26 1.25 1.26h13.438a1.88 1.88 0 0 0 1.86-1.65l.938-7.5a1.86 1.86 0 0 0-.455-1.47M2.5 8.75h3.125v6.87H2.5zm14.995-1.17-.937 7.5a.613.613 0 0 1-.62.54H6.875V8.27l2.868-5.73c.876.17 1.507.94 1.507 1.84v1.87c0 .35.28.63.625.63h5c.179-.01.35.07.469.21a.61.61 0 0 1 .151.49" clipRule="evenodd" /></svg>
);
export const TrendingUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00a8e8" viewBox="0 0 24 24" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
);
export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path xmlns="http://www.w3.org/2000/svg" fill="#00a8e8" fillRule="evenodd" d="M23.193 6.46A.75.75 0 0 0 22.5 6h-2.853a4.57 4.57 0 0 0-3.888-2.25 4.4 4.4 0 0 0-3.164 1.28 4.5 4.5 0 0 0-1.345 3.22v.57c-3.774-.99-6.862-4.06-6.894-4.1a.76.76 0 0 0-.787-.18.75.75 0 0 0-.493.64c-.404 4.48.897 7.48 2.062 9.21.569.85 1.26 1.62 2.052 2.27-1.428 1.64-3.676 2.5-3.701 2.51a.754.754 0 0 0-.361 1.12c.071.11.352.47 1.039.82.85.42 1.972.64 3.333.64 6.625 0 12.161-5.1 12.727-11.67l2.804-2.8a.75.75 0 0 0 .162-.82m-4.219 2.76a.75.75 0 0 0-.217.48c-.382 5.92-5.325 10.55-11.257 10.55-.99 0-1.688-.13-2.177-.29 1.079-.58 2.584-1.59 3.551-3.04a.77.77 0 0 0 .106-.59.75.75 0 0 0-.355-.48c-.044-.02-4.117-2.47-4.125-9 1.5 1.22 4.242 3.11 7.375 3.64.218.03.44-.03.609-.17a.75.75 0 0 0 .266-.57v-1.5c-.002-.81.323-1.58.9-2.15a2.92 2.92 0 0 1 2.091-.85c1.186.01 2.296.74 2.76 1.8.119.27.389.45.687.45h1.5z" clipRule="evenodd" /></svg>
);
export const StoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
);
export const SoupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-soup"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" /><path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /></svg>
);
export const UserScreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-screen"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" /><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" /></svg>
);
export const BoltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bolt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
);
export const BurgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-burger"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" /><path d="M5 12h14" /></svg>
);
export const PaletteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
);
export const TargetArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 7a5 5 0 1 0 5 5" /><path d="M13 3.055a9 9 0 1 0 7.941 7.945" /><path d="M15 6v3h3l3 -3h-3v-3z" /><path d="M15 9l-3 3" /></svg>
);
export const Share3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
);
export const CloseXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
);
export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail-fast"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7h3" /><path d="M3 11h2" /><path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801" /><path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" /></svg>
);
export const Menu2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
);
export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
);
export const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
);
export const PicnicTableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-picnic-table"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" /></svg>
);
export const ChefHatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00a8e8" className="icon icon-tabler icons-tabler-filled icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 19.002v1.998a1 1 0 0 1 -.883 .993l-.117 .007h-12a1 1 0 0 1 -1 -1v-1.994a1 1 0 0 1 1 -1l12 -.004a1 1 0 0 1 1 1" /><path d="M12 2a5 5 0 0 1 4.533 2.888l.06 .137l.136 -.009a5 5 0 0 1 4.99 3.477l.063 .213a5 5 0 0 1 -2.696 5.831l-.087 .037v1.428a1 1 0 0 1 -1 1l-12 .004a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.433l-.123 -.055a5 5 0 0 1 -2.6 -3.001l-.064 -.223a5 5 0 0 1 5.193 -6.27l.066 -.142a5 5 0 0 1 4.302 -2.877z" /></svg>
);
export const FlameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-flame"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" /></svg>
);
export const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
);
export const MoneyBagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-moneybag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" /><path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4" /></svg>
);
export const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-box"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /></svg>
);
export const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
);
export const HeartHandshakeIcon = (props: SVGProps<SVGSVGElement>) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>
);
export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a8e8" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>
);

export const icons = {
  BriefcaseIcon,
  CardIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClickIcon,
  ClockIcon,
  CogIcon,
  ComputerIcon,
  CustomSoftwareIcon,
  DashboardIcon,
  ExclamationIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  TikTokIcon,
  LinkIcon,
  LogoIcon,
  MobileIcon,
  MoneyIcon,
  PeopleIcon,
  PuzzleIcon,
  RectanglesIcon,
  RocketIcon,
  ServerIcon,
  ShieldIcon,
  Square3StackIcon,
  StarRatingIcon,
  SuitcaseIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrendingUpIcon,
  TwitterIcon,
  StoreIcon,
  SoupIcon,
  UserScreenIcon,
  BoltIcon,
  BurgerIcon,
  PaletteIcon,
  TargetArrowIcon,
  Share3Icon,
  CloseXIcon,
  Menu2Icon,
  CheckIcon,
  ExternalLinkIcon,
  PicnicTableIcon,
  ChefHatIcon,
  FlameIcon,
  ClipboardIcon,
  MoneyBagIcon,
  BoxIcon,
  UsersIcon,
  HeartHandshakeIcon,
  MailIcon,
  CalendarIcon
} as const;

export type IconName = keyof typeof icons;