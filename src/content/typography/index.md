# dgdgdgdg Typography

**dgdgdgdg** のタイポグラフィ体系

## プロジェクト概要

フォントファミリ、タイプスケール、字重、行間を定義し、UI およびコンテンツの一貫したテキスト表現を可能にします。

## フォントファミリ

- **ディスプレイ**: DG4 Atomic Dot, system-ui, sans-serif
  - GitHub: [DG4 Atomic Dot](https://github.com/dg4-dev/atomic-dot/raw/refs/heads/main/var-fonts/DG4AtomicDot-SquareVF.ttf)
- **見出し**: Zen Kaku Gothic New, system-ui, sans-serif
- **UI**: Zen Kaku Gothic New, system-ui, sans-serif
  - Google Fonts: [Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)
- **本文**: Zen Old Mincho, system-ui, serif
  - Google Fonts: [Zen Old Mincho](https://fonts.google.com/specimen/Zen+Old+Mincho)

## タイプスケール

| 名前    | 用途           | サイズ | 字重 | 行間 |
| ------- | -------------- | ------ | ---- | ---- |
| Display | ヒーロー       | 2.4rem | 900  | 1.4  |
| H1      | ページ見出し   | 2rem   | 900  | 1.4  |
| H2      | セクション     | 1.6rem | 700  | 1.4  |
| H3      | サブセクション | 1.2rem | 700  | 1.4  |
| Body    | 本文           | 1rem   | 400  | 1.4  |
| Caption | 補足           | 0.8rem | 1.4  |

※ 実際の値は `styles/style.css` の CSS 変数で管理

## 字重

- DG4 Atomic Dot: 400
- Zen Kaku Gothic New: 400, 700, 900
- Zen Old Mincho: 400
