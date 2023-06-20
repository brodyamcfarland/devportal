"use client";

import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { useRef, useState } from "react";
import Menu from "./Menu";
import Image from "next/image";

const Header = () => {
     const [showMenu, setShowMenu] = useState<boolean>(false);
     const menuButtonRef = useRef<HTMLButtonElement>(null);

     return (
          <header className="flex justify-between w-full items-center max-w-7xl mx-auto py-6 px-6 sticky top-0 z-50">
               <Link
                    href={"/"}
                    className="flex flex-row gap-4 items-center justify-center opacity-70 hover:opacity-100 duration-300"
                    title="Home"
               >
                    <Image
                         src={"/devport.png"}
                         alt="logo"
                         height={500}
                         width={500}
                         className="rounded-full h-12 w-12 object-contain border-2"
                    />
                    <span className="tracking-widest text-lg">Dev Portal</span>
               </Link>
               <div className="flex flex-row gap-4 items-center justify-center">
                    <DarkModeButton />
                    {showMenu ? (
                         <button
                              onClick={() => setShowMenu(false)}
                              className="opacity-70 hover:opacity-100 duration-300"
                         >
                              <MdOutlineCancel size={25} />
                         </button>
                    ) : (
                         <button
                              onClick={() => setShowMenu(true)}
                              className="opacity-70 hover:opacity-100 duration-300"
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
