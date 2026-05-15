"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const defaultValues = {
  name: "",
  email: "",
  image: "",
  password: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ defaultValues });

  const onSubmit = async (values) => {
    const { data, error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      image: values.image || undefined,
      callbackURL: `${window.location.origin}/auth/login`,
    });

    if (error) {
      setError("root", {
        type: "server",
        message: error.message || "Registration failed. Try again.",
      });
      return;
    }

    if (data) {
      router.push("/auth/login");
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name ? (
                  <span className="mt-1 text-xs text-error">
                    {errors.name.message}
                  </span>
                ) : null}
              </label>
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
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="url"
                  placeholder="https://"
                  className="input input-bordered w-full"
                  {...register("image")}
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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
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
                {isSubmitting ? "Creating account..." : "Register"}
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
