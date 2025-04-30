import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Book } from "@/types/book";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <motion.div
      className="book-card rounded-lg overflow-hidden bg-card border shadow-sm h-full flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      <div className="p-5 flex flex-col flex-grow relative">
        <motion.div
          className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={false}
        />

        <div className="relative">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-mono text-lg font-semibold text-book-title group-hover:text-primary transition-colors duration-200">
              {book.title}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mr-2 -mt-1 text-muted-foreground hover:text-primary cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                // ショッピングカート処理をここに追加
                if (book.link) {
                  window.open(book.link, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">ショッピングカートに追加</span>
            </Button>
          </div>
          <p className="text-book-subtitle font-mono mb-2">{book.author}</p>

          <div className="flex flex-wrap gap-2 mt-1 mb-3">
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{book.region}</span>
            <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{book.timeWritten}</span>
          </div>

          <p className="text-sm leading-relaxed flex-grow line-clamp-3 relative">{book.synopsis}</p>
        </div>
      </div>
    </motion.div>
  );
}
