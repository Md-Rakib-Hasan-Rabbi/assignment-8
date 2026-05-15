import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) {
    redirect("/auth/login");
  }

  const { user, session: userSession } = session;

  return (
    <div className="bg-base-100 px-6 py-16">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">My Profile</h1>
            <p className="text-base-content/70">
              Manage your account details and activity.
            </p>
          </div>
          <Link className="btn btn-outline" href="/books">
            Browse Books
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="card border border-base-200 bg-base-100 shadow-sm">
            <div className="card-body items-center gap-4 text-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary/30 ring-offset-2">
                  <img
                    src={user.image || "https://i.ibb.co/2kR6f7C/avatar.png"}
                    alt={user.name || "User"}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {user.name || "Unnamed Reader"}
                </h2>
                <p className="text-sm text-base-content/70">{user.email}</p>
              </div>
              <div className="badge badge-outline">Member</div>
            </div>
          </div>

          <div className="card border border-base-200 bg-base-100 shadow-sm">
            <div className="card-body gap-6">
              <div>
                <h3 className="text-lg font-semibold">Profile Information</h3>
                <p className="text-sm text-base-content/70">
                  Stored details from your MangoShelf account.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/60">
                    Full Name
                  </p>
                  <p className="font-semibold">{user.name || "-"}</p>
                </div>
                <div className="rounded-2xl bg-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/60">
                    Email
                  </p>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div className="rounded-2xl bg-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/60">
                    User ID
                  </p>
                  <p className="font-semibold break-all">{user.id}</p>
                </div>
                <div className="rounded-2xl bg-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/60">
                    Email Verified
                  </p>
                  <p className="font-semibold">
                    {user.emailVerified ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/60">
                    Session Expires
                  </p>
                  <p className="font-semibold">
                    {new Date(userSession.expiresAt).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-2xl border border-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/60">
                    Last Updated
                  </p>
                  <p className="font-semibold">
                    {new Date(user.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
