import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
     return (
          <main className="flex flex-col flex-1 items-center gap-2 p-2">
               <Hero />

               <div className="flex flex-row gap-2 md:gap-14">
                    <Link
                         href={"/login"}
                         className="w-40 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-orange-900 to-gray-800 group-hover:to-blue-500 hover:text-white dark:text-white"
                    >
                         <span className="text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-red-900/20">
                              Sign In
                         </span>
                    </Link>
                    <Link
                         href={"/createAccount"}
                         className="w-40 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-green-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                    >
                         <span className="w-full text-center relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-blue-900/20">
                              Create Account
                         </span>
                    </Link>
               </div>
          </main>
     );
}
