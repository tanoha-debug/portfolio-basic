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
| `thumbnail` | string | 一覧サムネ画像パス |
| `mainVisual` | string | 詳細メインビジュアル画像パス |
| `summary` | string | 一行サマリ |
| `url` | string | 公開サイト URL |
| `role` | string | 担当範囲 |
| `purpose` | string | サイトの目的 |
| `target` | string | ターゲット |
| `publishedAt` | string | 公開日（YYYY-MM-DD） |
| `order` | number | 並び順（昇順） |

型は `src/lib/works.ts` の `WorkMeta` に定義。

### 画像

- `public/images/` 配下に配置（現在はダミー SVG）
- next/image で SVG を扱うため `next.config.ts` に `dangerouslyAllowSVG` を有効化（自前 SVG のみ配置する前提）

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
