import { Outlet } from "react-router-dom";

import { Header } from "@/components/organisms/Header";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-cairn-off-white text-cairn-black">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
