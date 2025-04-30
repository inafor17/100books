export const dynamic = "force-static";
import ThemeToggle from "@/components/ThemeToggle";
import BookList from "@/components/BookList";
import { books } from "@/data/books";

export default function Home() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center gap-12">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-display font-bold">世界傑作文学100選</h1>
            <p className="text-muted-foreground">ノルウェー・ブック・クラブ選出の傑作100選を紹介</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <BookList books={books} />
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} ina. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
