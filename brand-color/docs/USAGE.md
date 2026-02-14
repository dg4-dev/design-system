# dgdgdgdg Brand Color

**dgdgdgdg** のブランドカラーパレット

![dgdgdgdg Brand Color](./dgdgdgdg-brand-color.png)

## プロジェクト概要

「dgdgdgdg」のアイデンティティを形成する 729 色のブランドカラーパレットを表示するインタラクティブ Web アプリケーション。16 進数表記の `0`, `4`, `d` のみを組み合わせた色彩体系を視覚化し、色の探索を可能にします。

## 実装

### ファイル構成

```
all-colors/
├── docs/
│   └── dgdgdgdg-brand-color.png # ブランドカラーパレットの画像
│   └── README.md 　　　　　　　　# プロジェクト概要
│   └── USAGE.md 　　　　　　　　# 使用方法
├── styles/
│   ├── reset.css       # CSSリセット
│   └── style.css       # スタイル定義
├── index.html          # メインHTMLファイル
└── script.js           # 色生成・ソート・描画ロジック
```

### 技術仕様

- **色生成**: 3 文字 `0`, `4`, `d` の全組み合わせを計算し配列化
- **色ソート**: 最近傍法による視覚的連続性の実現
- **表示**: CSS Grid による 729 色のタイル表示
- **インタラクション**: クリックイベントによるシアン系色のフィルタリング機能

## 使用方法

1. `index.html` をブラウザで開く
2. 729 色のブランドカラーパレットが表示される
3. 画面をクリックするとシアン系の色のみを抽出・表示（再クリックで全色表示に戻る）

## 動作要件

- モダンブラウザ（Chrome, Firefox, Safari, Edge 等）
- JavaScript 有効化が必要
