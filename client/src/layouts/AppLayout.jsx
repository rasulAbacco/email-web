import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatBot from "../components/ChatBot";
import SocialIcons from "../components/SocialIcons";

export default function AppLayout({ children }) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-muted/10">
          {children}
          <SocialIcons />
          <ChatBot />
        </main>
      </div>
    </div>
  );
}
