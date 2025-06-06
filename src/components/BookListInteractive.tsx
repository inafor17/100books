// components/BookListInteractive.tsx
"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Book } from "@/types/book";
import type { SortKey, SortOrder } from "@/types/sort";
import type { ViewMode } from "@/types/view";
import BookDetails from "@/components/BookDetails";
import SearchBar from "@/components/SearchBar";
import SortControls from "@/components/SortControls";
import ViewModeToggle from "@/components/ViewModeToggle";
import BookListView from "@/components/BookListView";
import BookGridView from "@/components/BookGridView";

interface Props {
  books: Book[];
}

export default function BookListInteractive({ books }: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    const searchLower = searchTerm.toLowerCase().trim();
    return books
      .filter((book) => {
        if (!searchTerm) return true;
        return (
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          book.region.toLowerCase().includes(searchLower) ||
          book.synopsis.toLowerCase().includes(searchLower)
        );
      })
      .sort((a, b) => {
        if (sortKey === "sortTimeWritten") {
          return sortOrder === "asc" ? a.sortTimeWritten - b.sortTimeWritten : b.sortTimeWritten - a.sortTimeWritten;
        }

        const aValue = a[sortKey].toString().toLowerCase();
        const bValue = b[sortKey].toString().toLowerCase();
        return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
  }, [books, searchTerm, sortKey, sortOrder]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8 space-y-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className="flex flex-row gap-4 items-start sm:items-center justify-between">
          <SortControls
            sortKey={sortKey}
            onSortKeyChange={setSortKey}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />
          <ViewModeToggle value={viewMode} onChange={setViewMode} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {filteredBooks.length === 0 ? (
          <motion.div
            className="text-center py-16 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg">検索条件に一致する作品が見つかりませんでした。</p>
            <p className="mt-2">検索条件を変更してお試しください。</p>
          </motion.div>
        ) : viewMode === "list" ? (
          <BookListView books={filteredBooks} onBookSelect={setSelectedBook} />
        ) : (
          <BookGridView books={filteredBooks} onBookSelect={setSelectedBook} />
        )}
      </AnimatePresence>

      {selectedBook && (
        <BookDetails
          book={selectedBook}
          open={!!selectedBook}
          onOpenChange={(open) => !open && setSelectedBook(null)}
        />
      )}
    </div>
  );
}