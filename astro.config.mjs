import { defineConfig } from "astro/config";
import { visit } from "unist-util-visit";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** Remark plugin: rewrite relative image/link paths in markdown to absolute /public paths */
function remarkRewritePaths() {
  return (tree, file) => {
    const markdownDir = path.dirname(file.history[0]);

    visit(tree, "image", (node) => {
      if (node.url && !node.url.startsWith("/") && !node.url.startsWith("http")) {
        const abs = path.resolve(markdownDir, node.url);
        node.url = "/" + path.relative(projectRoot, abs);
      }
    });
  };
}

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkRewritePaths],
  },
});
