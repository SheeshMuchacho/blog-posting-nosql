import Sidebar from "@/components/admin-components/sidebar";

export default async function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}