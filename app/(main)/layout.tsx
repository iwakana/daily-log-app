import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* サイドバー（PCで表示） */}
      <aside className="w-64 flex-shrink-0 z-30 hidden md:block">
        <Sidebar userName="name" userEmail="" />
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 w-full p-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}
