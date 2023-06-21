import Image from "next/image";

const Hero = () => {
     return (
          <div className="flex flex-col items-center justify-center max-w-xl">
               <div className="flex relative mb-10 mt-5">
                    <div className="h-64 w-64 border-2 border-black dark:border-white rounded-full relative dark:opacity-60 animate-slowspin">
                         <div className="absolute h-64 w-64 border right-1 rounded-full animate-slowspin border-gray-300 blur-lg" />
                         <div className="absolute h-64 w-64 border left-1 rounded-full animate-slowspin border-gray-500" />
                         <div className="absolute h-64 w-64 border top-1 rounded-full animate-slowspin border-gray-700" />
                         <div className="absolute h-64 w-64 border bottom-1 rounded-full animate-slowspin border-gray-200 blur-lg" />
                         <div className="absolute h-64 w-64 border-2 rounded-full animate-slowspin border-gray-200 blur-sm" />
                         <div className="absolute h-1 w-1 border-4 rounded-full animate-slowspin dark:border-gray-200 border-black blur-sm top-10" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-70 animate-[spin_10s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-white border-black blur-sm top-20 left-6 animate-pulse" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-20 animate-[spin_8s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-white border-black blur-sm top-20 -left-4 animate-pulse" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-100 -z-19 animate-[spin_13s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-white border-black blur-sm top-20 left-3/4 animate-pulse" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-50 -z-19 animate-[spin_13s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-white border-black blur-sm top-20 left-10 animate-pulse" />
                    </div>
                    <div className="absolute flex items-center justify-center h-64 w-64">
                         <span className="text-3xl dark:opacity-60">
                              [ dev portal ]
                         </span>
                    </div>
               </div>
               <div className="flex flex-col items-center py-4">
                    <span className="text-xl dark:opacity-80 font-bold tracking-wide">
                         Develop Your Digital Career
                    </span>
                    <span className="dark:opacity-50 text-center py-6 px-3">
                         Dev Portal is a job searching platform made for
                         software developers. Developers can create profiles for
                         employers to view. Employers can create profiles for
                         job openings and hiring.
                    </span>
               </div>
          </div>
     );
};

export default Hero;
