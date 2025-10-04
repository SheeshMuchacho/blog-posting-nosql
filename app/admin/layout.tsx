import Sidebar from "@/components/admin-components/sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex h-screen bg-slate-50">

      <Sidebar />

      <ToastContainer theme="dark"/>

      <div className="flex flex-col flex-1">
        
        <header className="flex items-center justify-between w-full py-3 max-h-[90px] px-12 border-b border-black bg-white">
          <h3 className="font-medium text-xl">Admin Panel</h3>
          <Image src='/admin/profile_icon.png' width={60} height={60} alt=''/>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="p-12">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}