import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MangoShelf",
  description: "Online book borrowing platform",
};

export default function RootLayout({ children }) {
  const isAuthed = false;
  const userName = "Reader";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="lemonade"
    >
      <body className="min-h-full flex flex-col">
        <header className="navbar sticky top-0 z-50 bg-base-100/80 px-4 backdrop-blur">
          <div className="navbar-start">
            <Link className="btn btn-ghost text-xl" href="/">
              MangoShelf
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/books">All Books</Link>
              </li>
              <li>
                <Link href="/profile">My Profile</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            {isAuthed ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{userName}</span>
                <button className="btn btn-outline btn-sm">Logout</button>
              </div>
            ) : (
              <Link className="btn btn-primary btn-sm" href="/login">
                Login
              </Link>
            )}
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="footer bg-base-200 text-base-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
              <aside className="space-y-3">
                <h2 className="text-2xl font-semibold">Borrow. Read. Return.</h2>
                <p className="text-sm opacity-80">
                  MangoShelf keeps your library flow smooth with curated shelves
                  and lightning-fast borrowing.
                </p>
              </aside>
              <nav className="space-y-2">
                <h3 className="footer-title">Contact Us</h3>
                <p className="text-sm">hello@mangoshelf.com</p>
                <p className="text-sm">+880 1XX-XXX-XXXX</p>
                <p className="text-sm">Dhaka, Bangladesh</p>
              </nav>
              <nav className="space-y-2">
                <h3 className="footer-title">Follow</h3>
                <div className="flex gap-3">
                  <a className="link link-hover" href="https://facebook.com">
                    Facebook
                  </a>
                  <a className="link link-hover" href="https://instagram.com">
                    Instagram
                  </a>
                  <a className="link link-hover" href="https://x.com">
                    X
                  </a>
                </div>
              </nav>
            </div>
            <div className="mt-8 border-t border-base-300 pt-4 text-center text-xs opacity-70">
              © 2026 MangoShelf Library Cloud. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
