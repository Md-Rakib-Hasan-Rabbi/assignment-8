"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const userName = session?.user?.name || "User";

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
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
        {session?.user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{userName}</span>
            <button
              className="btn btn-outline btn-sm"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn btn-primary btn-sm" href="/auth/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
