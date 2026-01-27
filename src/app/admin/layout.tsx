import { DynamicNavbar } from "@/components/navbar/Navbar";
import { DynamicSidebar } from "@/components/Sidebar/Sidebar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DynamicSidebar role="ADMIN" className="w-64" />

      <main className="flex-1 py-4 lg:py-6 pr-2 lg:pr-4 overflow-auto flex flex-col gap-6">
        <DynamicNavbar role="ADMIN" />
      
        {children}
      </main>
    </div>
  );
}