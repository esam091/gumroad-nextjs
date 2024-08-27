import { SVGProps } from "react";

export default function OutlineChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="outlined"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 5.00024L16 12.0002L9 19.0002"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
