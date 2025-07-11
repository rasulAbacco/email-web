export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-xl border">
        {children}
      </div>
    </div>
  );
}

