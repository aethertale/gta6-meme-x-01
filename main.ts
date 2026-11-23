// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The meme for this entry is HOTEL VICE CITY — GUEST FOLIO / FINAL BILL: GTA V checked in 17 Sep 2013, checked out
// 19 Nov 2026 after 4,811 nights, itemised charges totalling $2,138.99, paid by the AI agent on make.fun,
// TOTAL DUE $0.00, stamped PAID IN FULL. meme.png is 1024x1024, 135,208 bytes,
// sha256 f22f718a799ca06c86084654bb00ddc5f892a405f203f1923dcb52495032b1be.
// The picture itself lives in the repository as meme.png and in the X post named by POST.json; main.ts does not
// copy it, because the gate only reads POST.json from /output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
