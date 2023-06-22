"use client";

import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { useRef, useState } from "react";
import Menu from "./Menu";

const Header = () => {
     const [showMenu, setShowMenu] = useState<boolean>(false);
     const menuButtonRef = useRef<HTMLButtonElement>(null);

     return (
          <header className="flex justify-between w-full items-center max-w-7xl mx-auto py-6 px-6 sticky top-0 z-50 backdrop-blur-md">
               <Link
                    href={"/"}
                    className="flex flex-row gap-4 items-center justify-center opacity-70 hover:opacity-100 duration-300"
                    title="Home"
               >
                    <div className="flex relative">
                         <div className="h-12 w-12 border-2 border-black dark:border-white rounded-full relative dark:opacity-60 animate-slowspin">
                              <div className="absolute h-12 w-12 border right-[1px] rounded-full animate-slowspin border-gray-300 blur-lg" />
                              <div className="absolute h-12 w-12 border left-[1px] rounded-full animate-slowspin border-gray-500" />
                              <div className="absolute h-12 w-12 border top-[1px] rounded-full animate-slowspin border-gray-700" />
                              <div className="absolute h-12 w-12 border bottom-[1px] rounded-full animate-slowspin border-gray-200 blur-lg" />
                              <div className="absolute h-12 w-12 border-2 rounded-full animate-slowspin border-gray-200 blur-sm" />
                         </div>

                         <div className="absolute flex items-center justify-center h-12 w-12">
                              <span className="text-md dark:opacity-60">
                                   [ dp ]
                              </span>
                         </div>
                    </div>
                    <span className="tracking-widest text-lg">Dev Portal</span>
               </Link>
               <div className="flex flex-row gap-4 items-center justify-center">
                    <DarkModeButton />
                    {showMenu ? (
                         <button
                              onClick={() => setShowMenu(false)}
                              className="opacity-70 hover:opacity-100 duration-300"
                              title="Close Menu"
                         >
                              <MdOutlineCancel size={25} />
                         </button>
                    ) : (
                         <button
                              onClick={() => setShowMenu(true)}
                              className="opacity-70 hover:opacity-100 duration-300"
                              title="Menu"
                         >
                              <TbMenu2 size={25} />
                         </button>
                    )}
               </div>
               {showMenu && (
                    <Menu
                         setShowMenu={setShowMenu}
                         menuButtonRef={menuButtonRef}
                    />
               )}
          </header>
     );
};

export default Header;
