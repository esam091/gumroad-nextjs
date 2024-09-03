import { cva } from "class-variance-authority";


export const buttonVariants = cva(
  "justify-center flex items-center rounded-1 active:enabled:transform-none hover:enabled:shadow-1 hover:enabled:-translate-x-1 hover:enabled:-translate-y-1 transition-transform ease-out duration-150 disabled:cursor-not-allowed disabled:opacity-30",
  {
    variants: {
      variant: {
        primary: "text-white [&>svg_*]:!fill-white [&>svg>path]:hover:enabled:!fill-black bg-black hover:enabled:text-black hover:enabled:bg-pink-bold",
        secondary: "bg-opacity-0 border-solid border text-foreground [&>svg_*]:!fill-foreground",
        filled: "bg-card border-solid border text-foreground [&>svg_*]:!fill-foreground",
        accent: "bg-pink-bold border border-black border-solid text-black [&>svg_*]:!fill-black",
        destroyOutline: "border border-black border-solid hover:enabled:bg-red-bold hover:enabled:text-white text-black [&>svg_*]:!fill-black [&>svg_*]:hover:enabled:!fill-white",
        destroy: "border border-black border-solid bg-red-bold text-white [&>svg_*]:!fill-white",
      },
      size: {
        regular: "text-base px-4 py-3 gap-2",
        small: "text-sm p-2 gap-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "regular",
    },
  }
);
