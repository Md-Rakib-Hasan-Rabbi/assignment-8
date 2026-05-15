import Link from "next/link";
import books from "@/data/books.json";

export default function Home() {
  const featuredBooks = books.slice(0, 4);
  const marqueeText = `New Arrivals: ${books
    .slice(0, 5)
    .map((book) => book.title)
    .join(" | ")} | Special Discount on Memberships...`;

  return (
    <div className="flex-1">
      <section className="hero bg-base-200">
        <div className="hero-content flex-col gap-10 px-6 py-16 lg:flex-row">
          <div className="max-w-xl space-y-5">
            <div className="badge badge-secondary">Category-A8 Mango</div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Find Your Next Read
            </h1>
            <p className="text-base-content/70">
              Browse curated collections, filter by category, and borrow instantly
              from MangoShelf. Your next adventure starts here.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/books">
                Browse Now
              </Link>
              <Link className="btn btn-outline" href="/auth/login">
                Join Free
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md">
            <div className="mockup-window border bg-base-100">
              <div className="grid gap-3 bg-base-200 p-6">
                {featuredBooks.slice(0, 3).map((book) => (
                  <div
                    key={book.id}
                    className="flex items-center justify-between rounded-xl bg-base-100 p-3 shadow"
                  >
                    <div>
                      <p className="text-sm font-semibold">{book.title}</p>
                      <p className="text-xs text-base-content/60">
                        {book.author}
                      </p>
                    </div>
                    <span className="badge badge-outline">{book.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100">
        <div className="marquee border-y border-base-200 bg-base-200/60 py-3 text-sm font-medium">
          <div className="marquee__track">{marqueeText}</div>
        </div>
      </section>

      <section className="bg-base-100 px-6 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Featured Books</h2>
              <p className="text-base-content/70">
                Hand-picked reads trending across the MangoShelf community.
              </p>
            </div>
            <Link className="btn btn-outline" href="/books">
              View All Books
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredBooks.map((book) => (
              <div key={book.id} className="card bg-base-100 shadow">
                <figure className="h-48">
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <span className="badge badge-secondary badge-outline">
                      {book.category}
                    </span>
                  </div>
                  <p className="text-sm text-base-content/70">{book.author}</p>
                  <p className="text-sm text-base-content/70">
                    {book.description}
                  </p>
                  <div className="card-actions justify-between">
                    <span className="text-xs text-base-content/60">
                      Available: {book.available_quantity}
                    </span>
                    <Link className="btn btn-sm btn-primary" href={`/books/${book.id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-200 px-6 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">How MangoShelf Works</h2>
              <p className="text-base-content/70">
                Borrowing is simple. Pick a category, reserve instantly, and keep
                track of every loan in your profile.
              </p>
              <ul className="steps steps-vertical">
                <li className="step step-primary">Create your account</li>
                <li className="step step-primary">Browse by category</li>
                <li className="step step-primary">Borrow instantly</li>
                <li className="step step-primary">Return on your schedule</li>
              </ul>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {books.slice(4, 8).map((book) => (
                <div key={book.id} className="card bg-base-100 shadow">
                  <div className="card-body">
                    <span className="badge badge-outline">{book.category}</span>
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm text-base-content/70">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 px-6 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Membership Perks</h2>
              <p className="text-base-content/70">
                Unlock early access, exclusive author talks, and curated reading
                paths tailored to your taste.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="card border border-base-200">
                  <div className="card-body">
                    <h3 className="font-semibold">Priority Holds</h3>
                    <p className="text-sm text-base-content/70">
                      Reserve new arrivals before they hit the public shelf.
                    </p>
                  </div>
                </div>
                <div className="card border border-base-200">
                  <div className="card-body">
                    <h3 className="font-semibold">Reading Insights</h3>
                    <p className="text-sm text-base-content/70">
                      Track streaks, favorites, and personalized suggestions.
                    </p>
                  </div>
                </div>
                <div className="card border border-base-200">
                  <div className="card-body">
                    <h3 className="font-semibold">Community Events</h3>
                    <p className="text-sm text-base-content/70">
                      Join live sessions with authors and local book clubs.
                    </p>
                  </div>
                </div>
                <div className="card border border-base-200">
                  <div className="card-body">
                    <h3 className="font-semibold">Offline Access</h3>
                    <p className="text-sm text-base-content/70">
                      Download your next read before you go off-grid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow">
              <div className="card-body">
                <h3 className="text-xl font-semibold">Category Spotlight</h3>
                <p className="text-sm text-base-content/70">
                  Explore what is trending in every shelf right now.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Story", value: "4 collections" },
                    { label: "Tech", value: "3 collections" },
                    { label: "Science", value: "5 collections" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-base-100 px-4 py-3"
                    >
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm text-base-content/70">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <Link className="btn btn-primary mt-4" href="/books">
                  Explore All Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
