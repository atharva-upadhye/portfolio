import { SvgIconProps } from "./types";

export function ThemeIcon({ size }: SvgIconProps) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
    >
      <path d="m15 2h2v3h-2z" />
      <path d="m27 15h3v2h-3z" />
      <path d="m15 27h2v3h-2z" />
      <path d="m2 15h3v2h-3z" />
      <path
        d="m6.22 5.73h2v3h-2z"
        transform="matrix(.70710678 -.70710678 .70710678 .70710678 -3 7.23)"
      />
      <path
        d="m23.27 6.23h3v2h-3z"
        transform="matrix(.70710678 -.70710678 .70710678 .70710678 2.14 19.63)"
      />
      <path
        d="m23.77 23.27h2v3h-2z"
        transform="matrix(.70710678 -.70710678 .70710678 .70710678 -10.26 24.77)"
      />
      <path d="m5.47 25.13 2.12-2.13 1.41 1.42-2.12 2.12z" />
      <path d="m16 8a8 8 0 1 0 8 8 8 8 0 0 0 -8-8zm0 14a6 6 0 0 1 0-12z" />
      <path d="m0 0h32v32h-32z" fill="none" />
    </svg>
  );
}
