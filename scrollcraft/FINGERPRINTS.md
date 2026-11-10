# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| scottmcfall.com (9 Nov 2026) | Split stage | Fixed vertical divider is the only chrome: both side labels, the booking button, and a live "hrs/week by hand" readout | 50/50 split title page, both headline halves readable at once, layered paper slips and ruled/schedule planes at different rates, no imagery | pin > flow > pin (peak, 3.2) > flow x5 (proof rows) > pin > flow; 6 beats, 11.9vh desktop | Collapse: paper side folds to zero, divider sweeps to the left edge and goes, offer ledger + CTA settle in the winning column; booking and FAQ continue on that ground | The visitor's own calculator tasks slide across the divider one by one and become automation lines while the readout counts their hours down | Type and real UI only, paper vs deep forest, amber accent | Astro 5 page, engine in public/scrollcraft |


---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- Split stage with a fixed divider as the only chrome.
- Calculator input reused as the material of the peak ("your own list crosses the line").
- Close by folding one ground away (scaleX/scaleY collapse).
- 11.9vh across 6 beats.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
