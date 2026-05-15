import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import books from "@/data/books.json";
import { auth } from "@/lib/auth";

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export default async function BookDetails({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const rawId = Array.isArray(resolvedParams?.id)
    ? resolvedParams?.id?.[0]
    : resolvedParams?.id;
  const bookId = rawId ? decodeURIComponent(String(rawId)) : "";
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) {
    redirect("/auth/login");
  }

  const book = books.find((item) => String(item.id) === String(bookId));

  if (!book) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold">Book not found</h1>
        <p className="text-base-content/70">
          We could not locate that title. Try browsing the full catalog.
        </p>
        <Link className="btn btn-primary" href="/books">
          Back to All Books
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-base-100 px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <Link className="btn btn-ghost mb-6" href="/books">
          Back to All Books
        </Link>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="overflow-hidden rounded-3xl shadow">
            <img
              src={book.image_url}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="badge badge-secondary">{book.category}</span>
            <h1 className="text-4xl font-semibold">{book.title}</h1>
            <p className="text-base-content/70">By {book.author}</p>
            <p className="text-base-content/70">{book.description}</p>
            <div className="stats stats-vertical shadow sm:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Available</div>
                <div className="stat-value text-2xl">
                  {book.available_quantity}
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Category</div>
                <div className="stat-value text-2xl">{book.category}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">Borrow Now</button>
              <button className="btn btn-outline">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
