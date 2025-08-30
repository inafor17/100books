# プロジェクト構造メモ - 世界傑作文学100選

## 概要
ノルウェー・ブック・クラブ選出の世界傑作文学100選を紹介する静的サイト（Next.js 15 + TypeScript）

## 技術スタック
- **フレームワーク**: Next.js 15.3.1 (App Router)
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS v4
- **UI**: Radix UI コンポーネント
- **アイコン**: Lucide React
- **テーマ**: next-themes（ライト/ダークモード対応）
- **フォント**: システムフォント（Google Fonts依存を削除）

## アーキテクチャ
- **静的サイト生成（SSG）**: `export const dynamic = "force-static"`で全ページ静的生成
- **サーバーコンポーネント中心**: 可能な限りサーバーサイドレンダリング
- **クライアントコンポーネント最小化**: テーマ切り替えのみに限定

## プロジェクト構造

### `/src/app/` - Next.js App Router
- `layout.tsx` - ルートレイアウト（SEOメタデータ、ThemeProvider）
- `page.tsx` - `/cards`へのリダイレクト
- `cards/page.tsx` - カード表示ページ（メイン）
- `list/page.tsx` - リスト表示ページ
- `book/[id]/page.tsx` - 書籍詳細ページ（動的ルーティング）
- `globals.css` - グローバルスタイル（システムフォント設定）

### `/src/components/` - React コンポーネント
**書籍表示コンポーネント:**
- `BookCard.tsx` - 書籍カード（サーバーコンポーネント）
- `BookGridView.tsx` - グリッドレイアウト
- `BookListView.tsx` - テーブル形式レイアウト

**UI制御コンポーネント:**
- `ThemeToggle.tsx` - テーマ切り替え（dynamic import、SSR無効）
- `ThemeToggleClient.tsx` - 実際のテーマ切り替えロジック（クライアント）
- `ViewModeToggle.tsx` - 表示モード切り替え（ページナビゲーション）

**UIコンポーネント (`/ui/`):**
- Radix UIベースのコンポーネント群

### `/src/data/` - データ
- `books.ts` - CSVから変換した書籍データ（100作品）

### `/src/types/` - TypeScript型定義
- `book.ts` - Book型定義（CSVデータ構造に対応）
- `view.ts` - ビュー関連型

### `/src/lib/` - ユーティリティ
- `utils.ts` - 共通ユーティリティ関数

## Book型定義（更新版）
```typescript
interface Book {
  id: number;
  title: string;
  author: string;
  country: string;        // 国・地域
  language: string;       // 言語
  publishedDateFrom: string;
  publishedDateTo: string;
  summary: string;        // あらすじ
  trivia1: string;        // 豆知識1
  trivia2: string;        // 豆知識2
  trivia3: string;        // 豆知識3
  shoppingLink: string;   // 購入リンク
}
```

## ページ構成
1. **トップページ (`/`)**: `/cards`へリダイレクト
2. **カード表示 (`/cards`)**: 書籍を美しいカードレイアウトで表示
3. **リスト表示 (`/list`)**: 書籍をテーブル形式で効率的に表示
4. **詳細ページ (`/book/[id]`)**: 各書籍の詳細情報（あらすじ、豆知識、購入リンク）

## 主要な機能
- **静的サイト生成**: 高速な読み込み、SEO最適化
- **レスポンシブデザイン**: スマホ・タブレット・PC対応
- **ダークモード**: システム設定に応じた自動切り替え + 手動切り替え
- **表示モード切り替え**: カード/リスト表示の選択
- **詳細ページ**: 全書籍データを活用した充実した情報表示
- **外部リンク**: 各作品の購入・詳細ページへのリンク

## SEO対応
- **メタデータ**: タイトル、説明文、キーワード、OpenGraph
- **構造化データ**: 適切なHTMLセマンティクス
- **静的生成**: クローラーフレンドリー
- **sitemap.xml**: 自動生成（ビルド時）

## パフォーマンス最適化
- **フォント**: Google Fonts依存削除、システムフォント使用
- **JavaScript最小化**: サーバーコンポーネント中心
- **画像**: 最適化されたアイコン（Lucide React）
- **静的アセット**: favicon.svg（軽量）

## 利用可能なスクリプト
- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバー起動
- `npm run lint` - ESLint実行

## データソース
- 元データ: `classics_with_trivia_1_100.csv`
- 変換スクリプトによりTypeScript形式に変換
- 「ー」→「作者不明」の自動変換処理

## 制約事項
- 検索・ソート機能なし（SEO最適化のため動的機能を削除）
- アニメーション最小限（Framer Motion削除）
- クライアント機能はテーマ切り替えのみに限定