"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import Logo from "../components/Logo";
import { TbCircleFilled } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// Set up Github and Google Sign in with email sign in as a backup
const Login = () => {
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");

     const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
     );

     const signInWithEmail = async () => {
          const { data, error } = await supabase.auth.signInWithPassword({
               email: email,
               password: password,
          });
     };

     const signInWithGitHub = async () => {
          // Need to setup OAuth in Github First []
          const { data, error } = await supabase.auth.signInWithOAuth({
               provider: "github",
          });
     };

     const signInWithGoogle = async () => {
          // Need to setup OAuth in Google First []
          const { data, error } = await supabase.auth.signInWithOAuth({
               provider: "google",
          });
     };

     return (
          <main className="flex flex-col md:flex-row mx-auto mainContainer xl:max-w-4xl lg:max-w-3x flex-1 items-center gap-2 p-2">
               <Logo color="gray" text="SIGN IN" />
               <div className="mx-10 flex flex-col flex-1 items-center py-4 h-full overflow-y-auto">
                    <h1 className="dark:opacity-70 tracking-wide pb-2 text-lg font-bold">
                         Sign In
                    </h1>
                    <section className="flex flex-col w-full gap-2 pb-4">
                         <button
                              onClick={signInWithGoogle}
                              className="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-800 via-blue-800 to-red-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                         >
                              <span className="flex gap-2 items-center justify-center text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-red-900/20">
                                   <FcGoogle size={18} />
                                   Google Sign In
                              </span>
                         </button>
                         <button
                              onClick={signInWithGitHub}
                              className="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-purple-900 group-hover:to-purple-500 hover:text-white dark:text-white"
                         >
                              <span className="flex gap-2 items-center justify-center text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-purple-900/20">
                                   <AiFillGithub size={18} />
                                   Github Sign In
                              </span>
                         </button>
                    </section>
                    <form
                         onSubmit={signInWithEmail}
                         className="flex flex-col gap-2 w-full"
                    >
                         <label className="flex flex-col">
                              <div className="flex flex-row gap-2 items-center text-left text-sm">
                                   <span className="pl-2 opacity-80">
                                        Email Address
                                   </span>
                                   {email ? (
                                        <TbCircleFilled
                                             size={12}
                                             className="h-3 w-3 text-green-500/70"
                                        />
                                   ) : (
                                        <TbCircleFilled
                                             size={12}
                                             className="h-3 w-3 text-red-500/70"
                                        />
                                   )}
                              </div>
                              <input
                                   type="text"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="w-full p-2 rounded-md"
                                   required
                                   placeholder="johndoe@gmail.com"
                                   title="Email Address"
                              />
                         </label>

                         <label className="flex flex-col">
                              <div className="flex flex-row gap-2 items-center text-left text-sm">
                                   <span className="pl-2 opacity-80">
                                        Password
                                   </span>
                                   {password ? (
                                        <TbCircleFilled
                                             size={12}
                                             className="h-3 w-3 text-green-500/70"
                                        />
                                   ) : (
                                        <TbCircleFilled
                                             size={12}
                                             className="h-3 w-3 text-red-500/70"
                                        />
                                   )}
                              </div>
                              <input
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   className="w-full p-2 rounded-md"
                                   required
                                   title="Set Password"
                              />
                         </label>
                         <button
                              type="submit"
                              className="relative w-full inline-flex mt-4 items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-red-900 group-hover:to-blue-500 hover:text-white dark:text-white"
                         >
                              <span className="text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-red-900/20">
                                   Sign In
                              </span>
                         </button>
                    </form>
               </div>
          </main>
     );
};

export default Login;
