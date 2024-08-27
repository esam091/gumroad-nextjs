import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Tooltip from "./Tooltip";

interface LikeButtonProps extends ComponentProps<"button"> {
  likes: number;
  isLiked: boolean;
}

export default function LikeButton({
  className,
  likes,
  isLiked,
  ...props
}: LikeButtonProps) {
  const likeDisplayText =
    likes < 1000 ? likes.toString() : `${(likes / 1000).toFixed(1)}k`;

  const formatter = Intl.NumberFormat()

  return (
    <Tooltip
      trigger={
        <button
          className={twMerge(
            "flex items-center gap-2 rounded-1 active:enabled:transform-none hover:enabled:shadow-1 hover:enabled:-translate-x-1 hover:enabled:-translate-y-1 transition-transform ease-out duration-150 disabled:cursor-not-allowed disabled:opacity-30 min-h-[40px] px-3  border-black border-solid border text-black",
            className,
            isLiked ? "bg-pink-bold" : "bg-gray-50"
          )}
          {...props}
        >
          <HeartIcon />
          {likes > 0 ? likeDisplayText : "Like"}
        </button>
      }
    >
      {formatter.format(likes)}
    </Tooltip>
  );
}

function HeartIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.49919 1.99384C3.47412 1.99384 1.83252 3.63517 1.83252 5.66051C1.83252 7.78318 3.04152 9.78584 5.04085 11.6192C5.72325 12.2445 6.45799 12.7932 7.18665 13.2858C7.44205 13.4578 7.68092 13.6139 7.89505 13.7439C8.02559 13.8232 8.11165 13.8805 8.16585 13.9105C8.36719 14.0225 8.63119 14.0225 8.83252 13.9105C8.88672 13.8805 8.97279 13.8232 9.10332 13.7439C9.31745 13.6139 9.55632 13.4578 9.81172 13.2858C10.5404 12.7932 11.2751 12.2445 11.9575 11.6192C13.9569 9.78584 15.1659 7.78318 15.1659 5.66051C15.1659 3.63517 13.5243 1.99384 11.4992 1.99384C10.3491 1.99384 9.22612 2.62051 8.51999 3.53518C7.83145 2.60451 6.71245 1.99384 5.49919 1.99384Z"
        fill="black"
      />
    </svg>
  );
}
