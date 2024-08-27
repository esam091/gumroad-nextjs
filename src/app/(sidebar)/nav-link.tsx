"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps {
  icon?: ReactNode;
  title: string;
  href: string;
}

export default function NavLink({ title, href, icon }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link href={href} className={twMerge("px-5 py-4 border-solid border-t border-t-white/50 flex items-center gap-4 hover:text-pink-bold fill-white hover:fill-pink-bold", pathname === href && 'text-pink-bold fill-pink-bold')}>
      <span className="w-4 [&>*]:w-4">{icon}</span>

      {title}
    </Link>
  );
}
