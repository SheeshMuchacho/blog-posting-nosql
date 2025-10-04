import Sidebar from "@/components/admin-components/sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex">

      <Sidebar />

      <ToastContainer theme="dark"/>

      <main className="flex flex-col w-full">
        
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
          <h3 className="font-medium text-xl">Admin Panel</h3>
          <Image src='/admin/profile_icon.png' width={40} height={40} alt=''/>
        </div>

        {children}

      </main>

    </div>
  );
}