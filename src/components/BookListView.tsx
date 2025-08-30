import Link from "next/link";
import type { Book } from "@/types/book";

interface BookListViewProps {
  books: Book[];
  onBookSelect?: (book: Book) => void;
}

export default function BookListView({ books }: BookListViewProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="divide-y">
        {/* Header row for larger screens */}
        <div className="hidden sm:grid sm:[grid-template-columns:2fr_1.5fr_1fr_1fr] gap-4 p-4 font-medium text-sm text-muted-foreground bg-muted/50">
          <div>表題</div>
          <div>作者</div>
          <div>国・地域</div>
          <div>年代</div>
        </div>

        {/* Book list */}
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/book/${book.id}`}
            className="grid gap-4 p-4 items-start sm:[grid-template-columns:2fr_1.5fr_1fr_1fr] hover:bg-muted/50 transition-colors cursor-pointer"
          >
            {/* Mobile layout */}
            <div className="sm:hidden grid grid-cols-[auto_auto] gap-x-4 w-full">
              <div className="font-medium hover:text-primary transition-colors line-clamp-1">{book.title}</div>
              <div className="text-right">
                {book.publishedDateFrom === book.publishedDateTo 
                  ? book.publishedDateFrom 
                  : `${book.publishedDateFrom}–${book.publishedDateTo}`}
              </div>
              <div className="text-muted-foreground line-clamp-1">{book.author}</div>
              <div className="text-right text-muted-foreground">{book.country}</div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:block font-medium hover:text-primary transition-colors line-clamp-1">
              {book.title}
            </div>
            <div className="hidden sm:block text-muted-foreground line-clamp-1">{book.author}</div>
            <div className="hidden sm:block">{book.country}</div>
            <div className="hidden sm:block">
              {book.publishedDateFrom === book.publishedDateTo 
                ? book.publishedDateFrom 
                : `${book.publishedDateFrom}–${book.publishedDateTo}`}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
