export default function CreateEmployerAccount() {
     return (
          <main className="flex flex-col md:flex-row mx-auto mainContainer 2xl:max-w-6xl xl:max-w-4xl lg:max-w-3x flex-1 items-center gap-2 p-2">
               <div className="flex relative mb-10 mt-5 mx-10">
                    <div className="h-36 w-36 md:h-64 md:w-64 border-2 border-black dark:border-white rounded-full relative dark:opacity-60 animate-slowspin ">
                         <div className="absolute h-36 w-36 md:h-64 md:w-64 border right-1 rounded-full animate-slowspin border-blue-300 blur-lg" />
                         <div className="absolute h-36 w-36 md:h-64 md:w-64 border left-1 rounded-full animate-slowspin border-blue-500" />
                         <div className="absolute h-36 w-36 md:h-64 md:w-64 border top-1 rounded-full animate-slowspin border-blue-700" />
                         <div className="absolute h-36 w-36 md:h-64 md:w-64 border bottom-1 rounded-full animate-slowspin border-blue-200 blur-lg" />
                         <div className="absolute h-36 w-36 md:h-64 md:w-64 border-2 rounded-full animate-slowspin bordeblue-800 blur-sm" />
                         <div className="absolute h-1 w-1 border-4 rounded-full animate-slowspin dark:border-blue-400 border-red blur-sm top-10" />
                    </div>
                    <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-70 animate-[spin_20s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-blue-600 border-blue-600 blur-sm top-10 left-24 md:top-20 md:left-52 animate-pulse" />
                    </div>
                    <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-20 animate-[spin_10s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-blue-600 border-blue-600 blur-sm top-10 -left-8 md:top-20 md:-left-10 animate-pulse" />
                    </div>
                    <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-100 -z-19 animate-[spin_13s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-blue-600 border-blue-600 blur-sm top-10 left-24 md:top-20 md:left-50 animate-pulse" />
                    </div>
                    <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-50 -z-19 animate-[spin_15s_linear_infinite]">
                         <div className="absolute h-1 w-1 border-4 rounded-full dark:border-blue-600 border-blue-600 blur-sm top-10 left-30 md:top-20 md:left-20 animate-pulse" />
                    </div>
                    <div className="absolute flex flex-col items-center justify-center h-36 w-36 md:h-64 md:w-64">
                         <span className="md:text-3xl dark:opacity-60">
                              [ dev portal ]
                         </span>
                         <span className="text-[10px] md:text-xs dark:opacity-60 text-blue-500 font-bold">
                              EMPLOYER
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
