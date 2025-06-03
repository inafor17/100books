// components/BookListStatic.tsx
import type { Book } from "@/types/book";
import BookGridView from "@/components/BookGridView";

interface Props {
  books: Book[];
}

export default function BookListStatic({ books }: Props) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <BookGridView books={books} onBookSelect={() => {}} />
    </div>
  );
}