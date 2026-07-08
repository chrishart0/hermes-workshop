# Building Practical Agents with Hermes Workshop

Build an agent that does something useful for you and lives where you work. From 0 to 1. This workshop is for you if you've never built an agent, or if you've built dozens and want to see how Hermes makes it easier.

## What we'll cover

### Part 1) Art of the Possible
- **What's an agent** - not a chatbot. Memory, tools, skills, and a schedule
- **Real use cases** - daily intelligence briefing, business KPI report, homelab health, incident triage, Chat over your data
- **Why Hermes** - works where you already work, self-improving skills, multi-platform, ease of setup
- **Use-case brainstorm** - figure out what *you* want to build before touching install

### Part 2) Setup Your Agent
- **Install and setup** - Hermes on your machine, provider connected
- **Connect where you work** - gateway to Discord, Telegram, Slack, or Teams

### Part 3) Make Your Agent Maximally Useful for You
- **Build your agent** - pick a use case, bootstrap a skill, run your first report
- **Feedback loop** - teach your skill to get sharper with every run
- **Schedule and delivery** - run your agent on a schedule, have it message you where you already work

## What you'll leave with

- Your own AI Agent installed and working
- Connected to your messaging platform
- One agent skill bootstrapped for something you actually care about
- The pattern to build more

## The mental model

> **Memory** helps Hermes know *you*. **Skills** help Hermes know *how*.
> **Cron** and **webhooks** tell Hermes *when* to act. **Gateway** puts the
> result *where humans already are*.

## Workshop paths

| Path | What it does | Best if you |
|---|---|---|
| **[Daily Intelligence](docs/use-cases/daily-intelligence-agent.md)** | Morning reports over your sources, ranked by what matters to you | Want a working agent fastest |
| **[Homelab Health](docs/use-cases/homelab-health.md)** | Read-only triage of disk, services, logs, containers | Run servers at home |
| **[Incident Triage](docs/use-cases/alert-triage.md)** | Turns monitoring webhooks into human triage summaries | Are on-call |
| **[ChatOps Over Your Data](docs/use-cases/chatops-data.md)** | Plain-language questions over CSVs, SQLite, logs | Query data by hand regularly |

---

## Static Workshop Site

The MVP public site is built with VitePress from Markdown in [`docs/`](docs/).
Target domain: `hermes.arcadian.cloud`.

Run it locally:

```bash
npm install
npm run docs:dev
```

Build and preview the static output:

```bash
npm run docs:build
npm run docs:preview
```

Deploy with Vercel from the repository root:

```bash
vercel --prod
```

This repo is configured with [`vercel.json`](vercel.json): Vercel runs
`npm run docs:build` and publishes `docs/.vitepress/dist`. The local Vercel
project link lives in `.vercel/`, which is intentionally gitignored. If you are
on a fresh machine and `vercel` says the project is not linked, run:

```bash
vercel link
```

and choose the existing project that serves `hermes.arcadian.cloud`.

GitHub Pages deployment also exists in [`.github/workflows/pages.yml`](.github/workflows/pages.yml),
but Vercel is the current direct deployment path for `hermes.arcadian.cloud`.