import { motion } from "framer-motion";
import type { Book } from "@/types/book";

interface BookListViewProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export default function BookListView({ books, onBookSelect }: BookListViewProps) {
  return (
    <motion.div
      key="list"
      className="rounded-lg border bg-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="divide-y">
        {/* Header row for larger screens */}
        <div className="hidden sm:grid sm:[grid-template-columns:2fr_1.5fr_1fr_1fr] gap-4 p-4 font-medium text-sm text-muted-foreground bg-muted/50">
          <div>表題</div>
          <div>作者</div>
          <div>地域</div>
          <div>年代</div>
        </div>

        {/* Book list */}
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="grid gap-4 p-4 items-start cursor-pointer hover:bg-muted/50 sm:[grid-template-columns:2fr_1.5fr_1fr_1fr]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={() => onBookSelect(book)}
          >
            {/* Mobile layout */}
            <div className="sm:hidden grid grid-cols-[auto_auto] gap-x-4 w-full">
              <div className="font-medium hover:text-primary transition-colors line-clamp-1">{book.title}</div>
              <div className="text-sm text-right">{book.timeWritten}</div>
              <div className="text-muted-foreground line-clamp-1">{book.author}</div>
              <div className="text-sm text-right text-muted-foreground">{book.region}</div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:block font-medium hover:text-primary transition-colors line-clamp-1">
              {book.title}
            </div>
            <div className="hidden sm:block text-muted-foreground line-clamp-1">{book.author}</div>
            <div className="hidden sm:block text-sm">{book.region}</div>
            <div className="hidden sm:block text-sm">{book.timeWritten}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
