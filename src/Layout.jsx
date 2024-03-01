import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function Layout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Content />
      </main>
    </div>
  );
}
