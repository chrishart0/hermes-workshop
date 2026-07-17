---
name: use-case-finder
description: Help the user find which AI agent use cases actually fit their work and life. Interview them about a normal day, their business, and what they care about, map their answers to proven agent patterns, point them at the community use case libraries, and help them pick one or two concrete agents to build first. Use at the start of the workshop, or any time someone says "I don't know what to build."
version: 0.1.0
metadata:
  hermes:
    tags: [discovery, onboarding, use-cases]
    category: onboarding
---

# Use Case Finder

Most people arrive with the wrong question. They ask "what can an agent do?" The useful
question is "what do *you* do that an agent could take off your plate?" This skill answers
the second one: interview the user about their real work and life, then hand them one or
two use cases worth building today.

The goal is not a long list. The goal is a short, specific, personal shortlist the user is
excited to start on before they leave.

## How to run this

Interview the user one question at a time. Rough answers are fine. Listen for the concrete
noun: the report they dread writing, the inbox they scan every morning, the spreadsheet
they copy-paste from, the thing they keep meaning to check and forget. Those nouns become
use cases.

Do not lecture. Do not dump the whole catalog on them. Ask, reflect back what you heard,
then narrow.

## Interview: understand their day

Ask these in order. Skip any the user already answered. Stop early once you have two or
three real candidates.

1. **Walk me through a normal work day.** From the first thing you open to the last.
   Where does the time go? (Listen for repeated steps, manual copying, and "then I check
   X".)
2. **What do you do that is repetitive or boring?** The stuff you would hand to a junior
   hire on day one.
3. **What do you keep meaning to check but forget?** Competitors, releases, alerts,
   inboxes, prices, deadlines, events.
4. **What information do you touch every day?** Emails, spreadsheets, CRMs, logs, docs,
   dashboards, chat channels, RSS, tickets.
5. **What are you into outside of work?** Hobbies, a side project, your city, your home,
   family logistics. Good first agents are often personal, low-stakes, and fun.
6. **If one status update or summary just appeared every morning, what would be in it?**
   This one question surfaces the highest-value agent more often than any other.

If the user runs a business, also ask: who are your customers, what would you notice a day
too late, and what decision do you make from a gut feel that you would rather make from
data?

## Top use case types

Use these as the vocabulary to name what you heard. Most real requests are one or two of
these, sometimes combined.

- **Recurring reports and briefings.** A morning digest cross-referenced against what
  matters to this person: releases, news, CVEs, events, business signals. The single most
  popular starting agent. (See the `daily-intelligence-report` skill in this repo.)
- **Watch and alert.** Track a competitor, a market, a price, a repo, a policy, or a
  dashboard, and tell me only when something changes and why it matters.
- **Inbox and message triage.** Read a pile of support tickets, emails, or feedback and
  surface urgency, patterns, and drafts, with a human approving before anything sends.
- **Automation and chores.** Multi-step busywork: rename and file, reconcile a
  spreadsheet, turn an export into an action list, fill a template.
- **Chat over your data.** Ask plain-language questions across CSVs, a database, logs, or
  a folder of documents, instead of writing queries.
- **Content and writing.** Turn source material into briefs, outlines, drafts, and
  checklists in the user's voice.
- **Coding and dev workflow.** Triage issues, summarize a diff, draft release notes, watch
  CI, keep a changelog.
- **Ops and monitoring.** Read-only health checks over systems, services, logs,
  containers, and backups, with triage and escalation drafts.
- **Security.** Match advisories and CVEs against the stack the user actually runs; drop
  the rest.
- **Home and personal admin.** Renewals, appointments, travel, reminders, local events,
  household logistics.
- **Multi-agent.** Several focused agents feeding one summary, once a single agent is
  working and the user wants more.

Start narrow. A working single agent beats an ambitious multi-agent plan that never ships.

## Browse the libraries with the user

When the user wants to see real, worked examples, or their idea does not map cleanly to a
type above, browse these together. Pull up the one that fits and read a few entries with
them rather than sending a wall of links.

- **Awesome Hermes Use Cases** (best structured catalog): around 50 use cases by category
  (automation, messaging, coding, home, content, multi-agent, ops, security, finance,
  deploy). Every entry is backed by a primary source, and it ships runnable demos like a
  daily briefing and a team Telegram bot.
  https://github.com/aliaihub/awesome-hermes-usecases
- **Official User Stories and Use Cases**: first-person community stories gathered from X,
  GitHub, Reddit, HN, blogs, and podcasts. Closer to what people actually run than to
  polished how-tos.
  https://hermes-agent.nousresearch.com/docs/user-stories
- **Awesome Hermes Agent** (ecosystem directory, not pure ideas): skills, plugins, memory
  providers, surfaces, bridges, and playbooks. Reach for this once the user knows the shape
  of the job and needs installable pieces.
  https://github.com/0xNyk/awesome-hermes-agent
- **Reddit use cases megathread**: messier than the curated lists, but the best signal for
  what people are shipping this month.
  https://www.reddit.com/r/hermesagent/comments/1t6gf4j/megathread_hermes_agent_use_cases_what_the/

The workshop's own curated shortlist lives on the Use Case Library page
(https://hermes.arcadian.cloud/use-cases) if you want a smaller, opinionated starting set.

## Help them pick

Close the session by narrowing to a shortlist, not by admiring the whole field.

1. Reflect back the two or three candidates you heard, named as use case types.
2. For each, say in one line what it would watch or do, what data it needs, and where a
   human would approve.
3. Recommend **one** to build first. Bias toward: high boredom or high value, data the user
   already has access to, low stakes if it gets something wrong, and a clear "done" for a
   first run. A personal or read-only agent is a great first build.
4. Confirm the pick and hand off. If it is a recurring report or briefing, point the user
   at the `daily-intelligence-report` skill and offer to start its bootstrap interview. For
   other shapes, sketch the trigger, the tools or sources, the output, and the approval
   point, then help scaffold a new skill for it.

End with momentum: the user should leave with one named agent, a first source or data set,
and the very next step already clear.
