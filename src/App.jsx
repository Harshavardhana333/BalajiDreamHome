import { Outlet } from "react-router-dom";
import Navbar from "./application/components/Navbar";
import Footer from "./application/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}