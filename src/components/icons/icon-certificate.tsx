// icon:certificate-2 | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

export function IconCertificate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M15 15 A3 3 0 0 1 12 18 A3 3 0 0 1 9 15 A3 3 0 0 1 15 15 z" />
      <path d="M10 7h4M10 18v4l2-1 2 1v-4" />
      <path d="M10 19H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2h-2" />
    </svg>
  );
}
