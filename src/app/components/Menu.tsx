import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface MenuProps {
     setShowMenu: Dispatch<SetStateAction<boolean>>;
     menuButtonRef: React.RefObject<HTMLButtonElement>;
}

const Menu = ({ setShowMenu, menuButtonRef }: MenuProps) => {
     const menuRef = useRef<HTMLElement>(null);

     useEffect(() => {
          const handleOutsideClick = (event: MouseEvent) => {
               if (
                    menuButtonRef.current &&
                    menuButtonRef.current.contains(event.target as Node)
               ) {
                    return;
               }

               if (
                    menuRef.current &&
                    !menuRef.current.contains(event.target as Node)
               ) {
                    setShowMenu(false);
               }
          };

          document.addEventListener("mousedown", handleOutsideClick);

          return () => {
               document.removeEventListener("mousedown", handleOutsideClick);
          };
     }, [setShowMenu, menuButtonRef]);

     // When you create logins, make sure Logout button goes to the bottom of nav

     return (
          <nav
               ref={menuRef}
               className="absolute flex flex-col gap-4 z-20 dark:bg-[#1a1a1a] bg-[#696969] shadow-md w-full md:rounded-t-lg md:w-[20rem] top-[96px] md:top-[75px] right-0 md:right-6 p-4 rounded-b-lg text-sm items-center justify-center"
          >
               <Link href={"/"} className="menuLinks">
                    Home
               </Link>
               <Link href={"/"} className="menuLinks">
                    Sign In
               </Link>
               <Link href={"/"} className="menuLinks">
                    Create Account
               </Link>
               {/* {Make Different Menu Buttons for Dev Profile vs Recruiter Profile} */}
               <Link href={"/"} className="menuLinks">
                    Profile
               </Link>
               <Link href={"/"} className="menuLinks">
                    Find Devs
               </Link>
               <Link href={"/"} className="menuLinks">
                    Find Jobs
               </Link>
          </nav>
     );
};

export default Menu;
