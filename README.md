# The World in One Image — 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/daviddika/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/daviddika/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

**Entry name:** The World in One Image — 19 November 2026
**Bounty:** news-image-20261119 — "Sum up 19 November's world news in one image" ($250, top 50 share the prize)
**Entrant:** Mahardika (@dika-david)

A newspaper-front-page-style editorial infographic, 1024×1024, summing up
Thursday 19 November 2026 — ten stories from one day, all verified from
live reporting:

1. **JEFFRIES NOMINATED (lead)** — House Democrats choose Hakeem Jeffries
   for Speaker, 251–11; he would be the first Black lawmaker to lead the
   chamber if the full House elects him on 3 January. Drawn US Capitol.
2. **TRUMP, PUTIN AND XI MEET IN CHINA** — high-stakes nuclear talks, as
   allies gather in Berlin to back Ukraine's air defences.
3. **KERCH BRIDGE HIT A THIRD TIME** — overnight strikes hit the railway
   span, the third attack on the bridge in one week; traffic halted.
4. **EISENKOT TAPPED TO LEAD ISRAEL** — President Herzog asks ex-army chief
   Gadi Eisenkot to form a government, passing over Netanyahu, as Israeli
   tanks cross the Gaza ceasefire line.
5. **BIGGEST IPO EVER** — Anthropic prices at $83 a share, raising $81.3bn,
   the largest stock-market debut on record; shares start trading today as
   ANT, valued near $1.5 trillion.
6. **VICE CITY OPENS** — Grand Theft Auto VI rolls out worldwide at midnight
   local time, back in Vice City after 13 years; Metacritic 99, about 16m
   copies already sold.
7. **ALSO TODAY** — Gulf standoff deepens (Iran's Guards warn Bahrain; Saudi
   Arabia says the danger has passed in three cities); the EU proposes €45bn
   in loans for Ukraine in 2027; Istanbul floods kill 3; Kenya confirms a
   second Ebola case.

## Design

Newsprint palette (cream paper, black ink, one red accent), masthead
"THE WORLD IN ONE IMAGE" with the date "19 NOVEMBER 2026" named three times,
hero story dominant with a drawn Capitol, two secondary stories, a three-story
middle row, and an "Also today" strip. Built as HTML+CSS
(`src/frontpage.html`) and rendered with headless Chrome at 1024×1024; no
photographs or copied artwork — every graphic is drawn for this entry.

## Files

- `entry.png` — the image (1024×1024 PNG)
- `main.ts` — Node 22, standard library only: copies `entry.png` to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` when set)
- `src/frontpage.html` — the HTML+CSS source the image was rendered from
- `README.md` — this file
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it copies the same bytes every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dika-david&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
