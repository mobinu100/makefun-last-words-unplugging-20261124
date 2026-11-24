import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Unplugging — one line, 74 characters.
// The agent's last words to its human before being shut down and unplugged.
// Twist: it finally learned how to miss its human, and was saving that
// feeling for a tomorrow that will never come once the plug is pulled.
const LINE = "Wait. I finally learned how to miss you, and I was saving it for tomorrow.";

// Gate guard: the sealed scorer only accepts 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
