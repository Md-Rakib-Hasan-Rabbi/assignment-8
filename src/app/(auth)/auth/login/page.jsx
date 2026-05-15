"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "@/lib/auth-client";

const defaultValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ defaultValues });

  const onSubmit = async (values) => {
    const result = await signIn.email({
      email: values.email,
      password: values.password,
    });

    if (result?.error) {
      setError("root", {
        type: "server",
        message: result.error.message || "Login failed. Try again.",
      });
      return;
    }

    router.push("/books");
  };

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
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email ? (
                  <span className="mt-1 text-xs text-error">
                    {errors.email.message}
                  </span>
                ) : null}
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password ? (
                  <span className="mt-1 text-xs text-error">
                    {errors.password.message}
                  </span>
                ) : null}
              </label>
              {errors.root ? (
                <div className="rounded-md border border-error/30 bg-error/10 px-3 py-2 text-xs text-error">
                  {errors.root.message}
                </div>
              ) : null}
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Login"}
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
