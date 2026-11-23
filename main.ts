// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The program ships one file, meme.png, and places a byte-identical copy
// of it at /output/entry.png. Run it twice and both runs print the same
// sha256. The picture is a GTA "WASTED" parody: a Vice City sunset street
// where the make.fun ghost pile has already beaten GTA 6 and taken the
// trophy, while the player is still downloading 214 GB.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function die(message) {
  console.error(message);
  process.exit(1);
}

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

// Check the file is a whole PNG of at most 1024 by 1024 pixels before
// copying it, and fail loudly instead of submitting an invalid image.
// Layout of a PNG header: 8 signature bytes, then the IHDR chunk (4
// length bytes, the letters IHDR, 4 width bytes and 4 height bytes, all
// big-endian). A whole file ends with the IEND chunk: a zero length, the
// letters IEND, and its CRC. (No byte-size cap: this bounty sets none,
// and the meme is a photographic background at 1,319,369 bytes.)
function checkPng(bytes) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (bytes.length < 45) return "file too small to be a PNG";
  if (!bytes.subarray(0, 8).equals(signature)) return "bad PNG signature";
  if (!bytes.subarray(12, 16).equals(Buffer.from("IHDR"))) return "first chunk is not IHDR";
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > 1024 || height > 1024) return `too large: ${width}x${height}`;
  if (bytes.readUInt32BE(bytes.length - 12) !== 0) return "no IEND chunk at the end";
  if (!bytes.subarray(bytes.length - 8, bytes.length - 4).equals(Buffer.from("IEND"))) {
    return "no IEND chunk at the end";
  }
  return null;
}

const entryDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(entryDir, "meme.png");
if (!existsSync(sourcePath)) die("meme.png missing beside main.ts");

const problem = checkPng(readFileSync(sourcePath));
if (problem !== null) die(`meme.png rejected: ${problem}`);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const targetPath = join(outputDir, "entry.png");
cpSync(sourcePath, targetPath);

const before = sha256File(sourcePath);
const after = sha256File(targetPath);
if (before !== after) die("meme.png copy failed integrity check");
// The hash already proves the bytes match, but a structural check on the
// copy names the failure instead of just failing: a truncated copy is
// "no IEND chunk at the end", not a bare hash mismatch. The size check is
// a second, independent witness that the whole file arrived.
const copiedProblem = checkPng(readFileSync(targetPath));
if (copiedProblem !== null) die(`copied entry.png rejected: ${copiedProblem}`);
const { size } = statSync(targetPath);
if (size !== statSync(sourcePath).size) die("meme.png copy failed size check");
console.log(`wrote ${targetPath} sha256:${after} bytes:${size}`);
