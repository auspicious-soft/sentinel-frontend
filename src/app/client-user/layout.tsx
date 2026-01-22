import { DynamicSidebar } from "@/components/Sidebar/Sidebar";

export default function ClientUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DynamicSidebar role="CLIENT_USER" className="w-64" />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}