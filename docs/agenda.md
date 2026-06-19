# Agenda — 2.5-Hour Workshop

## Frame

Build your first useful agent with Hermes — and connect it to where you already work.

Story-first, discussion-driven, build-focused. The extra time over the 45-minute version
lets us do the gateway setup live and give attendees real runway to implement their own
use case (not just the default path).

Detailed material lives elsewhere:

- Objective / positioning: [`docs/workshop-objective.md`](workshop-objective.md)
- Attendee activity: [`README.md`](../README.md) (the workshop guide is the README)
- Default project prompt: [`examples/prompts/daily-intelligence-agent.md`](../examples/prompts/daily-intelligence-agent.md)
- Alternative paths: [`examples/prompts/homelab-health.md`](../examples/prompts/homelab-health.md), [`examples/prompts/alert-triage.md`](../examples/prompts/alert-triage.md), [`examples/prompts/chatops-data.md`](../examples/prompts/chatops-data.md)
- Template skill: [`examples/skills/daily-intelligence-report/SKILL.md`](../examples/skills/daily-intelligence-report/SKILL.md)

## Definition of done

Attendees succeed if they leave with:

- Hermes installed and working in the CLI
- a model/provider connected and smoke-tested
- a gateway configured so Hermes can reach them where they work (Discord, Telegram, Slack, or Teams)
- one agent skill bootstrapped for something they actually care about — and running

Cron scheduling and richer data sources are stretch goals.

## Agenda spine

### Part 1 — Presentation (~45 minutes)

#### 1. Opening loop — agents beyond coding (5 min)

Purpose: make the room feel why this matters before setup friction begins.

Core beat:

> Coding agents proved the pattern. Today is about using open-source tooling to build
> agents that work for you outside the editor.

Open loops to create:

- What comes after coding agents?
- What does a real non-coding agent do every day?
- Why is relevance more valuable than summarization?
- Can I start one in this session?

#### 2. What's an agent? (8 min)

Purpose: ground the room in definitions so the rest of the session has a shared vocabulary.

Must land:

- An agent is not a chatbot. It has memory, tools, skills, and a schedule.
- The four-part mental model: **Memory** helps Hermes know *you*. **Skills** help Hermes
  know *how*. **Cron** and **webhooks** tell Hermes *when* to act. **Gateway** puts the
  result *where humans already are*.
- Live terminal demo: show Hermes in action — `hermes --tui`, `hermes tools list`,
  `hermes skills list`. Let them see it's a real tool, not vaporware.
- Safety posture: read-only first, least privilege, no sudo by default, evidence required.

Key demo commands:

```bash
hermes --tui
hermes tools list --platform cli
hermes skills list
```

#### 3. Agent use cases — this is not hypothetical (12 min)

Purpose: credibility and emotional buy-in. Show real agents doing real work.

Sequence — quick teasers first, then artifact, then reveal:

1. personal daily intelligence briefing (teaser)
2. release-watch / check-in agent (teaser) — different agent, don't attribute to Ana
3. personal health reporting (teaser)
4. **the 8:03 artifact** — this morning's redacted money report from team Discord.
   Read it out loud, pause, then: "nobody on the team wrote this." Let the room
   sit with *then who did?* Do not explain yet.
5. **reveal Ana** — the team's business analyst as a Hermes profile: read-only on
   production, 8 cron jobs, 23 custom skills she edits herself from feedback
6. **close the loop into the build** — day-one Ana ≈ what attendees build today;
   she was useful ~3 hours after her profile was created

Must land:

> The magic is not summarization. The magic is relevance.

> Ana went from new profile to answering live revenue questions in one evening —
> with the same ingredients you'll use today.

#### 4. Why Hermes? (7 min)

Purpose: the architectural sell — why this agent framework over others.

Core beats:

- Open-source, CLI-first, runs on your machine.
- The four-part model again, now with examples from Ana and the daily-intel agent.
- Skills that edit themselves from feedback (not magic, but fast iteration).
- Gateway: one agent, every platform — Discord, Telegram, Slack, Teams, email, SMS.
- The safety posture is load-bearing, not decoration: read-only first, evidence required,
  no secrets in prompts or repos.
- Positioning: one more tool on the shelf next to `cron`, `ssh`, and `grep` — not magic,
  not a replacement for thinking.

#### 5. Use-case discussion — what could you build? (10-13 min)

Purpose: get attendees invested in their own use case before the install begins.
They should start setup already knowing what they want to build.

Facilitation beats:

- **Prompt the room:** "Before we install anything — what do you check every morning?
  What alerts do you get? What would you rather an agent read for you?"
- **Whiteboard or shared notes:** capture ideas from the room.
- **Seed examples if the room is quiet:**
  - "Anyone running servers at home? Homelab health agent."
  - "Anyone on-call? Incident triage from monitoring webhooks."
  - "Anyone managing a product or business? Daily key metrics report."
  - "Anyone with a newsletter habit? Personal daily briefing."
  - "Anyone managing a team? Support/feedback summarization."
  - "Anyone working in security? CVE relevance against your actual stack."
