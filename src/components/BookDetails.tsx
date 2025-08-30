import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Book } from "@/types/book";

interface BookDetailsProps {
  book: Book;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookDetails({ book, open, onOpenChange }: BookDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-mono text-book-title">{book.title}</DialogTitle>
          <DialogDescription className="text-lg font-mono text-book-subtitle">{book.author}</DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex flex-col">
              <span className="text-muted-foreground">国・地域</span>
              <span className="font-medium">{book.country}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">言語</span>
              <span className="font-medium">{book.language}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">執筆年代</span>
              <span className="font-medium">{book.publishedDateFrom}–{book.publishedDateTo}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold font-mono mb-2">あらすじ</h3>
            <p className="text-base leading-relaxed font-mono text-muted-foreground">{book.summary}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold font-mono mb-2">豆知識</h3>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed font-mono text-muted-foreground">• {book.trivia1}</p>
              <p className="text-sm leading-relaxed font-mono text-muted-foreground">• {book.trivia2}</p>
              <p className="text-sm leading-relaxed font-mono text-muted-foreground">• {book.trivia3}</p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            {book.shoppingLink && (
              <a
                href={book.shoppingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                作品を見る
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
