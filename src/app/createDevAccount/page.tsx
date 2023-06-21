export default function CreateDevAccount() {
     return (
          <main className="flex flex-col md:flex-row mx-auto mainContainer max-w-6xl flex-1 items-center gap-2 p-2">
               <div className="flex relative mb-10 mt-5 mx-10">
                    <div className="h-64 w-64 border-2 border-black dark:border-white rounded-full relative dark:opacity-60 animate-slowspin">
                         <div className="absolute h-64 w-64 border right-1 rounded-full animate-slowspin border-red-300 blur-lg" />
                         <div className="absolute h-64 w-64 border left-1 rounded-full animate-slowspin border-red-500" />
                         <div className="absolute h-64 w-64 border top-1 rounded-full animate-slowspin border-red-700" />
                         <div className="absolute h-64 w-64 border bottom-1 rounded-full animate-slowspin border-red-200 blur-lg" />
                         <div className="absolute h-64 w-64 border-2 rounded-full animate-slowspin border-red-200 blur-sm" />
                         <div className="absolute h-1 w-1 border-4 rounded-full animate-slowspin dark:border-red-400 border-black blur-sm top-10" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-70 animate-[spin_10s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-red-500/50 border-black blur-sm top-20 left-6 animate-pulse" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-20 animate-[spin_8s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-red-500/80 border-black blur-sm top-20 -left-4 animate-pulse" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-100 -z-19 animate-[spin_13s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-red-500/50 border-black blur-sm top-20 left-3/4 animate-pulse" />
                    </div>
                    <div className="h-64 w-64 rounded-full absolute dark:opacity-50 -z-19 animate-[spin_13s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-red-500/70 border-black blur-sm top-20 left-10 animate-pulse" />
                    </div>
                    <div className="absolute flex flex-col items-center justify-center h-64 w-64">
                         <span className="text-3xl dark:opacity-60">
                              [ dev portal ]
                         </span>
                         <span className="opacity-60 text-red-500 tracking-widest text-sm">
                              DEVELOPER
                         </span>
                    </div>
               </div>
               <div className="mainContainer mx-10 flex flex-col flex-1">
                    <h1 className="opacity-80 tracking-wide py-2">
                         Create Developer Account
                    </h1>
               </div>
          </main>
     );
}
