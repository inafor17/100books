export const dynamic = "force-static";

import { books } from "@/data/books";
import ThemeToggle from "@/components/ThemeToggle";
import ViewModeToggle from "@/components/ViewModeToggle";
import BookListView from "@/components/BookListView";

export const metadata = {
  title: "リスト表示",
  description:
    "ノルウェー・ブック・クラブが選定した世界文学の傑作100選をリスト形式で紹介。一覧形式で効率よく作品を閲覧し、お気に入りの名作を見つけてください。",
  keywords:
    "世界文学, 名作, ノルウェー・ブック・クラブ, 古典文学, 現代文学, 海外文学, 書籍一覧",
  openGraph: {
    title: "世界傑作文学100選 - リスト表示",
    description:
      "ノルウェー・ブック・クラブが選定した世界文学の傑作100選をリスト形式で紹介",
    type: "website",
  },
};

export default function ListPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                世界傑作文学100選
              </h1>
              <p className="text-muted-foreground">
                ノルウェー・ブック・クラブ選出の傑作100選
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-8 flex justify-end">
            <ViewModeToggle value="list" onChange={() => {}} />
          </div>

          <BookListView books={books} />
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} nomon. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
