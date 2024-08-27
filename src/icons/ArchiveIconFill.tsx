import { SVGProps } from "react";

export default function ArchiveIconFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="outlined"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.79999 3.60022C3.47451 3.60022 2.39999 4.67474 2.39999 6.00022C2.39999 7.3257 3.47451 8.40022 4.79999 8.40022H19.2C20.5255 8.40022 21.6 7.3257 21.6 6.00022C21.6 4.67474 20.5255 3.60022 19.2 3.60022H4.79999Z"
        className="outlined"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.59999 9.60022H20.4V18.0002C20.4 19.3257 19.3255 20.4002 18 20.4002H5.99999C4.67451 20.4002 3.59999 19.3257 3.59999 18.0002V9.60022ZM9.59999 13.2002C9.59999 12.5375 10.1373 12.0002 10.8 12.0002H13.2C13.8627 12.0002 14.4 12.5375 14.4 13.2002C14.4 13.863 13.8627 14.4002 13.2 14.4002H10.8C10.1373 14.4002 9.59999 13.863 9.59999 13.2002Z"
        className="outlined"
      />
    </svg>
  );
}
