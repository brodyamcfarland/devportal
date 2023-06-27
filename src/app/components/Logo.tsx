interface LogoProps {
     color: string;
     text?: string;
}

const Logo = ({ color, text }: LogoProps) => {
     return (
          <div className="flex relative mb-5 md:mb-10 mt-5 mx-10">
               <div className="h-36 w-36 md:h-64 md:w-64 border-2 border-black dark:border-white rounded-full relative dark:opacity-60 animate-slowspin ">
                    <div
                         className={`absolute h-36 w-36 md:h-64 md:w-64 border right-1 rounded-full animate-slowspin ${
                              color === "red" && "border-red-300"
                         } ${color === "blue" && "border-blue-300"} blur-lg`}
                    />
                    <div
                         className={`absolute h-36 w-36 md:h-64 md:w-64 border left-1 rounded-full animate-slowspin ${
                              color === "red" && "border-red-500"
                         } ${color === "blue" && "border-blue-500"}`}
                    />
                    <div
                         className={`absolute h-36 w-36 md:h-64 md:w-64 border top-1 rounded-full animate-slowspin ${
                              color === "red" && "border-red-700"
                         } ${color === "blue" && "border-blue-700"}`}
                    />
                    <div
                         className={`absolute h-36 w-36 md:h-64 md:w-64 border bottom-1 rounded-full animate-slowspin ${
                              color === "red" && "border-red-200"
                         } ${color === "blue" && "border-blue-200"} blur-lg`}
                    />
                    <div
                         className={`absolute h-36 w-36 md:h-64 md:w-64 border-2 rounded-full animate-slowspin ${
                              color === "red" && "border-red-800"
                         } ${color === "blue" && "border-blue-800"} blur-sm`}
                    />
                    <div
                         className={`absolute h-1 w-1 border-4 rounded-full animate-slowspin ${
                              color === "red" && "dark:border-red-400"
                         } ${
                              color === "blue" && "dark:border-blue-400"
                         } blur-sm top-10`}
                    />
               </div>
               <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-70 animate-[spin_20s_linear_infinite]">
                    <div
                         className={`absolute h-1 w-1 border-4 rounded-full dark:${
                              color === "red" && "border-red-600"
                         } ${color === "blue" && "border-blue-600"} ${
                              color === "red" && "border-red-600"
                         } ${
                              color === "blue" && "border-blue-600"
                         } blur-sm top-10 left-24 md:top-20 md:left-52 animate-pulse`}
                    />
               </div>
               <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-20 animate-[spin_10s_linear_infinite]">
                    <div
                         className={`absolute h-1 w-1 border-4 rounded-full dark:${
                              color === "red" && "border-red-600"
                         } ${color === "blue" && "border-blue-600"} ${
                              color === "red" && "border-red-600"
                         } ${
                              color === "blue" && "border-blue-600"
                         } blur-sm top-10 -left-8 md:top-20 md:-left-10 animate-pulse`}
                    />
               </div>
               <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-100 -z-19 animate-[spin_13s_linear_infinite]">
                    <div
                         className={`absolute h-1 w-1 border-4 rounded-full ${
                              color === "red" && "dark:border-red-600"
                         } ${color === "blue" && "dark:border-blue-600"} ${
                              color === "red" && "border-red-600"
                         } ${
                              color === "blue" && "border-blue-600"
                         } blur-sm top-10 left-24 md:top-20 md:left-50 animate-pulse`}
                    />
               </div>
               <div className="h-32 w-32 md:h-64 md:w-64 rounded-full absolute dark:opacity-50 -z-19 animate-[spin_15s_linear_infinite]">
                    <div
                         className={`absolute h-1 w-1 border-4 rounded-full ${
                              color === "red" && "dark:border-red-500"
                         } ${color === "blue" && "dark:border-blue-500"} ${
                              color === "red" && "border-red-500"
                         } ${
                              color === "blue" && "border-blue-500"
                         } blur-sm top-10 left-30 md:top-20 md:left-20 animate-pulse`}
                    />
               </div>
               <div className="absolute flex flex-col items-center justify-center h-36 w-36 md:h-64 md:w-64">
                    <span className="md:text-3xl dark:opacity-60">
                         [ dev portal ]
                    </span>
                    <span
                         className={`text-[10px] md:text-xs dark:opacity-60 ${
                              color === "red" && "text-red-500"
                         } ${
                              color === "blue" && "text-blue-500"
                         } font-bold tracking-wide`}
                    >
                         {text}
                    </span>
               </div>
          </div>
     );
};

export default Logo;
