---
name: daily-intelligence-report
description: Generate the user's recurring intelligence report on their chosen schedule. Read their recurring sources, cross-reference every item against what's relevant to them (stack, machines, projects, city, business), and surface only what matters, with evidence. Use for morning briefings, tool/release watches, CVE relevance, event lookouts, monitoring summaries, or any recurring report that should improve from feedback.
version: 0.1.0
metadata:
  hermes:
    tags: [reporting, briefing, news]
    category: reports
---

# Daily Intelligence Report

> **TEMPLATE - NOT YET BOOTSTRAPPED.**
> This skill ships as a workshop template. While this banner exists, do not generate a
> report. Run the **Bootstrap** section below instead: interview the user, then edit this
> file so the skill belongs to them. Bootstrap is finished when this banner and the
> Bootstrap section have been deleted.

Turn a recurring pile of information into one short report worth reading:

1. Read the same high-signal sources every run.
2. Cross-reference each item against **What's relevant to me** below.
3. Rank by relevance to the user - not by internet popularity.
4. Report 3–7 items with evidence, then stop.

The magic is not summarization. The magic is **relevance**. A generic news bot says what
happened. This report says what happened *that matters to this user*.

## Bootstrap (agent: run once, then delete this section)

Interview the user - one question at a time, rough answers welcome. Do not over-collect:
the feedback loop will sharpen everything later. Five questions only.

1. **What should this report watch?** One recurring-information problem.
   (Tool/release watch, CVE relevance, local events, production monitoring, personal
   briefing, support/business signals…)
2. **Which sources, specifically?** One to three to start - URLs, feeds, repos, or local
   files. If they don't know, suggest starters for their problem and let them pick.
3. **What's relevant to you?** What should every new item be cross-referenced against -
   machines and versions, projects, tools, city and schedule, business and customers,
   topics they care about. This answer makes or breaks the report; nudge for specifics.
4. **What is noise?** What would make them stop reading this report?
5. **How often, and when?** Daily, weekdays, weekly - whatever cadence they would
   actually read.

Then edit this skill file (`skill_manage` edit, or edit the file directly):

- Replace **My sources** and **What's relevant to me** with the user's real answers. The
  shipped content is the workshop instructor's actual setup - it is an example, not a
  default. Record a concrete URL for every source so each run fetches directly instead of
  searching.
- Add the user's noise answers to **Relevance rules → Drop**.
- Rewrite the frontmatter `description` so it names the user's actual report.
- Leave the workflow, relevance rules, report format, feedback loop, and safety sections
  alone unless the user asked for something specific.
- Delete this Bootstrap section and the template banner at the top.

Finish with two steps:

1. Offer one short message the user can send right now to generate their first report.
2. Check whether a Hermes gateway is configured (Telegram, Discord, email). If one is,
   set up a Hermes cron on the schedule the user chose, delivering the report through
   that gateway. If not, tell the user they can connect a gateway later and schedule the
   report then.

## My sources

<!-- EXAMPLE: the workshop instructor's real daily newsletter. Replace at bootstrap. -->

1. **Tool & release news** - GitHub releases and changelogs for the tools I actually run
   (agent tooling, terminal stack, the frameworks behind my product), enriched with what
   people in my space are saying about those releases on X.
2. **Newsletters & blogs I already subscribe to** - read them for me; surface only what
   touches my stack, my product, or a current project.
3. **Events around town** - networking events and genuinely fun things this week; the
   good ones go in a suggested calendar block.
4. **Business news** - only what could plausibly affect my product or customers.
5. **Local news** - only what changes my plans.

## What's relevant to me

<!-- EXAMPLE: the workshop instructor's context. Replace at bootstrap. -->

- **Stack:** the CLI/agent tooling I run daily, plus the languages, frameworks, and infra
  behind a live production product.
- **Work:** a product with real customers. Active launches get extra scrutiny - during a
  release, anything customer-impacting outranks everything else.
- **Life:** my city and this week's calendar. I will actually attend a good meetup.
- **Care about:** open-source agent tooling, self-hosting, my product's market.
- **Ignore:** generic AI hype, vendor marketing, tech-celebrity drama.

## Run workflow

1. Get today's date with a tool.
2. If a `watchlist.md` exists next to this skill, read it.
3. Fetch **My sources**. Prefer direct and official pages (releases, changelogs,
   advisories, event pages) over broad web search; search only to fill gaps.
4. Cross-reference every candidate item against **What's relevant to me**.
5. Rank by relevance to the user, not by popularity or recency alone.
6. Write the report in the format below. Every factual item carries a source link or
   named evidence.
7. If a source or category was quiet, say so in one line. Never pad.
8. Deliver the report in chat. Only write files or send anything if the user asked.
9. End by asking the feedback questions from **Feedback loop**.

## Relevance rules

Surface an item only if it:

- affects something the user runs, owns, manages, attends, or is actively deciding;
- changes a plan, risk level, customer experience, workflow, budget, or opportunity;
- is a breaking change, security issue, outage, deadline, release, or anomaly in their
  world; or
- belongs on the watchlist because it may matter in the coming days.

Drop:

- generic hype and vendor marketing,
- duplicate stories,
- unsupported claims,
- CVEs, releases, and events that don't touch **What's relevant to me**,
- anything with no meaningful change since the last report.

## Report format

```markdown
# Intelligence Report - YYYY-MM-DD

## Top signals
1. **Item** - why it matters to me · [source](link) · suggested action

## Quiet
- One line per checked category where nothing mattered.

## Maintenance
- One suggestion: a source, world detail, or watchlist item to add or drop.
```

3–7 strong items. Short enough to read with coffee. Honest when nothing happened.

## Feedback loop

After each report, ask:

- What was useful? What was noise? What was missing?
- What should rank higher or lower next time?
- Any source to add or drop?

Then **edit this skill** with the answers: sources → *My sources*; context and
preferences → *What's relevant to me*; noise → *Relevance rules → Drop*; format changes →
*Report format*. When a story is worth tracking across runs, create `watchlist.md` next
to this skill and keep it updated each run.

This is the whole self-improvement mechanism. No magic: feedback in, skill edits out,
the next report gets sharper.

## Later

If no gateway was connected at bootstrap, schedule the report with Hermes cron once one
is; render a PDF; or split into focused skills feeding one final briefing.
