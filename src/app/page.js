export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        <div className="card-body gap-6">
          <div className="badge badge-secondary w-fit">Category-A8</div>
          <h1 className="text-3xl font-semibold">Online Book Borrowing Platform</h1>
          <p className="text-base-content/70">
            This is the starting shell for MangoShelf. Next up: banner, marquee,
            featured books, and authentication flows.
          </p>
          <div className="card-actions">
            <a className="btn btn-primary" href="/books">
              Browse Books
            </a>
            <a className="btn btn-outline" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
