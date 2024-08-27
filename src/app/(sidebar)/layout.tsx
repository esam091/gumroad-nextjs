import { PropsWithChildren } from "react";
import Header from "./header";
import Lettermark from "@/icons/Lettermark";
import NavigationSection from "./navigation-section";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex h-full">
        <div className="hidden md:flex flex-col bg-black text-white">
          <header className="px-5 h-[7rem] flex items-center">
            <Lettermark className="fill-white w-[157px]" />
          </header>
          <NavigationSection />
        </div>
        <div className="flex-1">
          <Header />
          <main className="pt-[62px] md:pt-[unset] flex-1 [&>*]:h-full">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
