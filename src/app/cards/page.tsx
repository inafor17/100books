export const dynamic = "force-static";

import { books } from "@/data/books";
import ThemeToggle from "@/components/ThemeToggle";
import ViewModeToggle from "@/components/ViewModeToggle";
import BookGridView from "@/components/BookGridView";

export const metadata = {
  title: "カード表示",
  description:
    "ノルウェー・ブック・クラブが選定した世界文学の傑作100選をカード形式で紹介。千夜一夜物語、ギルガメシュ叙事詩、源氏物語など、古今東西の名作を美しいカードレイアウトでご覧ください。",
  keywords:
    "世界文学, 名作, ノルウェー・ブック・クラブ, 古典文学, 現代文学, 海外文学",
  openGraph: {
    title: "世界傑作文学100選 - カード表示",
    description:
      "ノルウェー・ブック・クラブが選定した世界文学の傑作100選をカード形式で紹介",
    type: "website",
  },
};

export default function CardsPage() {
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
            <ViewModeToggle value="grid" onChange={() => {}} />
          </div>

          <BookGridView books={books} />
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
