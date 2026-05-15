import Link from "next/link";
import books from "@/data/books.json";

export default function BooksPage() {
  return (
    <div className="bg-base-100 px-6 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">All Books</h1>
            <p className="text-base-content/70">
              Browse every title across Story, Tech, and Science.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-outline">Story</button>
            <button className="btn btn-sm btn-outline">Tech</button>
            <button className="btn btn-sm btn-outline">Science</button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-base-200 p-4">
          <input
            className="input input-bordered w-full md:w-80"
            placeholder="Search by title or author"
            type="text"
          />
          <select className="select select-bordered w-full md:w-48">
            <option>Sort by latest</option>
            <option>Sort by availability</option>
            <option>Sort by category</option>
          </select>
          <button className="btn btn-neutral">Search</button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow">
              <figure className="h-52">
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{book.title}</h2>
                  <span className="badge badge-outline">{book.category}</span>
                </div>
                <p className="text-sm text-base-content/70">{book.author}</p>
                <p className="text-sm text-base-content/70">
                  {book.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-base-content/60">
                    Available: {book.available_quantity}
                  </span>
                  <div className="flex gap-2">
                    <Link className="btn btn-sm btn-outline" href={`/books/${book.id}`}>
                      View Details
                    </Link>
                    <button className="btn btn-sm btn-primary">Borrow</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
