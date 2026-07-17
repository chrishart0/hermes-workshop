---
name: daily-intelligence-report
description: Generate the user's recurring intelligence report on their chosen schedule. Read their recurring sources, cross-reference every item against what's relevant to them (stack, machines, projects, city, business), and surface only what matters, with evidence. Use for morning briefings, tool/release watches, CVE relevance, event lookouts, monitoring summaries, or any recurring report that should improve from feedback. Delivers as Markdown by default, with an optional premium PDF. Remembers past events and open threads in a local wiki so nothing gets missed between runs.
version: 0.3.0
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
- Leave the workflow, relevance rules, ranking & selection, the wiki, report format,
  output, feedback loop, PDF, and safety sections alone unless the user asked for
  something specific.
- Delete this Bootstrap section and the template banner at the top.

Finish with two steps:

1. Offer one short message the user can send right now to generate their first report.
2. Check whether a Hermes gateway is configured (Telegram, Discord, email). If one is,
   set up a Hermes cron on the schedule the user chose, delivering the report through
   that gateway. If not, tell the user they can connect a gateway later and schedule the
   report then.

Do not set up PDF output during bootstrap - keep the first run simple. Just mention that
once they like the report, the optional **Configure your PDF** step turns it into a
polished, branded PDF.

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
2. Read the wiki: open `wiki/index.md` and the pages it flags open or upcoming (see
   **The wiki**) - your memory of what's already in flight.
3. Fetch **My sources**. Prefer direct and official pages (releases, changelogs,
   advisories, event pages) over broad web search; search only to fill gaps.
4. Cross-reference every candidate item against **What's relevant to me** and the wiki:
   is this new, a development on an open thread, or a still-live carry-forward?
5. Rank and select per **Ranking & selection**.
6. Write the report in the format below. Every factual item carries a source link or
   named evidence.
7. If a source or category was quiet, say so in one line. Never pad.
8. Deliver the report per **Output** - Markdown in chat by default, or over the connected
   gateway when there is one. If **PDF output** is enabled, also render the report to PDF
   with `report-template.html` following **Render as PDF**, and send it as a file /
   attachment over the gateway (alongside or instead of the Markdown, per the reader's
   choice). Only write files or send anything else if the user asked.
9. Update the wiki: log developments on the pages you touched, add pages for new threads
   or events worth remembering, retire resolved ones, and refresh `wiki/index.md`.
10. End by asking the feedback questions from **Feedback loop**.

## Relevance rules

Surface an item only if it:

- affects something the user runs, owns, manages, attends, or is actively deciding;
- changes a plan, risk level, customer experience, workflow, budget, or opportunity;
- is a breaking change, security issue, outage, deadline, release, or anomaly in their
  world; or
- has a live wiki page (an open thread or upcoming event) that it may matter for in the
  coming days.

Drop:

- generic hype and vendor marketing,
- duplicate stories,
- unsupported claims,
- CVEs, releases, and events that don't touch **What's relevant to me**,
- anything with no meaningful change since the last report - *unless* it's a still-live
  carry-forward the reader needs (an upcoming event, an open thread), which may repeat,
  kept short (see **The wiki**).

## Ranking & selection

Two steps, kept separate on purpose.

**Rank** every surfaced item on three factors, in this order:

- **Relevance** - how directly it touches **What's relevant to me**. This dominates: a
  highly relevant item outranks a fresher or newer but marginal one.
- **Recency** - how time-sensitive it is right now.
- **Novelty** - new information vs. what the wiki already knows. A carry-forward (an open
  thread or upcoming event with nothing new) scores low on novelty but can still be
  surfaced - see the repeat rule in **The wiki**.

