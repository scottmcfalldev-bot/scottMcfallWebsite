# LOG

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
