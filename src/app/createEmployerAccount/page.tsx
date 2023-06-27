import EmployerAccountForm from "../components/EmplyerAccountForm";
import Logo from "../components/Logo";

export default function CreateEmployerAccount() {
     return (
          <main className="flex flex-col md:flex-row mx-auto mainContainer xl:max-w-4xl lg:max-w-3x flex-1 items-center gap-2 p-2">
               <Logo color="blue" text="EMPLOYER" />
               <div className="mx-10 flex flex-col flex-1 items-center py-4 h-full overflow-y-auto">
                    <h1 className="dark:opacity-70 tracking-wide pb-2 text-lg font-bold">
                         Create Employer Account
                    </h1>
                    <EmployerAccountForm />
               </div>
          </main>
     );
}
