---
title: Daily Intelligence Agent
description: Build a recurring report that reads the sources you already check and surfaces only what matters.
pageClass: uc-page
audience: general
tags:
  - briefing
  - research
  - personal
  - setup-guide
difficulty: beginner
safety: read-only
guide_status: setup-guide
---

# Daily Intelligence Agent: the default workshop project

**Watches:** the stuff you already check every morning - release notes, advisories, feeds,
newsletters, dashboards, local events, whatever your morning tabs are.
**Delivers:** one short report that cross-references all of it against *your* world - your
stack, your machines, your projects, your plans - and bubbles up only what matters.


```mermaid
flowchart LR
    S["your sources<br/>releases · advisories<br/>newsletters · feeds"] --> A(["Hermes<br/>+ your skill"])
    W["your world<br/>stack · projects · city"] --> A
    A --> R["daily report<br/>only what matters"]
    R -. "your feedback" .-> E["Hermes edits<br/>the skill itself"]
    E -. "next run is sharper" .-> A
```

---

## The real version this is based on

This isn't hypothetical. The instructor runs this pattern daily: one morning newsletter
that reads tool releases for the tools he actually uses (plus what people are saying about
them), the newsletters he already subscribes to, events around town worth attending,
business news that could touch his product, and local news that changes his plans, all
judged against for if he will care, delivered as one PDF.

The template skill you're about to install ships with that setup filled in as the example.
The bootstrap replaces it with *yours*.

---

## Step 1: the kickoff prompt (paste into Hermes)
`
```text
Set up my Daily Intelligence Report skill.

1. Fetch this skill template with curl:
   https://raw.githubusercontent.com/chrishart0/hermes-workshop/master/examples/skills/daily-intelligence-report/SKILL.md
2. Install it as a new skill named daily-intelligence-report in your own skills
   directory, using your skill management tooling. Do not hardcode paths.
3. The template is not customized yet. Follow its "Bootstrap" section exactly:
   interview me briefly, then edit the skill so it is mine.
4. Don't set up PDF rendering or any delivery beyond what the Bootstrap section says.
```

Hermes will ask you five questions.

When the bootstrap finishes, Hermes offers you a first-run message. Send it. That's your
first report, give it a few minutes; Hermes is actually reading your sources.

### Example use cases

- **Tool & release watch:** 
  - sources: GitHub release feeds + project blogs for tools you run + x.com / reddit commentary
  - context: your actual installed versions
  - filter: breaking changes, deprecations, security fixes, major feature releases
- **CVE relevance for a real stack:** 
  - sources: NVD/distro advisory feeds; 
  - context: "Debian 12, nginx, PostgreSQL 16, Docker, OpenSSH"
  - filter: anything you'd patch this week.
- **Personal daily briefing:** 
  - sources: newsletters you already read, local event listings, your notes/calendar export
  - context: your city, interests, this week's commitments
  - filter: changes my plans or touches a current project.
- **Production monitoring report:** 
  - sources: read-only metrics/logs/analytics exports
  - context: current deploys and known issues
  - filter: user-facing symptoms and anomalies. (Only with safe read-only access you already have.)
- **Support & business signals:** 
  - sources: exported support/feedback data, key metrics
  - world: your product and current release
  - filter: new problem patterns, odd numbers.
  (Use exports/copies - never paste customer data into prompts.)

---

## Step 2: improve it with feedback (run two)

**Feedback required:** Self-improvement starts with feedback. After the first report, tell Hermes what you actually cared about, what you don't want to see again, and why.

```text
Feedback on today's report: <e.g. 'the kernel CVE was the only useful item; the three
AI-hype items were noise; rank security above releases; add the Tailscale changelog as a
source; too long - cap at 250 words'>

Update my daily-intelligence-report skill with this feedback. Keep it read-only and
source-required. Tell me in one line what you changed.
```

Hermes edits the skill itself. Sources, what you are about, noise rules, format. Do this
after every run for the first few days. It gets sharp fast.

---

## Optional: make it a beautiful PDF

Once the report content is dialed in, you can have Hermes render it as a polished, branded
PDF and deliver it over your chat gateway - a personal wire service that lands in your
Telegram/Discord/Slack/email each morning. This is optional; a clean Markdown report is a
perfectly good finish line. Connect a gateway first (see [Stretch](#stretch-schedule-and-deliver)
below) so the PDF has somewhere to land.

The skill ships with a print template (`report-template.html`). This prompt walks you
through making it yours - name, brand color, page size - turns PDF output on, and sets it
to be delivered over your gateway.

```text
Set up PDF output for my daily-intelligence-report skill.

Follow the skill's "Configure your PDF" section: ask me the setup questions one at a
time, then personalize report-template.html (report name, brand color, page size),
switch PDF output on, and set it up to be delivered over my connected chat gateway
(Telegram/Discord/Slack/email) as an attachment. Do a test render, send it to me over
the gateway so I can see it land, and keep changes limited to the template and the skill
file.
```

Hermes asks a few quick questions, edits the template, renders a sample, and sends it to
you over your gateway so you can see it before committing. After this, every run -
including scheduled ones - delivers the PDF to your chat.

---

## Stretch: schedule and deliver

If you already had a gateway connected, the bootstrap scheduled your report for you -
skip ahead. Otherwise:

### 1) Setup your messaging *gateway* of choice (Discord, telegram, email, etc)
<https://hermes-agent.nousresearch.com/docs/user-guide/messaging/>


### 2) Schedule your report to get delivered to you
Instruct Hermes to setup a cron to run your report research on the schedule you chose.

Prompt
```text
Schedule my daily-intelligence-report for delivery on my chosen schedule, e.g. 8am daily.
```

---


## What to do Next?

- PDF: get the Markdown report sharp first, then turn on a branded PDF with the optional
  [Configure your PDF](#optional-make-it-a-beautiful-pdf) step above.
- Break out the research into many daily research crons, then have 1 final report writer skill which produces a final report.