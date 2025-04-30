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
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col">
              <span className="text-muted-foreground">地域</span>
              <span className="font-medium">{book.region}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">執筆年代</span>
              <span className="font-medium">{book.timeWritten}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold font-mono mb-2">あらすじ</h3>
            <p className="text-base leading-relaxed font-mono text-muted-foreground">{book.synopsis}</p>
          </div>

          <div className="pt-4 flex justify-end">
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              作品を見る
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
