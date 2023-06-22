import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
     return (
          <main className="flex flex-col flex-1 items-center gap-2 p-2">
               <Hero />
               <div className="flex flex-col gap-8 pb-6 pt-4 mainContainer max-w-xl">
                    <span className="dark:opacity-70 font-bold tracking-wide">
                         Create an Account
                    </span>
                    <div className="flex flex-row gap-14">
                         <Link
                              href={"/createDevAccount"}
                              className="w-32 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-red-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                         >
                              <span className="text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-red-900/20">
                                   [ dev ]
                              </span>
                         </Link>
                         <Link
                              href={"/createEmployerAccount"}
                              className="w-32 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                         >
                              <span className="w-full text-center relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-blue-900/20">
                                   [ employer ]
                              </span>
                         </Link>
                    </div>
               </div>
               <p className="text-xs opacity-50">
                    Already have an account?{" "}
                    <Link
                         href={"/login"}
                         className="opacity-100 font-bold hover:underline dark:hover:brightness-150 hover:text-orange-600"
                    >
                         Log In
                    </Link>
               </p>
          </main>
     );
}
