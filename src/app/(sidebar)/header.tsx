"use client";
import Image from "next/image";
import icon from "./icon.png";
import list from "./list.svg";
import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import ArchiveIconFill from "@/icons/ArchiveIconFill";
import ShopWindowFill from "@/icons/ShopWindowFill";
import DealIconFill from "@/icons/DealIconFill";
import XIcon from "@/icons/XIcon";
import SolidSearchIcon from "@/icons/SolidSearchIcon";
import NavLink from "./nav-link";
import NavigationSection from "./navigation-section";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className=" text-white flex flex-col fixed inset-[0] pointer-events-none">
      <nav className="md:hidden flex justify-between items-center p-4 bg-black pointer-events-auto">
        <Link href="/">
          <Image src={icon} alt="logo" width={30} height={30} />
        </Link>

        <span>Gumroad</span>

        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <XIcon className="fill-white w-5" />
          ) : (
            <MenuIcon className="fill-white w-5" />
          )}
        </button>
      </nav>

      {showMenu && <NavigationSection />}
    </header>
  );
}
