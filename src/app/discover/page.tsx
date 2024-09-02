"use client";
import Link from "next/link";
import CategorySection from "./category-section";
import RecommendationSection from "./recommendation-section";
import Lettermark from "@/icons/Lettermark";
import avatar from "./avatar.webp";
import Image from "next/image";
import SolidSearchIcon from "@/icons/SolidSearchIcon";
import Button from "@/components/Button";
import FilterIcon from "@/icons/FilterIcon";
import { useState } from "react";
import BookmarkHeartFill from "@/icons/BookmarkHeartFill";
import { twMerge } from "tailwind-merge";
import OutlineChevronRightIcon from "@/icons/OutlineChevronRightIcon";
import XIcon from "@/icons/XIcon";
import Pill from "@/components/Pill";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import NavigationPopup from "./navigation-popup";

export default function Page() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className={twMerge("relative", showOverlay && "overflow-y-hidden")}>
      <div className="bg-black text-white flex">
        <div className="p-4 md:px-8 lg:mx-auto lg:container">
          <Link href="/dashboard" className="underline">
            Dashboard
          </Link>
        </div>
      </div>
      <header className="grid md:px-8 sm:grid-cols-[auto_1fr_auto_auto] px-4 py-6 gap-4 grid-cols-[1fr_auto] items-center lg:container lg:mx-auto">
        <Link href="/dashboard">
          <Lettermark className="w-[170px] fill-black" />
        </Link>

        <Image
          src={avatar}
          width={24}
          height={24}
          alt="avatar"
          className="rounded-3 border border-black border-solid place-self-end self-center lg:row-start-2 lg:-col-start-1"
        />
        <SearchBar />

        <Button
          leftIcon={<FilterIcon className="w-5" />}
          variant={"filled"}
          className="sm:col-start-3 sm:row-start-1 lg:hidden"
          onClick={() => setShowOverlay(true)}
        />

        <Link className="hidden lg:flex lg:-col-start-1" href="/dashboard">
          <Button
            label="Library"
            variant="secondary"
            leftIcon={<BookmarkHeartFill className="w-4" />}
          />
        </Link>

        <NavigationPopup className="hidden lg:row-start-2 lg:col-span-4 lg:flex" />
      </header>

      <div className="w-full border border-t-black border-solid"></div>

      <main className="p-4 md:p-8 flex flex-col gap-6 lg:container lg:mx-auto">
        <RecommendationSection />

        <CategorySection />
      </main>

      {showOverlay && (
        <div className="absolute inset-[0] bg-black/50 z-10 flex justify-between">
          <div className="bg-white w-[20rem] max-h-full h-full overflow-y-scroll">
            <div className="flex flex-col items-stretch ">
              <Menu title="All" />
              <Menu title="Business & Money" hasMore />
              <Menu title="Fitness & Health" hasMore />
              <Menu title="Writing & Publishing" hasMore />
              <Menu title="Other" />
              <Menu title="Design" hasMore />
              <Menu title="Drawing & Painting" hasMore />
              <Menu title="3D" hasMore />
              <Menu title="Self Improvement" hasMore />
              <Menu title="Music & Sound Design" hasMore />
              <Menu title="Films" hasMore />
              <Menu title="Software Development" hasMore />
              <Menu title="Education" hasMore />
              <Menu title="Gaming" hasMore />
              <Menu title="Photography" hasMore />
              <Menu title="Comics & Graphic Novels" />
              <Menu title="Audio" hasMore />
              <Menu title="Fiction Books" hasMore />
              <Menu title="Recorded Music" hasMore />
            </div>
            <div className="sticky bottom-[0] bg-white p-4">
              <Link href="/dashboard">
                <Button
                  leftIcon={<BookmarkHeartFill className="w-4" />}
                  label="Library"
                  variant={"filled"}
                  className="w-full"
                />
              </Link>
            </div>
          </div>

          <button
            className="self-start p-4"
            onClick={() => setShowOverlay(false)}
          >
            <XIcon className="w-5 fill-white" />
          </button>
        </div>
      )}
    </div>
  );
}

function SearchBar() {
  return (
    <div className="lg:col-span-3 lg:col-start-2 flex px-4 gap-2 sm:col-start-2 sm:row-start-1 focus-within:ring-0 focus-within:ring-offset-2 focus-within:ring-offset-pink-bold bg-white rounded-1 border border-solid border-black">
      <SolidSearchIcon className="w-4 fill-black/50" />

      <input
        className="py-3 w-full placeholder:text-black/50 cursor-pointer rounded-1 outline-none bg-[transparent]"
        placeholder="Search products"
      />
    </div>
  );
}

interface MenuProps {
  title: string;
  hasMore?: boolean;
}

function Menu({ title, hasMore = false }: MenuProps) {
  return (
    <Link
      href="/dashboard"
      className={twMerge(
        "flex flex-row items-center justify-between text-start bg-white p-4 stroke-black hover:stroke-white hover:bg-black text-black hover:text-white",
        !hasMore && "underline"
      )}
    >
      {title}

      {hasMore && <OutlineChevronRightIcon className="w-5 fill-none" />}
    </Link>
  );
}
