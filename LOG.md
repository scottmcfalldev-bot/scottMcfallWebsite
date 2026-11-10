# LOG

## 2026-11-10 · New Calendly link
- **Done:** booking calendar and the calculator's booking popup now use `calendly.com/scott-scottmcfall/30min` (was `scottmcfall/30min`). Checked both open the new event; no Calendly settings changed.
- **Next (Scott):** in Calendly, rename "30 Minute Meeting" to "Free call" and add a first custom question so calculator results show on bookings.
- **Waiting on:** Scott: OK to push to PR #1.

## 2026-11-10 · Shorter, punchier copy + photo in hero
- **Done:** new headline "Stop doing the same work twice." with Scott's photo to the right (`public/scott.jpg`); one-line subhead; every section heading and line cut down (offer, calculator, 14 work rows, booking, FAQ). Modelled on fearlessorganizationscan.com's short hero. Pushed to PR #1; preview link updated. Build passes; checked desktop and 375px.
- **Done (later):** removed AI mentions (FAQ, schema). Calculator moved down to just above booking. Booking now leads with the Calendly calendar; the form is a small "Not ready to book? Send a note." box beside it.
- **Next (Scott):** rename the Calendly event from "30 Minute Meeting" to "Free call" so it matches the page.
- **Waiting on:** Lauren: review PR #1 / preview. Scott: OK to push the new commits to PR #1; a higher-res photo (current one is 388x500, a little soft on retina screens).

## 2026-11-09 · Minimal layout with motion and demo video
- **Done:** Scott found the split-stage redesign had too much wasted space. Built a minimal, compact version on branch `minimal-motion` (not committed): about 3.4 screens tall on desktop instead of 11.9. Hero has a 10-second demo video (`public/demo.mp4`, 165 KB, rendered from code by `scripts/demo-video/render.mjs`) of one update landing in five tools; below it a live canvas band where five strands merge into one. Offer and work are tight ledgers, FAQ is an accordion, calculator numbers glide. Copy, prices, calculator → Calendly handoff and form kept. `npm run build` passes; checked desktop and phone.
- **Done (hero v2):** demo video redrawn wider (1920x768, 364 KB) with a color per tool and the text each tool receives; it now sits full width directly under the headline. The strand band uses the same five colors merging into one green line.
- **Done (phone cut):** screens up to 640px wide now get a taller version of the video (`public/demo-m.mp4`, 1080x1620, 451 KB) with larger type: the update card on top, the five tools stacked below. `render.mjs` renders both cuts from the one `scene.html`. Build passes; checked at 375px (plays, no sideways scroll) and desktop still gets the wide cut.
- **Done (work section):** "Things I've built" grew from 5 to 14 entries pulled from `~/Coding` (monthly stats dashboard, competitor tracker, news digest, clip finder, archive chat, bulk title review, outreach list builder, lunch-menu email, Mouth Drummer). Filter chips keep it compact (Highlights shows 6). A calculator task that matches a past build now links to it.
- **Waiting on:** Scott: confirm he's fine describing the Greatness Media internal tools publicly (no numbers or client data are shown). Left out on purpose: the catalog audit (still being built, and it's McFall's sales opener), the YouTube trainer, family tree, Scottify.
- **Done (10 Nov):** committed (5509b46), pushed `minimal-motion`, opened [PR #1](https://github.com/scottmcfalldev-bot/scottMcfallWebsite/pull/1). Preview for Lauren: https://claude.ai/artifact/QEeYng4BsMaFFaci4Yv7Mk (Calendly embed doesn't load in the preview; it does on the real site).
- **Waiting on:** Lauren: review PR #1 / preview (since 10 Nov). Then Scott: OK to merge, which deploys live.
- **Next:** not tested on a real iPhone. The video is a coded animation, not filmed footage; filmed or AI-generated footage needs a kie.ai key.

## 2026-11-09 · Scroll-craft redesign of scottmcfall.com
- **Done:** Rebuilt the page as a "split stage" on branch `scroll-craft-redesign` (not committed): by-hand paper on the left, automated forest on the right, a fixed divider carrying the labels, booking button and a live hours readout. Peak: the visitor's own calculator tasks slide across the line and the hours count down. Close: paper side folds away into the priced offer. Copy, prices, calculator → Calendly handoff, form and FAQ kept. No imagery (no kie.ai key). Brief: `scrollcraft/builds/scottmcfall/BRIEF.md`. Scroll harness clean on desktop, phone and reduced motion; `npm run build` passes.
- **Closes:** the earlier "review copy, OK to commit" item: that version is live on main (3626e36).
- **Waiting on:** Scott: look at the redesign locally (`npm run build && npm run preview`), then decide whether to merge it into main.
- **Next:** if imagery is wanted later, set `KIE_AI_API_KEY` in the skill's `.env` and generate paper/desk plates for the hero. Not tested on a real iPhone yet.

## 2026-11-09 · First automation clients: plan + site rewrite
- **Done:** Plan approved (buyer: agencies & consulting firms, 5–30 people; free bottleneck call → $2,500 fixed build → $750/mo Keep It Running; 3 founding spots at $1,500 for a case study). Plan: `~/.claude/plans/background-from-the-session-wobbly-summit.md`. Site rewritten around it in `src/pages/index.astro` and `src/layouts/Layout.astro`: new hero, agency pain points, priced offer section, calculator → Calendly popup with results attached, Formation as lead case study (numbers marked estimated), new FAQ (cost, data safety, tools, what if it breaks). `npm run build` passes; checked desktop and phone. Not committed.
- **Waiting on:** Scott: review the copy, then OK to commit and push (since 9 Nov).
- **Next:** Week 1: build the 50-name list with Claude (voiceover clients, Greatness/JJ, Formation, Naomi, friends and family who know agency owners); send 25 messages, each run through humanizer. Ask Formation and JJ's team for named intros. Track messages/replies/calls/builds in an Asana section beside Goldmine.
- **Next (Scott):** add a first custom question to the Calendly 30-min event so calculator results show up on the booking; send any real numbers for JJ's calculator or School of Greatness; get a lawyer to review the client agreement before taking a 50% deposit.
- **Ideas:** weekly LinkedIn before/after post; referral partners (OBMs, fractional COOs, agency bookkeepers) at ~10% of the first build. Kill rule: 50 messages + 10 calls with zero builds → re-plan buyer or offer.