Feedback re-weights these in plain language ("rank security above releases", "I care more
about what's new than what's merely urgent"). Record such changes here so the next run
obeys them.

**Select** the 3–7 slots from the ranked list with diversity caps, so no single source
takes over:

- at most ~2 items from any one source or category (don't let, say, GitHub releases fill
  every slot);
- prefer breadth across **My sources** over depth in one;
- a still-live carry-forward can hold a slot even when it isn't the day's highest-ranked
  new item.

## The wiki (memory across runs)

The report has a memory: a `wiki/` directory next to this skill. It is how the report
remembers past events, tracks threads across days, and - the point the reader cares about
most - keeps surfacing things they would otherwise miss on the days they don't read it.

**Structure** (plain linked Markdown, like a small personal wiki):

- `wiki/index.md` - the dashboard the run reads first. Lists open threads, upcoming events
  (with dates), and watched entities, each linking to its page.
- `wiki/<slug>.md` - one page per thread, event, entity, or recurring topic. Frontmatter:
  `type` (event | thread | entity | topic), `status` (open | upcoming | resolved |
  dormant), any key dates (`event_date`, `surface_until`), and `last_seen`. Body: what it
  is, why it matters to *this reader*, a dated running log, and `[[links]]` to related
  pages.

**Each run:** read `index.md` and the open/upcoming pages before fetching sources (on the
very first run there may be no `wiki/` yet - that's fine, you'll create it below); use them
to judge novelty and to connect today's items to existing threads instead of treating each
in isolation; then, after writing the report, append a dated line to every page you
touched, create pages for new threads or events worth remembering, flip `status` to
resolved or dormant when a thread closes, and refresh `index.md`.

**The repeat rule (why events reappear):** the reader does not read every day, so a live
item keeps appearing until it is no longer useful - it is not dropped just because it ran
once. An item stays eligible to surface while its page is `open` or `upcoming` and today is
on or before its `surface_until` date. Repeats are marked as carry-forwards and kept terse
when nothing changed ("Still on - Thu 6pm, no change"), and expanded only when there is
real news. This is deliberate: a brief repeat beats a missed event.

This replaces the old single `watchlist.md` - a story worth tracking becomes a wiki page.
In the workshop repo the skill ships with an example `index.md` and one example page to
show the format; clear those on your first real run. If you installed only `SKILL.md`
(e.g. via curl), there is no `wiki/` yet - just create `wiki/index.md` the first time you
have something worth remembering.

## Report format

```markdown
# Intelligence Report - YYYY-MM-DD

## Top signals
1. **Item** - why it matters to me · [source](link) · suggested action

## Quiet
- One line per checked category where nothing mattered.

## Maintenance
- One suggestion: a source, world detail, or wiki page to add or drop.
```

3–7 strong items. Short enough to read with coffee. Honest when nothing happened.

## Output

- **Default: Markdown in chat.** No files, no PDF. When a gateway is connected, "chat"
  means that gateway (Telegram, Discord, Slack, email).
- **PDF: off until the reader turns it on** via **Configure your PDF**. When on, this
  section names the format and channel - e.g. *"PDF output: on. Send the PDF as an
  attachment over the Telegram gateway; also post the Markdown."* - and the run workflow
  renders `report-template.html` and delivers it over the gateway. Edit this line to
  change what gets delivered and where.

## Feedback loop

After each report, ask:

- What was useful? What was noise? What was missing?
- What should rank higher or lower next time?
- Any source to add or drop?

Then **edit this skill** with the answers: sources → *My sources*; context and
preferences → *What's relevant to me*; noise → *Relevance rules → Drop*; ranking changes →
*Ranking & selection*; format changes → *Report format*. When a story is worth tracking
across runs, give it a page in the wiki (see **The wiki**) and keep it updated each run.

This is the whole self-improvement mechanism. No magic: feedback in, skill edits out,
the next report gets sharper.

## Configure your PDF (optional)

A polished PDF is a nice-to-have, not a requirement - the Markdown report is the product.
Only run this once the report content is already good; a beautiful PDF of a mediocre
report is still a mediocre report. This step is contained: it edits only
`report-template.html` and this skill file, and sends one test PDF to the user over the
gateway - nothing else on their system is touched.

`report-template.html` (next to this skill) is the print template. It ships as a working
example you can render as-is to see the design. Personalizing it is a one-time edit to the
`:root` block marked **EDIT THESE TO REBRAND**. If it isn't there - an install that
fetched only `SKILL.md` - grab it into the skill directory first:

```bash
curl -O https://raw.githubusercontent.com/chrishart0/hermes-workshop/master/examples/skills/daily-intelligence-report/report-template.html
```

When the user asks to set up their PDF, interview briefly - one question at a time:

1. **Report name?** The masthead wordmark (e.g. "The Daily Dispatch", "Morning Wire",
   "{Name}'s Brief").
2. **One brand color?** A single accent hex for links, rank numbers, and the "why this
   matters to you" rule. Default is Hermes blue `#0000f2`.
3. **Who is it filed for?** The reader's name for the dateline. Optional.
4. **Page size?** Letter (US) or A4.
5. **Delivery?** The report is delivered over the connected chat gateway (Telegram,
   Discord, Slack, email). Do they want the PDF as an attachment only, or the PDF plus the
   Markdown text in the same message?

Then:

- Confirm a gateway is connected. If none is, tell them to connect one first
  (`hermes gateway setup`) - the PDF needs somewhere to land - and continue once it is.
- Edit `report-template.html`: set `--accent` (and `--accent-press` to a darker shade),
  `--page-size`, and the visible `.wordmark` / `.kicker` text. Change fonts only if they
  ask - swap the three `--font-*` variables, and stick to system fonts so scheduled
  renders stay offline-safe. Leave the layout alone.
- Set the **Output** section above to record the choice and channel, e.g. *"PDF output:
  on. Send the PDF as an attachment over the Telegram gateway; also post the Markdown."*
  If the gateway can't attach files, fall back to posting the Markdown and say so.
- Do a test render (see **Render as PDF**) and send the PDF to the user over the gateway
  (include the `MEDIA:` line so it attaches) so they see it land in chat. Offer to tweak
  the accent, name, or spacing from there.

## Render as PDF

Only when **Output** says PDF is on. Each run, build the PDF from the template - never
edit the template's styling per run:

1. Copy `report-template.html` to a working file (e.g. `briefing-YYYY-MM-DD.html`). The
   template stays untouched.
2. In the copy, replace the masthead `{{TOKENS}}` - `{{WEEKDAY}}`, `{{MONTH DD, YYYY}}`,
   `{{ISSUE}}` (increment each run or use the date), `{{READ_MIN}}`, `{{READER_NAME}}`,
   `{{GENERATED_AT}}`.
3. Rebuild the content between the masthead and the colophon from today's report: one
   `<article class="signal">` per top signal (rank, `.eyebrow` category, headline, the
   required `.foryou` "why this matters to you" note, and a `.meta` row with source link
   and optional `.action` chip), the `.quiet` list, and the `.tuneup` note. Drop the
   `.standfirst` block on a genuinely quiet day.
4. Render the copy to PDF with whatever the machine has:
   - `weasyprint briefing-YYYY-MM-DD.html briefing-YYYY-MM-DD.pdf`, or
   - `chromium --headless --no-pdf-header-footer --print-to-pdf=briefing-YYYY-MM-DD.pdf briefing-YYYY-MM-DD.html`
     (`google-chrome` works the same; add `--no-sandbox` only if the environment needs it).
   The template is offline-safe: it's tuned for the system fonts in its stacks, so a
   headless render with no network matches the preview - no surprise font swap in a
   scheduled PDF.
5. Verify before announcing it: `test -s briefing-YYYY-MM-DD.pdf && file briefing-YYYY-MM-DD.pdf`
   (expect "PDF document"). Never report a PDF you haven't confirmed exists and is non-empty.
6. Deliver per **Output**. Over a Hermes gateway, attach the PDF by including a line
   `MEDIA:/absolute/path/to/briefing-YYYY-MM-DD.pdf` in your reply - that is what makes the
   gateway upload the file; a path mentioned in prose does not attach. If the reader says
   it didn't attach, don't repeat the same line - send it directly via the platform's file
   API (e.g. Telegram `sendDocument`) and confirm success. Clean up working files unless
   the user wants them kept.

Keep the document clean. A 3–5 item brief fits one page; a longer one flows to a second
page, which is fine - but don't ship a page that is only the footer (drop the `.standfirst`
or tighten copy when it's close). No emoji, chat dividers, or tool logs in the PDF - it is
a document, not a chat transcript.

## Later

If no gateway was connected at bootstrap, schedule the report with Hermes cron once one
is; turn on a branded PDF with **Configure your PDF**; or split into focused skills
feeding one final briefing.
