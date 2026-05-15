import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="card border border-base-200 bg-base-100 shadow-sm">
          <div className="card-body gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Register</h1>
              <p className="text-sm text-base-content/70">
                Create an account to start borrowing books today.
              </p>
            </div>
            <form className="space-y-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="url"
                  placeholder="https://"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                />
              </label>
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </form>
            <p className="text-sm text-base-content/70">
              Already have an account?{" "}
              <Link className="link link-primary" href="/auth/login">
                Login here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
