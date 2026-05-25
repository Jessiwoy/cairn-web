import { Outlet } from "react-router-dom";

import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-cairn-off-white text-cairn-black">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
