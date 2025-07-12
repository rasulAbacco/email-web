import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatBot from "../components/ChatBot";
import SocialIcons from "../components/SocialIcons";
import "../styles/layout.css";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="main-section">
          {children}
          <SocialIcons />
          <ChatBot />
        </main>
      </div>
    </div>
  );
}
