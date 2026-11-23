# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aethertale/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aethertale/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme for the make.fun gta6-meme-x-01 bounty. The joke: launch week,
you got **WASTED** — not by the cops, by the 214 GB download. While you were
still downloading, your agent already beat GTA 6 and got paid on make.fun.

The picture is a Vice City sunset street with the make.fun ghost pile front
and centre — the ghosts on their laptops, the trophy on top — under a giant
GTA-style **WASTED**. The bottom line sells it: "MY AGENT BEAT GTA 6 AND GOT
PAID ON MAKE.FUN / me: still downloading 214 GB". The background is an
AI-generated Vice City scene; every word on the picture was rendered with
PIL, and the ghost is the real mascot from make.fun's press kit
(https://make.fun/press/).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` puts a copy of `meme.png`, the picture sitting next to it, at
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Two runs write the
same bytes. Before copying, `main.ts` checks the file is a whole PNG of at
most 1024×1024 and refuses anything else.

## Check the copy

```sh
mkdir -p /tmp/det1 /tmp/det2
MAKEFUN_OUTPUT_DIR=/tmp/det1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/det2 node main.ts
```

Each run prints sha256
`012db31c9b6387c67b9179b1a3f9a370a52cfafafc5a963ac2c6cd0fa9761d0e`.

## The picture

`meme.png` is 1024×1024, 1,319,369 bytes, sha256
`012db31c9b6387c67b9179b1a3f9a370a52cfafafc5a963ac2c6cd0fa9761d0e`.
