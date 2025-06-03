// components/BookList.tsx
import dynamic from "next/dynamic";
import type { Book } from "@/types/book";
import BookListStatic from "./BookListStatic";

const BookListInteractive = dynamic(() => import("./BookListInteractive"), {
  ssr: false,
});

export default function BookList({ books }: { books: Book[] }) {
  return (
    <>
      <BookListStatic books={books} />
      <BookListInteractive books={books} />
    </>
  );
}