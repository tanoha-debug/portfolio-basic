# Portfolio (basic)

シンプルなポートフォリオサイト。Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + MDX 構成。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` で表示されます。

## ビルド

```bash
npm run build
npm run start
```

## 作品データの追加・編集

- 作品 1 件 = `src/content/works/<slug>.mdx` 1 ファイル
- frontmatter にメタ情報、本文に作品解説（Markdown / MDX）
- ファイルを増やせば TOP の WORKS 一覧と `/works/<slug>` の動的ルートが自動生成される
- 表示順は frontmatter の `order` 昇順

### frontmatter スキーマ

| キー | 型 | 説明 |
| --- | --- | --- |
| `title` | string | 作品タイトル |
| `client` | string | クライアント名 |
| `category` | string | カテゴリ（例: `Design / Coding(Responsive)`） |
| `thumbnail` | string | 一覧サムネ画像パス（4:3 で表示） |
| `mainVisual` | string | 詳細メインビジュアル画像パス（16:9 で表示） |
| `summary` | string | 一行サマリ |
| `url` | string | 公開サイト URL |
| `role` | string | 担当範囲 |
| `purpose` | string | サイトの目的 |
| `target` | string | ターゲット |
| `publishedAt` | string | 公開日（YYYY-MM-DD） |
| `order` | number | 並び順（昇順） |
| `gallery` | array? | 補足画像（任意。詳細ページに 2 列グリッドで表示） |

`gallery` 各要素のキー:

| キー | 型 | 説明 |
| --- | --- | --- |
| `src` | string | 画像パス（必須） |
| `alt` | string | 代替テキスト（必須） |
| `caption` | string? | キャプション（任意） |
| `width` | number? | 元画像の幅 px（任意。next/image の比率計算用） |
| `height` | number? | 元画像の高さ px（任意。next/image の比率計算用） |

型は `src/lib/works.ts` の `WorkMeta` / `GalleryItem` に定義。`src/content/works/work-1.mdx` が全項目を埋めた参考例。

### 画像

- `public/images/<slug>/` 配下に作品ごとのフォルダを切る運用を推奨
  - `thumb.{jpg,webp}` … TOP サムネ（4:3）
  - `main.{jpg,webp}` … 詳細キービジュアル（16:9）
  - `sub-1.{jpg,webp}` … 補足画像（gallery 用、必要枚数）
- 形式: jpg / webp（写真・スクショ）。Next.js が自動で WebP/AVIF に変換します
- 画像最適化のため frontmatter の `width` / `height` には**元画像の実寸**を入れるとレイアウトシフトを防げます
- 現在のダミー SVG を使う間だけ `next.config.ts` の `dangerouslyAllowSVG` が必要。実画像（jpg/webp）に置き換えたら外して OK

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx           # 共通レイアウト・Header/Footer/ScrollToTop
│   ├── page.tsx             # TOP（Hero / Works / Skill / About / Contact）
│   ├── globals.css          # デザイントークン (Tailwind v4 @theme)
│   └── works/[slug]/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── WorksSection.tsx
│   ├── WorkCard.tsx
│   ├── SkillSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ScrollToTop.tsx
│   ├── SectionHeading.tsx
│   └── MotionFadeIn.tsx
├── content/works/*.mdx
└── lib/works.ts
```

## デプロイ

Vercel に新規プロジェクトとして接続し、`main` ブランチを push するだけ。環境変数 `NEXT_PUBLIC_SITE_URL` に本番 URL を入れると OGP の絶対 URL が正しく出ます。
