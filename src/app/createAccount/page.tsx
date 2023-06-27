import Link from "next/link";
import Logo from "../components/Logo";

const CreateAccount = () => {
     return (
          <main className="flex flex-col flex-1 w-full max-w-lg items-center mx-auto">
               <div className="flex flex-col items-center mainContainer p-6 md:px-14 gap-2 w-full">
                    <Logo color="gray" text="CREATE ACCOUNT" />
                    <div className="flex flex-col flex-1 items-center pb-4 w-full">
                         <h1 className="dark:opacity-70 pb-6 font-bold tracking-wide">
                              Pick Your Account Type
                         </h1>
                         <div className="grid grid-cols-2 gap-14">
                              <div className="flex flex-col items-center">
                                   <Link
                                        href={"/createDevAccount"}
                                        className="w-32 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-red-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                                   >
                                        <span className="text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-red-900/20">
                                             [ dev ]
                                        </span>
                                   </Link>
                                   <ul className="flex flex-col pt-4 gap-2 text-xs dark:text-gray-400">
                                        <li>• Create Developer Profiles</li>
                                        <li>• Share Project Links</li>
                                        <li>• Apply to Jobs</li>
                                   </ul>
                              </div>
                              <div className="flex flex-col items-center">
                                   <Link
                                        href={"/createEmployerAccount"}
                                        className="w-32 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-blue-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                                   >
                                        <span className="w-full text-center relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-blue-900/20">
                                             [ employer ]
                                        </span>
                                   </Link>
                                   <ul className="flex flex-col pt-4 gap-2 text-xs dark:text-gray-400">
                                        <li>• Create Company Profiles</li>
                                        <li>• Create Job Listings</li>
                                        <li>• Hire Devs</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <p className="text-xs opacity-50 pt-4">
                         Already have an account?{" "}
                         <Link
                              href={"/login"}
                              className="opacity-100 font-bold hover:underline dark:hover:brightness-150 hover:text-orange-600"
                         >
                              Sign In
                         </Link>
                    </p>
               </div>
          </main>
     );
};

export default CreateAccount;
