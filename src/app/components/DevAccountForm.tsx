"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { TbCircleFilled } from "react-icons/tb";

const DevAccountForm = () => {
     const [fullName, setFullName] = useState<string>("");
     const [bio, setBio] = useState<string>("");
     const [state, setState] = useState<string>("");
     const [country, setCountry] = useState<string>("");
     const [zip, setZip] = useState<string>("");
     const [developerType, setDeveloperType] = useState<string>("");
     const [skills, setSkills] = useState<string[]>([]);
     const [websiteLinks, setWebsiteLinks] = useState<string[]>([]);
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [confirmPassword, setConfirmPassword] = useState<string>("");

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // Perform form validation and submission logic here
     };

     const handleSkillsChange = (e: ChangeEvent<HTMLSelectElement>) => {
          const selectedOptions = Array.from(
               e.target.selectedOptions,
               (option) => option.value
          );
          setSkills(selectedOptions);
     };

     const handleWebsiteLinksChange = (e: ChangeEvent<HTMLInputElement>) => {
          const links = e.target.value.split(",");
          setWebsiteLinks(links);
     };

     return (
          <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-1 dark:text-white/80 w-full max-h-full overflow-y-auto"
          >
               <label className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center text-left text-sm">
                         <span className="pl-2 opacity-80">Full Name</span>
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
                         className="w-full p-1 rounded-md"
                         required
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
                         className="w-full p-1 rounded-md"
                         required
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
                         type="text"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         className="w-full p-1 rounded-md"
                         required
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
                    </div>
                    <input
                         type="text"
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         className="w-full p-1 rounded-md"
                         required
                    />
               </label>
               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">Description</span>
                    <textarea
                         value={bio}
                         onChange={(e) => setBio(e.target.value)}
                         className="resize-none w-full p-2 rounded-md"
                    />
               </label>

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">State</span>
                    <input
                         type="text"
                         value={state}
                         onChange={(e) => setState(e.target.value)}
                         className="w-full p-2 rounded-md"
                    />
               </label>

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">Country</span>
                    <input
                         type="text"
                         value={country}
                         onChange={(e) => setCountry(e.target.value)}
                         className="w-full p-2 rounded-md"
                    />
               </label>

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">Zip Code</span>
                    <input
                         type="text"
                         value={zip}
                         onChange={(e) => setZip(e.target.value)}
                         className="w-full p-2 rounded-md"
                    />
               </label>

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">
                         Developer Type
                    </span>
                    <select
                         value={developerType}
                         onChange={(e) => setDeveloperType(e.target.value)}
                         className="p-2 rounded-md"
                    >
                         <option value="">-- Select --</option>
                         {/* Add options for developer types */}
                    </select>
               </label>

               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">
                         Skills (Choose 5)
                    </span>
                    <select
                         multiple
                         value={skills}
                         onChange={handleSkillsChange}
                         className="w-full p-2 rounded-md"
                    >
                         {/* Add options for skills */}
                    </select>
               </label>
               <label className="flex flex-col">
                    <span className="pl-2 opacity-80 text-sm">
                         Website Links
                    </span>
                    <div className="flex rounded-md shadow-md">
                         <input
                              type="text"
                              value={websiteLinks}
                              onChange={handleWebsiteLinksChange}
                              className="w-full p-2 rounded-l-md"
                         />
                         <button className="flex items-center justify-center text-lg font-bold px-4 rounded-r-md bg-white/10 hover:bg-white/30 duration-200">
                              +
                         </button>
                    </div>
                    <div className="rounded-b-md p-2 text-xs mx-2 bg-white/5 border border-white/10">
                         {websiteLinks}
                    </div>
               </label>

               <button type="submit">Create Dev Account</button>
          </form>
     );
};

export default DevAccountForm;
