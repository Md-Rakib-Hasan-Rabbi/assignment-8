import "../globals.css";

export const metadata = {
  title: "MangoShelf Auth",
  description: "Login or register for MangoShelf",
};

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-base-100">{children}</div>
  );
}