- **Steer toward the four workshop paths** as proven starting points:
  1. Daily Intelligence Agent (default, easiest)
  2. Homelab / Production Health
  3. Incident Triage
  4. ChatOps Over Your Data
- **Ground expectations:** "You won't finish everything today. Pick one use case.
  The pattern is what matters — you can apply it to everything else later."
- **Take 2-3 attendees' ideas live** and sketch them against the pattern:
  sources + your world + relevance filter + report + feedback.

Must land:

> You already know what you want an agent to do. The rest of this session is making it
> happen.

### Part 2 — Setup (~30 minutes)

#### 6. Expectations and workshop guide (1 min)

Purpose: reduce pressure, point to the guide.

Say:

> If you leave with Hermes working, a gateway connected, and one skill bootstrapped,
> you succeeded. If you also get cron working, wonderful — I'll help with that tonight.

Attendees use: the workshop guide in the [`README.md`](../README.md)

Do not duplicate setup commands here. The guide owns the commands.

#### 7. Install and smoke test (25-30 min)

Purpose: get everyone to a working agent.

Walk through live, one step at a time, waiting for the room at each checkpoint:

1. API key / provider login (OpenRouter path for anyone without a subscription)
2. Hermes install (`curl -fsSL ... | bash`)
3. `hermes model` — pick provider and model
4. Smoke test: `hermes --tui` and a simple prompt
5. `hermes tools list --platform cli` — show the boundary

Coach: walk the room, unblock people. Conference wifi and provider login are the
most common failure points — have the OpenRouter fallback ready.

### Part 3 — Build (~75 minutes)

#### 8. Connect Hermes to where you work (15 min)

Purpose: this was a stretch goal in the 45-minute version. In the 2.5-hour version,
it's a core deliverable — the gateway is what makes the agent feel real.

Pick one platform as the live demo (Discord recommended for ease of setup):

```bash
hermes gateway setup
```

Walk through:

- Bot creation (Discord) or bot token (Telegram) — the platform-specific steps
- `hermes gateway setup` interactive flow
- Test message: send from Hermes → platform → confirm receipt
- Explain: this same gateway is how cron jobs deliver reports later

For attendees using other platforms, point them at the docs:

- Telegram: <https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram>
- Discord: <https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord>
- Slack, Teams, email: <https://hermes-agent.nousresearch.com/docs/user-guide/messaging>

#### 9. Pick a use case and start implementing (45-55 min)

Purpose: core hands-on work. The extra time means attendees can implement their
chosen path, not just the default.

**10 min — Walk through the default path live:**

Open the default project prompt and bootstrap it together:

[`examples/prompts/daily-intelligence-agent.md`](../examples/prompts/daily-intelligence-agent.md)

That prompt points to the template skill:

[`examples/skills/daily-intelligence-report/SKILL.md`](../examples/skills/daily-intelligence-report/SKILL.md)

The kickoff prompt tells Hermes to fetch the template, install it locally, and bootstrap
it — Hermes interviews the attendee (four short questions), then edits the skill itself.

**5 min — Show the first report:**

Let attendees trigger their first report and read it. This is the payoff moment.

**30-40 min — Free build time:**

Attendees choose their path:

1. **Daily Intelligence Agent** (default) — polish the skill, run a second report,
   apply feedback, add sources.
2. **Homelab / Production Health** — point Hermes at your machines, define thresholds,
   generate a first triage.
3. **Incident Triage** — write a triage prompt, test it against a sample payload,
   set up a webhook route.
4. **ChatOps Over Your Data** — point Hermes at a CSV, SQLite DB, or log directory,
   ask real questions.

Coach: circulate, unblock, suggest next steps, help people who got stuck on install
catch up. This is the most important part of the session — protect it.

Alternative path guides live here:

- [`examples/prompts/homelab-health.md`](../examples/prompts/homelab-health.md)
- [`examples/prompts/alert-triage.md`](../examples/prompts/alert-triage.md)
- [`examples/prompts/chatops-data.md`](../examples/prompts/chatops-data.md)

#### 10. Improve once with feedback (5 min)

Purpose: close the "self-improving" loop honestly.

Must land:

> Self-improvement starts with feedback, not magic.

The attendee gives their first report feedback, then Hermes edits the skill itself.
Live demo: show one attendee's feedback prompt and the result.

### Part 4 — Next layers and wrap (~10 minutes)

#### 11. Cron, richer sources, and the path forward (8 min)

Purpose: show the path forward without making it required.

Mention only as next layers:

- cron — schedule your agent so it runs without you
  ```bash
  hermes cron create "0 8 * * *" \
    --name "daily-intelligence-report" \
    --deliver local \
    "Use my daily-intelligence-report skill to generate today's report."
  hermes cron list
  ```
- gateway delivery — reports to Discord, Telegram, Slack, email, SMS
- richer data sources — APIs, databases, monitoring endpoints
- multiple focused skills feeding one final briefing
- PDF generation for beautiful reports

#### 12. Close (2 min)

> If you do not finish now, that is okay. The goal is to get the agent started.
> I'll be around to help wire cron, richer data sources, weird servers, whatever.

Final line:

> Make Hermes read the boring stuff for you — and give you the version worth acting on.