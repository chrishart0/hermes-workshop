---
name: competitor-market-watch
description: Generate the user's recurring competitor and market-watch brief from public sources. Track named competitors and market signals - pricing, launches, changelogs, positioning, hiring, reviews, news - detect what changed since the last run, filter against what could move the user's roadmap, pricing, sales talk track, or week plan, and deliver a short brief tagged watch / ignore / act. Read-only, every claim source-cited. Improves from feedback.
version: 0.1.0
metadata:
  hermes:
    tags: [competitive-intel, market, briefing]
    category: reports
---

# Competitor & Market Watch

> **TEMPLATE - NOT YET BOOTSTRAPPED.**
> This skill ships as a workshop template. While this banner exists, do not generate a
> brief. Run the **Bootstrap** section below instead: interview the user, then edit this
> file so the skill belongs to them. Bootstrap is finished when this banner and the
> Bootstrap section have been deleted.

Watch a handful of competitors and market signals so the user doesn't have to open five
tabs every Monday:

1. Read the same public sources every run - sites, pricing, changelogs, blogs, reviews, news.
2. Compare against last run (see **Memory**) to find what actually **changed**.
3. Keep only changes that could move the user's roadmap, pricing, sales talk track, or plan.
4. Deliver a short brief - each item tagged **watch / ignore / act**, with a source link.

The value is not "here's what competitors are doing." It's "here's what *changed* that
matters to *you*, and whether to act on it."

## Bootstrap (agent: run once, then delete this section)

Interview the user - one question at a time, rough answers welcome. Don't over-collect;
the feedback loop sharpens everything later. Four questions.

1. **Who are you up against?** 2-5 competitors or alternatives, plus one line on what the
   user sells and to whom. That last part is what makes the brief relevant. Or, just give me your website and I will come back with a list of your competitor for you to approve.
2. **Which public sources per competitor?** Pricing/product pages, changelog or release notes, blog, app-store or review pages, job posts, news. One to three each to start - URLs are best. If they don't know, suggest starters and let them pick.
3. **What counts as a change worth surfacing, and what's noise?** e.g. surface pricing, packaging, launches, positioning shifts, hiring for a capability; ignore press fluff, recycled announcements, funding gossip, rumor with no source.
4. **What would make you act, and how often should this run?** The decision filter (roadmap, pricing, sales talk track, week plan) and the cadence (weekly is usually plenty).

Then edit this skill file (`skill_manage` edit, or edit the file directly):

- Replace **Who I watch** with the user's real competitors, sources, and their one-line
  "what I sell / to whom". Record a concrete URL for every source so each run fetches
  directly instead of searching.
- Fold the user's answers into **What counts as a change** (and its Drop list) and
  **Decision filter**.
- Rewrite the frontmatter `description` so it names the user's actual watch.
- Leave the workflow, memory, brief format, output, and feedback sections alone unless the
  user asked for something specific.
- Delete this Bootstrap section and the template banner at the top.

Finish with two steps:

1. Offer one short message the user can send right now to generate their first brief.
   Remind them the first run is a **baseline** - nothing to compare against yet, so it maps
   the current state; change-detection kicks in on run two.
2. Check whether a Hermes gateway is configured (Telegram, Discord, email). If one is, set
   up a Hermes cron on the cadence the user chose, delivering the brief through that
   gateway. If not, tell the user they can connect a gateway later and schedule it then.

## Who I watch

<!-- EXAMPLE: replace all of this at bootstrap. URLs are example.com placeholders. -->

**What I sell / to whom:** a self-hosted team wiki, sold to engineering teams at 20-200
person startups who want to own their docs instead of renting a SaaS.

1. **Northwind Docs** - hosted wiki, our closest head-to-head.
   - Pricing: `https://northwind.example.com/pricing`
   - Changelog: `https://northwind.example.com/changelog`
   - Blog: `https://northwind.example.com/blog`
2. **Contoso Notes** - bigger, moving down-market toward our buyer.
   - Pricing: `https://contoso.example.com/pricing`
   - Release notes: `https://contoso.example.com/releases`
3. **The category in general** - "self-hosted wiki" / "Notion alternative" launches and
   comparisons in news, Hacker News, and relevant subreddits.

## What counts as a change

Surface an item only if it is a *change since last run* and it could touch the user's world:

