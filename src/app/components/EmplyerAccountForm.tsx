"use client";

import { useState, FormEvent, MouseEvent } from "react";
import { TbCircleFilled } from "react-icons/tb";
import { stateCodes } from "../constants/states";
import { countries } from "../constants/countries";

const EmployerAccountForm = () => {
     const [companyName, setCompanyName] = useState<string>("");
     const [bio, setBio] = useState<string>("");
     const [state, setState] = useState<string>("");
     const [country, setCountry] = useState<string>("");
     const [zip, setZip] = useState<string>("");
     const [companyWebsite, setCompanyWebsite] = useState<string>("");
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [confirmPassword, setConfirmPassword] = useState<string>("");

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // Perform form validation and submission logic here
     };

     return (
          <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-1 dark:text-white/80 w-full h-full max-h-full overflow-y-auto"
          >
               <label className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">Company Name</span>
                         {companyName ? (
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
                         value={companyName}
                         onChange={(e) => setCompanyName(e.target.value)}
                         className="w-full p-2 rounded-md"
                         required
                         placeholder="Company Name"
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
                         placeholder="About company"
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
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">
                              Company Website URL
                         </span>
                    </div>
                    <input
                         type="text"
                         value={companyWebsite}
                         onChange={(e) => setCompanyWebsite(e.target.value)}
                         className="w-full p-2 rounded-md"
                         required
                         placeholder="https://xyz.com/"
                         title="Github URL"
                    />
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

export default EmployerAccountForm;
