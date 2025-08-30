export const dynamic = "force-static";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { books } from "@/data/books";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";

interface BookDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: BookDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return {
      title: "作品が見つかりません",
    };
  }

  return {
    title: `${book.title} - ${book.author}`,
    description: book.summary.slice(0, 160) + "...",
    keywords: [
      book.title,
      book.author,
      book.country,
      book.language,
      "世界文学",
      "名作",
    ],
    openGraph: {
      title: `${book.title} - ${book.author}`,
      description: book.summary.slice(0, 160) + "...",
      type: "article",
    },
  };
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    notFound();
  }

  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Link
                href="/cards"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline truncate">一覧に戻る</span>
              </Link>
            </div>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 max-w-3xl">
        <article>
          <h1 className="text-3xl font-bold mb-8">{book.title}</h1>
          
          <div className="mb-12 space-y-1 text-sm text-muted-foreground">
            <div>{book.author}</div>
            <div>{book.country} · {book.language}</div>
            <div>
              {book.publishedDateFrom === book.publishedDateTo
                ? book.publishedDateFrom
                : `${book.publishedDateFrom}–${book.publishedDateTo}`}
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">あらすじ</h2>
            <p className="leading-relaxed">{book.summary}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">豆知識</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-sm text-muted-foreground min-w-[20px]">1.</span>
                <p className="leading-relaxed">{book.trivia1}</p>
              </div>
              <div className="flex gap-3">
                <span className="text-sm text-muted-foreground min-w-[20px]">2.</span>
                <p className="leading-relaxed">{book.trivia2}</p>
              </div>
              <div className="flex gap-3">
                <span className="text-sm text-muted-foreground min-w-[20px]">3.</span>
                <p className="leading-relaxed">{book.trivia3}</p>
              </div>
            </div>
          </section>

          {book.shoppingLink && (
            <section className="mb-12">
              <a
                href={book.shoppingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-foreground hover:bg-foreground hover:text-background rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                作品を見る
              </a>
            </section>
          )}

          <nav className="pt-8 border-t">
            <div className="flex justify-between">
              <Link
                href="/cards"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                カード表示
              </Link>
              <Link
                href="/list"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                リスト表示
              </Link>
            </div>
          </nav>
        </article>
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
