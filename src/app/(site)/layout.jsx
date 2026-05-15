import Navbar from "@/components/Navbar";
export default function SiteLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />

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
    </div>
  );
}
