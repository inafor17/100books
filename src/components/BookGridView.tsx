import { motion } from "framer-motion";
import type { Book } from "@/types/book";
import BookCard from "@/components/BookCard";

interface BookGridViewProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export default function BookGridView({ books, onBookSelect }: BookGridViewProps) {
  return (
    <motion.div
      key="grid"
      className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {books.map((book) => (
        <div key={book.id} onClick={() => onBookSelect(book)} className="cursor-pointer">
          <BookCard book={book} />
        </div>
      ))}
    </motion.div>
  );
}
