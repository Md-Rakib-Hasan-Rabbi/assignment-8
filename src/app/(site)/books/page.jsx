"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import books from "@/data/books.json";

const categories = ["All", "Story", "Tech", "Science"];
const sortOptions = [
  { value: "latest", label: "Sort by latest" },
  { value: "availability", label: "Sort by availability" },
  { value: "category", label: "Sort by category" },
];

export default function BooksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredBooks = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const results = books.filter((book) => {
      const matchesCategory =
        activeCategory === "All" || book.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        book.title.toLowerCase().includes(normalizedSearch) ||
        book.author.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "availability") {
      return [...results].sort(
        (a, b) => b.available_quantity - a.available_quantity
      );
    }

    if (sortBy === "category") {
      return [...results].sort((a, b) => a.category.localeCompare(b.category));
    }

    return [...results].sort((a, b) => Number(b.id) - Number(a.id));
  }, [activeCategory, searchTerm, sortBy]);

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
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "btn btn-sm btn-primary"
                    : "btn btn-sm btn-outline"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-base-200 p-4">
          <input
            className="input input-bordered w-full md:w-80"
            placeholder="Search by title or author"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <select
            className="select select-bordered w-full md:w-48"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBooks.map((book) => (
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
