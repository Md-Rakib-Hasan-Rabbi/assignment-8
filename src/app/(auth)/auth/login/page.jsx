import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="card border border-base-200 bg-base-100 shadow-sm">
          <div className="card-body gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Login</h1>
              <p className="text-sm text-base-content/70">
                Sign in to continue your MangoShelf journey.
              </p>
            </div>
            <form className="space-y-4">
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
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </label>
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
            <div className="divider text-xs">OR</div>
            <button type="button" className="btn btn-outline w-full">
              Continue with Google
            </button>
            <p className="text-sm text-base-content/70">
              New to MangoShelf?{" "}
              <Link className="link link-primary" href="/auth/register">
                Register here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
