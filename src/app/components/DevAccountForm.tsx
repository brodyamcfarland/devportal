"use client";

import { useState, FormEvent, MouseEvent } from "react";
import { TbCircleFilled } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { stateCodes } from "../constants/states";
import { countries } from "../constants/countries";
import { developers } from "../constants/developers";

const DevAccountForm = () => {
     const [fullName, setFullName] = useState<string>("");
     const [bio, setBio] = useState<string>("");
     const [state, setState] = useState<string>("");
     const [country, setCountry] = useState<string>("");
     const [zip, setZip] = useState<string>("");
     const [developerType, setDeveloperType] = useState<string>("");
     const [githubUrl, setGithubUrl] = useState<string>("");
     const [websiteLinks, setWebsiteLinks] = useState<string[]>([]);
     const [linkEntry, setLinkEntry] = useState<string>("");
     const [error, setError] = useState<string>("");
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [confirmPassword, setConfirmPassword] = useState<string>("");

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // Perform form validation and submission logic here
     };

     const handleWebsiteLinksChange = (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          if (
               linkEntry.startsWith("https://") ||
               linkEntry.startsWith("http://")
          ) {
               setError("");
               setWebsiteLinks([...websiteLinks, linkEntry]);
               setLinkEntry("");
          } else {
               setError("link_prefix");
               return;
          }
     };

     const deleteLink = (e: MouseEvent<HTMLButtonElement>, index: number) => {
          e.preventDefault();
          setWebsiteLinks((prevLinks) => {
               const updatedLinks = [...prevLinks];
               updatedLinks.splice(index, 1);
               return updatedLinks;
          });
     };

     return (
          <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-1 dark:text-white/80 w-full h-full max-h-full overflow-y-auto"
          >
               <label className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">Username</span>
                         {fullName ? (
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
                         value={fullName}
                         onChange={(e) => setFullName(e.target.value)}
                         className="w-full p-2 rounded-md"
                         required
                         placeholder="Full Name or Username"
                         title="Username"
                    />
               </label>
               <label className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">Email Address</span>
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
                         <span className="pl-2 opacity-80">Password</span>
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

               <label className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">
                              Confirm Password
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
                         {password !== confirmPassword &&
                              password.length > 0 &&
                              confirmPassword.length > 0 && (
                                   <span className="text-xs text-red-600 font-bold">
                                        Passwords do not match!
                                   </span>
                              )}
                    </div>
                    <input
                         type="password"
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         className="w-full p-2 rounded-md"
                         required
                         title="Confirm Password"
                    />
               </label>
               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">Bio</span>
                    <textarea
                         value={bio}
                         onChange={(e) => setBio(e.target.value)}
                         className="resize-none w-full p-2 rounded-md"
                         placeholder="About, Skills, Education, Tools, etc."
                         title="Bio"
                    />
               </label>

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">Country</span>
                    <select
                         value={country}
                         onChange={(e) => setCountry(e.target.value)}
                         className="p-2 rounded-md hover:cursor-pointer"
                         title="State"
                    >
                         <option value="">-- Select --</option>
                         {countries.map((country) => (
                              <option key={country} value={country}>
                                   {country}
                              </option>
                         ))}
                    </select>
               </label>
               {country === "United States" && (
                    <>
                         <label className="flex flex-col">
                              <span className="pl-2 opacity-80 text-sm">
                                   State
                              </span>
                              <select
                                   value={state}
                                   onChange={(e) => setState(e.target.value)}
                                   className="p-2 rounded-md hover:cursor-pointer"
                                   title="State"
                              >
                                   <option value="">-- Select --</option>
                                   {stateCodes.map((state) => (
                                        <option key={state} value={state}>
                                             {state}
                                        </option>
                                   ))}
                              </select>
                         </label>
                         <label className="flex flex-col">
                              <span className="pl-2 opacity-80 text-sm">
                                   Zip Code
                              </span>
                              <input
                                   type="number"
                                   value={zip}
                                   onChange={(e) => {
                                        const enteredValue = e.target.value;
                                        if (enteredValue.length <= 5) {
                                             setZip(enteredValue);
                                        }
                                   }}
                                   className="w-full p-2 rounded-md appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                   maxLength={5}
                                   title="Zip Code"
                              />
                         </label>
                    </>
               )}

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">
                         Developer Type
                    </span>
                    <select
                         value={developerType}
                         onChange={(e) => setDeveloperType(e.target.value)}
                         className="p-2 rounded-md hover:cursor-pointer"
                         title="Developer Type"
                    >
                         <option value="">-- Select --</option>
                         {developers.map((developer) => (
                              <option key={developer} value={developer}>
                                   {developer}
                              </option>
                         ))}
                    </select>
               </label>

               <label className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">
                              Github Profile URL
                         </span>
                    </div>
                    <input
                         type="text"
                         value={githubUrl}
                         onChange={(e) => setGithubUrl(e.target.value)}
                         className="w-full p-2 rounded-md"
                         required
                         placeholder="https://github.com/brodyamcfarland"
                         title="Github URL"
                    />
               </label>
               <label className="flex flex-col">
                    <div className="flex pl-2 opacity-80 text-sm gap-2 items-center">
                         <span>Website Links</span>
                         {error === "link_prefix" && (
                              <span className="text-xs font-bold text-orange-800">
                                   "https://" prefix required.
                              </span>
                         )}
                    </div>
                    <div className="flex rounded-md shadow-md">
                         <input
                              type="text"
                              value={linkEntry}
                              onChange={(e) => setLinkEntry(e.target.value)}
                              className="w-full p-2 rounded-l-md"
                              placeholder="https://website.com"
                              title="Add Website Links"
                         />
                         <button
                              onClick={handleWebsiteLinksChange}
                              title="Add Website Link"
                              className="flex items-center justify-center text-lg font-bold px-4 rounded-r-md bg-white/10 hover:bg-black/20 dark:hover:bg-white/30 duration-200"
                         >
                              +
                         </button>
                    </div>
                    {websiteLinks.length > 0 && (
                         <div className="flex flex-col gap-1 max-h-20 overflow-y-auto rounded-b-md p-2 text-sm mx-2 dark:bg-white/5 bg-black/30 border border-white/10">
                              {websiteLinks.map((link, index) => (
                                   <div className="flex border items-center border-white/50 px-2 rounded-md dark:hover:bg-white/10 hover:bg-black/5 bg-white dark:bg-transparent">
                                        <span className="flex-1">{link}</span>
                                        <button
                                             key={index}
                                             onClick={(e) =>
                                                  deleteLink(e, index)
                                             }
                                             className="opacity-80 hover:opacity-100"
                                             title="Remove Link"
                                        >
                                             <MdOutlineCancel />
                                        </button>
                                   </div>
                              ))}
                         </div>
                    )}
               </label>

               <button
                    type="submit"
                    className="relative w-full inline-flex mt-8 items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-gray-800 to-red-900 group-hover:to-blue-500 hover:text-white dark:text-white"
               >
                    <span className="text-center w-full relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-gray-800/20 to-red-900/20">
                         Create Account
                    </span>
               </button>
          </form>
     );
};

export default DevAccountForm;
