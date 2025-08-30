import type { Book } from "@/types/book";
import BookCard from "@/components/BookCard";

interface BookGridViewProps {
  books: Book[];
  onBookSelect?: (book: Book) => void;
}

export default function BookGridView({ books }: BookGridViewProps) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}
