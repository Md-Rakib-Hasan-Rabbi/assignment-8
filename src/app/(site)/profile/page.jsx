import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold">My Profile</h1>
      <p className="text-base-content/70">
        Your borrowed titles and membership details will appear here after
        authentication is wired up.
      </p>
      <Link className="btn btn-outline" href="/books">
        Browse Books
      </Link>
    </div>
  );
}
