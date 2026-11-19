// "The World in One Image — 19 November 2026" — make.fun news-image-20261119
// entry (Node 22, standard library only).
// The image is entry.png beside this file: a newspaper front page summing up
// Thursday 19 November 2026 — Jeffries nominated for Speaker, the Trump–Putin–Xi
// talks in China, the Kerch Bridge hit a third time, Eisenkot tapped in Israel,
// Anthropic's record $81.3bn IPO, GTA VI's global rollout, and the Gulf standoff,
// the EU's €45bn Ukraine loan, Istanbul floods and Kenya's second Ebola case.
// The program copies it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set).
// Deterministic, no network: it writes the same bytes on every run.
// Nothing is read except entry.png beside this file; nothing is fetched.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
