// one-line-laugh — entry for make.fun competition
// u-ronigrv-the-one-line-laugh-7ccca46f
//
// Writes one text to /output/entry.txt: a single funny sentence about a
// smartwatch celebrating steps earned by pacing while code refuses to
// compile. The setup promises a fitness win; the punchline is that the
// steps came from debugging, not exercise.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My smartwatch congratulated me on 10,000 steps today — I was just pacing while my code refused to compile.";

const outPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

// The gate requires 1–200 Unicode code points, not only white space.
// Count code points (spread), not UTF-16 units, so the em dash and any
// astral characters are measured the way the judge measures them.
function validateEntry(text) {
  const length = [...text].length;
  if (length < 1 || length > 200 || text.trim().length === 0) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
}

function main() {
  validateEntry(ENTRY);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
}

main();
