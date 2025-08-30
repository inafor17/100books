import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import type { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="book-card rounded-lg overflow-hidden bg-card border shadow-sm h-full flex flex-col group hover:shadow-md transition-shadow relative">
      <Link 
        href={`/book/${book.id}`} 
        className="absolute inset-0 z-10"
        aria-label={`${book.title}の詳細を見る`}
      />
      <div className="p-5 flex flex-col flex-grow relative">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

        <div className="relative">
          <div className="flex justify-between items-start mb-1">
            <h2 className="font-mono text-lg font-semibold text-book-title group-hover:text-primary transition-colors duration-200">
              {book.title}
            </h2>
            {book.shoppingLink && (
              <a
                href={book.shoppingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 -mr-1 -mt-1 text-primary/60 hover:text-primary hover:bg-primary/10 rounded-full inline-flex items-center justify-center relative z-20 transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">作品を見る</span>
              </a>
            )}
          </div>
          <p className="text-book-subtitle font-mono mb-2 text-sm">
            {book.author}
          </p>

          <div className="flex flex-wrap gap-2 mt-1 mb-3">
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
              {book.country}
            </span>
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
              {book.publishedDateFrom === book.publishedDateTo
                ? book.publishedDateFrom
                : `${book.publishedDateFrom}–${book.publishedDateTo}`}
            </span>
          </div>

          <p className="text-sm leading-relaxed flex-grow line-clamp-3 relative">
            {book.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
