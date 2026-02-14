# dg4-system

**dgdgdgdg** ブランドのデザインシステム。カラー・タイポグラフィ・スペーシング・ロゴの仕様とアセットを定義し、Web・印刷を問わず一貫したビジュアル表現を可能にします。

---

## 概要

dg4-system は「dgdgdgdg」のアイデンティティを形づくるデザイントークンとガイドラインの集合です。各モジュールは独立したドキュメントと必要に応じてプレビュー用のファイルを持ち、プロダクト（サイト・アプリ・印刷物）で参照・適用できます。

---

## モジュール一覧

| モジュール     | 説明                                                                                                                                                 | ドキュメント                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Color**      | 16 進 `0`, `4`, `d` のみで構成する 729 色のブランドカラーパレット。最近傍法によるグラデーション表示とインタラクティブな色探索用の Web アプリを含む。 | [color/docs/README.md](color/docs/README.md) · [USAGE](color/docs/USAGE.md) |
| **Typography** | フォントファミリ（DG4 Atomic Dot, Zen Kaku Gothic New, Zen Old Mincho）、タイプスケール（Display / H1–H3 / Body / Caption）、字重・行間の定義。      | [typography/docs/README.md](typography/docs/README.md)                      |
| **Spacing**    | 基準 0.25rem のスペーシングスケール（0, 1, 2, … 16）。コンポーネント間・セクション間の余白の統一に使用。                                             | [spacing/docs/README.md](spacing/docs/README.md)                            |
| **Logo**       | ロゴバリアント（row / square）、クリアスペース・最小サイズ・禁止事項。SVG アセット（row.svg, square.svg）を含む。                                    | [logo/docs/README.md](logo/docs/README.md)                                  |

---

## リポジトリ構成

```
dg4-system/
├── README.md                 # 本ファイル（総合 README）
├── color/
│   ├── docs/
│   │   ├── README.md         # カラー仕様・概要
│   │   └── USAGE.md          # カラーアプリの使い方
│   ├── styles/
│   │   ├── reset.css
│   │   └── style.css
│   ├── index.html            # 729 色パレットのプレビュー用 Web アプリ
│   └── script.js             # 色生成・ソート・描画
├── typography/
│   └── docs/
│       └── README.md         # タイポグラフィ仕様
├── spacing/
│   └── docs/
│       └── README.md         # スペーシング仕様
└── logo/
    ├── docs/
    │   └── README.md         # ロゴガイドライン
    └── assets/
        ├── row.svg           # 横長ロゴ
        └── square.svg        # 正方形ロゴ
```

---

## 使い方

- **カラー**: `color/index.html` をブラウザで開くと 729 色パレットが表示されます。クリックでシアン系のみのフィルタ（詳細は [color/docs/USAGE.md](color/docs/USAGE.md)）。

---

## 動作・参照環境

- **カラー Web アプリ**: モダンブラウザ（Chrome, Firefox, Safari, Edge 等）、JavaScript 有効。
- **その他**: ドキュメントとアセット（SVG）の参照のみで、特別な実行環境は不要です。
