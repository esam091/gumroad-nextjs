import Pill from "@/components/Pill";
import OutlineChevronRightIcon from "@/icons/OutlineChevronRightIcon";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import fitnessHealthIcon from "./icons/fitnessHealth.svg";
import businessMoneyIcon from "./icons/businessMoney.svg";
import writingPublishingIcon from './icons/writingPublishing.svg'
import designIcon from './icons/design.svg'
import Image from "next/image";

interface Category {
  title: string;
  items?: {
    title: string;
    hasMore: boolean;
  }[];
  icon?: any;
  color?: "yellow" | "green" | "white";
}

export default function NavigationPopup({ className }: { className: string }) {
  return (
    <div className={className}>
      {categories.map(({ title, items = [], color = "white", icon }, index) => (
        <NavigationMenu.Root
          key={index}
          className="relative flex z-10"
          orientation="horizontal"
        >
          <NavigationMenu.List className="flex">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group" asChild>
                <Link href={"/dashboard"}>
                  <Pill
                    label={title}
                    variant="link"
                    className="group-hover:bg-card cursor-pointer transition-transform group-hover:shadow-1 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </NavigationMenu.Trigger>

              {!!items.length && (
                <NavigationMenu.Content
                  className={twMerge(
                    "absolute overflow-hidden top-2 left-[0] border border-solid border-black rounded-1 shadow-1",
                    color === "white"
                      ? "bg-card"
                      : color === "green"
                        ? "bg-green-bold text-black"
                        : "bg-gold-bold text-black"
                  )}
                >
                  <ul>
                    {items.map((item) => (
                      <li key={item.title} className="flex">
                        <Link
                          href="/dashboard"
                          className={twMerge(
                            "p-4 gap-2 flex-1 flex justify-between",
                            color !== 'white' && 'stroke-black hover:stroke-white hover:bg-black hover:text-white',
                            color === 'white' && 'stroke-white hover:stroke-black hover:bg-white hover:text-black' ,
                            !item.hasMore && "underline"
                          )}
                        >
                          {item.title}

                          {item.hasMore && (
                            <OutlineChevronRightIcon className="w-5 fill-none" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {!!icon && (
                    <Image
                      src={icon}
                      alt="asdf"
                      width={224}
                      height={160}
                      className="object-contain max-h-[8rem]"
                    />
                  )}
                </NavigationMenu.Content>
              )}
            </NavigationMenu.Item>

            {!!items.length && (
              <NavigationMenu.Indicator className="top-[calc(100%_+_4px)] flex items-end justify-center">
                <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-black" />
              </NavigationMenu.Indicator>
            )}
          </NavigationMenu.List>

          <div className="absolute w-full top-full left-[0] ">
            <NavigationMenu.Viewport className="relative w-[15rem]" />
          </div>
        </NavigationMenu.Root>
      ))}
    </div>
  );
}

const categories: Category[] = [
  {
    title: "All",
  },
  {
    title: "Business & Money",
    icon: businessMoneyIcon,
    items: [
      {
        title: "All Business & Money",
        hasMore: false,
      },
      {
        title: "Accounting",
        hasMore: false,
      },
      {
        title: "Entrepreneurship",
        hasMore: true,
      },
      {
        title: "Gigs & Side Projects",
        hasMore: false,
      },
      {
        title: "Investing",
        hasMore: false,
      },
      {
        title: "Management & Leadership",
        hasMore: false,
      },
      {
        title: "Marketing & Sales",
        hasMore: true,
      },
      {
        title: "Networking, Careers & Jobs",
        hasMore: false,
      },
      {
        title: "Personal Finance",
        hasMore: false,
      },
      {
        title: "Real Estate",
        hasMore: false,
      },
    ],
    color: "green",
  },
  {
    title: "Fitness & Health",
    icon: fitnessHealthIcon,
    color: "yellow",
    items: [
      {
        title: "All Fitness & Health",
        hasMore: false,
      },
      {
        title: "Exercise & Workout",
        hasMore: false,
      },
      {
        title: "Running",
        hasMore: false,
      },
      {
        title: "Sports",
        hasMore: false,
      },
      {
        title: "Weight Loss & Dieting",
        hasMore: false,
      },
      {
        title: "Yoga",
        hasMore: false,
      },
    ],
  },
  {
    title: "Writing & Publishing",
    icon: writingPublishingIcon,
    color: "yellow",
    items: [
      {
        title: "All Writing & Publishing",
        hasMore: false,
      },
      {
        title: "Courses",
        hasMore: false,
      },
      {
        title: "Resources",
        hasMore: false,
      },
    ],
  },
  {
    title: "Other",
  },
  {
    title: "Design",
    color: "yellow",
    icon: designIcon,
    items: [
      {
        title: "All Design",
        hasMore: false,
      },
      {
        title: "Architecture",
        hasMore: false,
      },
      {
        title: "Branding",
        hasMore: true,
      },
      {
        title: "Entertainment Design",
        hasMore: false,
      },
      {
        title: "Fashion Design",
        hasMore: false,
      },
      {
        title: "Fonts",
        hasMore: false,
      },
      {
        title: "Graphics",
        hasMore: true,
      },
      {
        title: "Icons",
        hasMore: true,
      },
      {
        title: "Industrial Design",
        hasMore: false,
      },
      {
        title: "Interior Design",
        hasMore: false,
      },
      {
        title: "Print & Packaging",
        hasMore: true,
      },
      {
        title: "UI & Web",
        hasMore: true,
      },
      {
        title: "Wallpapers",
        hasMore: false,
      },
    ],
  },
  {
    title: "More",
    items: [
      {
        title: "Drawing & Painting",
        hasMore: true,
      },
      {
        title: "3D",
        hasMore: true,
      },
      {
        title: "Self Improvement",
        hasMore: true,
      },
      {
        title: "Music & Sound Design",
        hasMore: true,
      },
      {
        title: "Films",
        hasMore: true,
      },
      {
        title: "Software Development",
        hasMore: true,
      },
      {
        title: "Education",
        hasMore: true,
      },
      {
        title: "Gaming",
        hasMore: true,
      },
      {
        title: "Photography",
        hasMore: true,
      },
      {
        title: "Comics & Graphic Novels",
        hasMore: false,
      },
      {
        title: "Audio",
        hasMore: true,
      },
      {
        title: "Fiction Books",
        hasMore: true,
      },
      {
        title: "Recorded Music",
        hasMore: true,
      },
    ],
  },
];