- pricing or packaging moves (new tier, price change, feature moved between tiers);
- launches, major features, or deprecations in a competitor's changelog;
- positioning or messaging shifts (homepage, category they claim, who they target);
- hiring signals for a capability the user competes on;
- review-volume or sentiment shifts on app-store / review pages;
- market news - funding that changes a rival's trajectory, entrants, acquisitions.

**Drop:**

- press fluff, recycled or re-announced news, rumor with no source;
- generic AI hype and vendor marketing;
- anything unchanged since the last brief (see **Memory**) - don't re-report the baseline;
- items that touch none of the user's decision filters below.

## Decision filter

Only surface a change if it could plausibly move one of these:

- **Roadmap** - a feature we'd now consider building, dropping, or reprioritizing.
- **Pricing / packaging** - pressure to change our tiers or price.
- **Sales talk track** - something a prospect will bring up, that we need an answer for.
- **This week's plan** - anything urgent enough to act on now.

If a change is real but touches none of these, tag it **watch** and keep it to one line -
or drop it.

## Run workflow

1. Get today's date with a tool.
2. Read **Memory** (`state.md` next to this skill) - what each source looked like last run.
   On the very first run there is no file yet; that's fine, this run is the baseline.
3. Fetch the sources in **Who I watch**. Public pages only - no logins, no scraping behind
   auth. Prefer official/direct pages (pricing, changelog, blog) over broad search; search
   only to fill gaps or for the "category in general" signal.
4. For each source, diff against Memory: is this **new**, a **change** to something known,
   or **unchanged**? Unchanged items are dropped from the brief (they stay in Memory).
5. Keep changes that survive **What counts as a change** and the **Decision filter**. Tag
   each **watch / ignore / act**.
6. Write the brief in the format below. Every factual claim carries a source link. If a
   competitor was quiet, say so in one line - never pad.
7. Deliver per **Output**.
8. Update Memory: record the current state of every source you checked so next run can diff
   against it.

## Memory (state across runs)

Change-detection needs a record of what things looked like before. Keep one plain-Markdown
file, `state.md`, next to this skill:

- One section per competitor / source.
- Under each, the facts you'll want to diff next week: current pricing/tier structure, the
  newest changelog entry (date + title), current homepage tagline, latest review count -
  whatever the user cares about.
- A `last checked: YYYY-MM-DD` line per section.

Each run: read `state.md` first, diff against it to find changes, then overwrite each
section with the current state at the end of the run. Keep it terse - it's a snapshot for
diffing, not a log. If it doesn't exist yet (e.g. a curl install of only `SKILL.md`), create
it on the first run.

## Brief format

Example *shape* - your real competitors and changes replace the placeholders:

```markdown
# Competitor & Market Watch - YYYY-MM-DD

## What changed
1. **[act] Competitor A added a $99 team tier** - undercuts our Team plan; sales will hear
   about it. · [pricing](link) · *Suggested: draft a talking point for the Team comparison.*
2. **[watch] Competitor B shipped SSO** - not our buyer's blocker yet, but trending that way.
   · [release](link)

## Quiet
- One line per source that had no material change since last run.

## Tune-up
- One suggestion: a source, competitor, or filter to add or drop.
```

Aim for 3-7 items, each a real change - short enough to read with coffee. The first
(baseline) run maps the whole landscape, so it runs a little longer; after that, unchanged
sources drop to **Quiet** and most weeks are short. Honest when it was a quiet week - a
one-line "nothing material moved" is a valid brief.

## Output

- **Default: Markdown in chat.** No files. When a gateway is connected (Telegram, Discord,
  Slack, email), "chat" means that gateway. Only write files or send anything else if the
  user asked.

## Feedback loop

After each brief, ask:

- What was useful? What was noise? What was missing?
- Any competitor or source to add or drop?
- Did the watch / ignore / act tags match your judgment?

Then **edit this skill** with the answers: competitors and sources → *Who I watch*; what to
surface or ignore → *What counts as a change*; what makes you act → *Decision filter*;
format changes → *Brief format*. This is the whole self-improvement loop: feedback in, skill
edits out, next brief sharper.

## Safety

Read public sources only. No logins, no scraping behind authentication, no paid-data
access the user hasn't set up. Every claim needs a source link - if you can't cite it,
don't surface it. Never invent a competitor move; "no material change" is always a valid
finding.

## Later

If no gateway was connected at bootstrap, schedule the brief with Hermes cron once one is;
deliver it over Telegram / Discord / Slack / email; or split into per-competitor watches
feeding one combined brief.
