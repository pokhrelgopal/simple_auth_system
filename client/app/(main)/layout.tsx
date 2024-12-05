import Header from "@/components/Header";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Header />
      <main className="">{children}</main>
    </main>
  );
};

export default MainLayout;
