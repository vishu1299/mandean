"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBook } from "react-icons/fa";
import { LayoutGrid, List } from "lucide-react";

type Book = {
  id: number;
  title: string;
  author: string;
  imageurl: string;
  description?: string;
  category?: string;
  publishedDate?: string;
  pages?: number;
  language?: string;
  isbn?: string;
  rating?: number;
  totalRatings?: number;
  pdfUrl?: string;
  videoUrl?: string;
  fileSize?: string;
  duration?: string;
};

const bookDetails: Omit<Book, "imageurl" | "id"> = {
  title: "The Art of Programming",
  author: "Robert C. Martin",
  description:
    "A comprehensive guide to clean code principles and software craftsmanship. This book covers essential programming concepts, design patterns, and best practices that every developer should know.",
  category: "Technology",
  publishedDate: "2023-01-15",
  pages: 432,
  language: "English",
  isbn: "978-0-123456-78-9",
  rating: 4.5,
  totalRatings: 1247,
  pdfUrl: "/books/programming-guide.pdf",
  videoUrl: "/books/programming-tutorial.mp4",
  fileSize: "15.2 MB",
  duration: "2h 30m",
};

const images: string[] = [
  "bookone.png",
  "booktwo.png",
  "bookthree.png",
  "bookfour.png",
  "bookfive.png",
  "booksix.png",
];

const books: Book[] = images.map((img, index) => ({
  ...bookDetails,
  id: index + 1,
  imageurl: `/books/${img}`,
  title: `${bookDetails.title} ${index + 1}`,
}));

const BooksGrid = () => {
  const router = useRouter();

  const handleBookClick = (bookId: number) => {
    router.push(`/book/${bookId}`);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 mb-4">
          <FaBook className="my-auto h-10" />
          <h3 className="text-xl">Available Books</h3>
        </div>
        <div className="flex gap-2">
          <LayoutGrid />
          <List />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md shadow p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleBookClick(book.id)}
          >
            <div className="relative h-64 w-full mb-4 rounded overflow-hidden">
              <Image
                src={book.imageurl || "/placeholder.svg"}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{book.author}</p>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500 text-sm">
                  {"★".repeat(Math.floor(book.rating || 4))}
                  {"☆".repeat(5 - Math.floor(book.rating || 4))}
                </div>
                <span className="text-xs text-gray-500">
                  ({book.totalRatings})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksGrid;
