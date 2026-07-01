# Workshop Objective

## Locked objective

Build your first useful agent with Hermes - and connect it to where you already work.

Make Hermes read the stuff you already read every morning, cross-reference it against
what you actually run, manage, attend, or care about, and bubble the most important
things to the top - then deliver it to your Discord, Telegram, Slack, or Teams.

The 2.5-hour format gives us time to do the gateway setup live and give attendees
real runway to implement their own use case, not just the default path.

This is something I have multiple iterations of running every day, both for personal
and business. You can do it too.

## Core thesis

The magic is not summarization. The magic is relevance.

The opening should create tension, not just explain. Open these loops early and close
them through the workshop:

1. Coding agents are only the first locked-in use case. If agents work for code, what
   else can they work for?
2. The presenter is using this every day in production and personal workflows. What
   are those agents actually doing?
3. One agent caught real customer-impacting issues during a live release. How did it
   know what mattered, and how did it help?
4. Attendees can leave with the start of one themselves - and connected to where they
   already work. How can that be possible in one afternoon?
5. The trick is not summarization. Then what is the trick?

Close those loops by showing the daily intelligence pattern: sources, the attendee's
world/context, relevance filter, report format, delivery, and feedback.

A new loop for the 2.5-hour format:

6. What could *you* build? (use-case brainstorm before install)

Suggested opening language:

> You have all seen the AI agent hype. Many of you have probably used coding agents -
> Codex, Claude Code, OpenCode, Cursor, whatever. That use case is locked in. Agents
> can write code, inspect repos, run tests, and iterate.
>
> But coding is only the first place agents got good enough to feel real.
>
> The question I want to open today is: what happens when you point that same pattern
> at the rest of your work?
>
> Your servers. Your logs. Your newsletters. Your releases. Your dashboards. Your
> support inbox. Your calendar. Your health metrics. Your business metrics.
>
> I am not talking about something theoretical. I have Hermes agents doing this every
> day - for my own life and for real production products. One of them recently watched
> a live feature release, surfaced customer-impacting issues from analytics, and helped
> me respond faster than I could have by staring at dashboards.
>
> By the end of this session, you will understand the pattern, you will have the start
> of one yourself, and it will be connected to where you already work.
>
> We are going to build the first version of a daily intelligence agent: something that
> reads the information you already check every morning, cross-references it against
> your world, and bubbles the important stuff to the top.
>
> The magic is not summarization. The magic is relevance.

## Secondary thesis

Do not just summarize the internet. Cross-reference it against your world.

## Audience promise

By the end of 2.5 hours, attendees should have:

1. Hermes installed.
2. A model/provider connected and smoke-tested.
3. A gateway connected so Hermes reaches them on Discord, Telegram, Slack, or Teams.
4. One agent skill bootstrapped and running for a use case they actually care about.
5. One round of feedback applied (the self-improving loop).

### Stretch goals

6. Cron scheduling so the agent runs without prompt.
7. A second data source or richer source connected.

## What the agent can read and cross-reference

- Distro/tool/software news.
- GitHub releases and changelogs.
- CVEs/security advisories.
- Newsletters/blogs/RSS they already read.
- Homelab/server status.
- Production monitoring, alerts, and metrics.
- Personal context like events, local news, health metrics, schedule, and projects.

## Example stories to weave in from presenter's actual use

1. Daily aggregator newsletter that gives me one PDF with:
   - Tools/software news: What changed in the tools I actually use?
     - Even goes over what people are talking about on X.com in my space to enrich
       new release news
   - Newsletter/blog aggregation
     - Read what I already subscribe to and pull out what matters to me.
   - Looks for networking events and just fun stuff to do around town, makes me a calendar
   - Business news that may be useful for my business
   - Local news I may care about

2. Production monitoring daily report
   - What happened across my live product app while I was away?
   - Knows about ongoing activities, like deploy of a big new feature, so can
     specifically watch for issues
     - Example: big release, we temp setup 30m checkins, then moved to 4h. This was
       wildly successful, as it was surfacing live issues customers were experiencing,
       recorded in our analytics, then I was squashing bugs as fast as it was detecting
       users having them. The agent even drafted emails for me to send to the specific
       users to apologize and remediate. One of the best experiences I've had recently.
       Really felt like a live teammate and moved so fast.

3. Business Key Metrics report
   - Surfaces most important numbers, like revenue, refunds, etc
   - Highlights anything which looks odd

4. Support and feedback report
   - Reads through our live support emails
   - Reading through our products built-in feedback system to surface important feedback
   - Watches analytics to look for problems users may be experiencing

### Other examples that aren't from my use but would be cool

5. CVEs/sysadmin relevance
   - Which of today's CVEs matter for my actual machines?

6. Newsletter/blog aggregation
   - Read what I already subscribe to and pull out what matters to me.

## Positioning

This is not a generic news bot.

It is an agent that turns your morning information diet into a personalized
intelligence report - and delivers it where you already look.

## The four-part mental model

> **Memory** helps Hermes know *you*. **Skills** help Hermes know *how*.
> **Cron** and **webhooks** tell Hermes *when* to act. **Gateway** puts the
> result *where humans already are*.

Positioning line, do not dilute: **"Make an agent that helps you run your machines."**

## Session shape

The 2.5-hour session shape is:

1. **Story and concept** (~45 min) - open the loop with real use cases, ground in
   definitions, show Ana and the daily-intel agent, explain the pattern, and run a
   use-case brainstorm so attendees arrive at install already knowing what they
   want to build.
2. **Setup** (~30 min) - get Hermes installed, connected to a provider, smoke-tested,
   and connected to a messaging platform via the gateway.
3. **Build** (~75 min) - walk through the daily intelligence bootstrap live, then
   free build time where attendees implement their chosen use case. Apply one round
   of feedback. The extra time in this format lets people actually build, not just
   watch a demo.
4. **Next layers and wrap** (~10 min) - show cron, richer sources, and the path
   forward. Close with the offer of evening help.

## Definition of done

If an attendee leaves with Hermes working, a gateway connected, and one agent skill
bootstrapped for something they actually care about, they succeeded.

If they also get cron, richer data sources, or a second skill working, that is a
stretch win.

## Teaching posture

This is story-first, discussion-driven, and build-focused.

Use the default Hermes setup path in the workshop. Do not make Docker/container
setup part of the live flow. It can be mentioned as a more isolated/security-conscious
option.

The test is simply running local Hermes in the CLI after install/provider setup.

Say explicitly: if attendees do not finish building in the session, that is okay.
The goal is to get the agent started and the pattern understood. The presenter will
be available in the evening or hangout room to help finish cron, richer data sources,
weird servers, or other setup.

## Tiny trust/safety beat

Start read-only. Require sources and evidence. Do not let the agent act until it has
earned trust.