<div align="center">

# dg4-system

**dgdgdgdg** ブランドのデザインシステム

<br>

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=fff)

</div>

---

## About

**dg4-system** は dgdgdgdg のアイデンティティを形づくるデザイントークンとガイドラインの集合です。カラー・タイポグラフィ・スペーシング・ロゴの仕様とアセットを定義し、Web・印刷を問わず一貫したビジュアル表現を可能にします。

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+) または [Bun](https://bun.sh/)

### Installation & Run

```bash
# 依存関係のインストール
npm install
# または
bun install

# 開発サーバー起動
npm run dev
# または
bun run dev
```

## Project Structure

```bash
src/
├── content/     # コンテンツ（モジュール説明の Markdown）
├── layouts/     # ページレイアウト
├── pages/       # ファイルベースルーティング
└── styles/      # グローバルスタイル

public/
├── color-app/   # カラーパレット用 Web アプリ
└── logo/        # ロゴ SVG アセット
```

## Modules

| モジュール     | 説明 |
| -------------- | ---- |
| **Color**      | 16 進 `0`, `4`, `d` のみで構成する 729 色のブランドカラーパレット。グラデーション表示・色探索用 Web アプリあり。 |
| **Typography** | フォントファミリ・タイプスケール・字重・行間の定義。 |
| **Spacing**    | 基準 0.25rem のスペーシングスケール。余白の統一に使用。 |
| **Logo**       | ロゴバリアント（row / square）、クリアスペース・最小サイズ・禁止事項。SVG アセットを含む。 |

## Scripts

| Command             | Description           |
| :------------------ | :-------------------- |
| `npm run dev`       | 開発サーバー起動      |
| `npm run build`     | 本番ビルド            |
| `npm run preview`   | ビルドのプレビュー    |
