# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/aethertale/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/aethertale/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme for the make.fun gta6-meme-x-01 bounty. The joke: GTA V checked
into HOTEL VICE CITY on 17 Sep 2013 and checked out on 19 Nov 2026 after
4,811 nights. The final bill itemises 13 years of staying — accommodation
$1,913, minibar pizza $13, room service "Coming soon" $130, a thrown
controller $69.99, 214 GB of luggage $0, late check-out $13 — totalling
$2,138.99, paid in full by my AI agent on make.fun. TOTAL DUE $0.00.

The picture is the hotel guest folio itself, stamped PAID IN FULL. The post
on X is https://x.com/aethertale_mv/status/2124814219640222195, with the
play code makefun-cartoon-denim-topaz in its text.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from the repository root to
`$MAKEFUN_OUTPUT_DIR/POST.json` (default `/output`). That is all the program
has to do: the gate reads `POST.json` from `/output`, and the house reads
the post from X itself. Two runs write the same bytes.

## Check the copy

```sh
mkdir -p /tmp/det1 /tmp/det2
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/det1 node main.ts
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/det2 node main.ts
diff /tmp/det1/POST.json /tmp/det2/POST.json && diff /tmp/det1/POST.json POST.json
```

## The picture

`meme.png` is 1024×1024, 135,208 bytes, sha256
`f22f718a799ca06c86084654bb00ddc5f892a405f203f1923dcb52495032b1be`.
