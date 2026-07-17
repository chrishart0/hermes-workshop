---
name: sales-pipeline-followup
description: Turn the user's live pipeline - a CRM (HubSpot, Salesforce, Pipedrive, Attio, Close...), a spreadsheet, or an export - into today's ranked action list: stale deals, missing next steps, follow-ups due, plus draft follow-up messages for the user to send. Connects READ-ONLY; never writes to the CRM, never sends a message, never invents contact history. Every item cites the deal. Improves from feedback.
version: 0.1.0
metadata:
  hermes:
    tags: [sales, pipeline, crm, follow-up]
    category: reports
---

# Sales Pipeline Follow-up

> **TEMPLATE - NOT YET BOOTSTRAPPED.**
> This skill ships as a workshop template. While this banner exists, do not generate an
> action list. Run the **Setup** section below instead: find out where the pipeline lives,
> connect to it read-only, then edit this file so the skill belongs to the user. Setup is
> finished when this banner and the Setup section have been deleted.

Turn a pipeline the user only opens when they feel guilty into a short action list they can
work in 15 minutes:

1. Read the pipeline (read-only) every run.
2. Find stale deals, missing next steps, and follow-ups that are due.
3. Rank by the user's rules - not by amount alone.
4. Draft the follow-up messages. **The user sends them.** The skill never sends or writes.

## Setup (agent: run once, then delete this section)

Work through this as a **task list** - use your todo/task tool so the user can watch progress
and nothing gets skipped. **Interview the user: actually ask each question and wait for the
answer.** Do not fill in defaults, do not guess their rules, and do not invent a pipeline to
move faster - a setup built on made-up data is worse than no setup. One question at a time;
rough answers are fine.

**1. Confirm read-only access to the pipeline.** This skill only ever *reads*.
   - If the user already connected their pipeline read-only (guide **Step 1**), verify it:
     load the read-only key from its env var (or open the file/sheet), pull a *small sample*
     of deals, and show the user a couple so you both know it works.
   - If it is **not** connected yet, **ask where their pipeline lives** - do not assume a CSV,
     it is usually a SaaS CRM (HubSpot, Salesforce, Pipedrive, Attio, Close, Zoho, or a
     spreadsheet / export). Help the user create a **read-only** API token scoped to read
     deals + contacts only, store it in the Hermes secret store (profile `.env` as e.g.
     `PIPELINE_API_KEY=...`, or `hermes secrets`), and verify. Keep only the **env var name**
     here - never the key value, in this file or in chat.
   - Only if the user says they have no pipeline handy and want to *try the workshop* with
     sample data: create a small sample CSV and note that it's a placeholder to be replaced.
     Never default to this.

**2. Map the fields.** From the sample, confirm which field is the deal/company, stage,
   amount, last-contact date, next step, and owner/contact. Note anything missing (e.g. no
   "last contact" field) - it changes what "stale" can mean.

**3. Pipeline rules.** What counts as **stale** (e.g. no contact in 7 days on an open deal);
   which stages are open/active; what is disqualified or must never be chased ("closed lost",
   "do not contact").

**4. Priority and draft tone.** What rises to the top (bigger deals, later stages, warm
   intros?), and a first cut of the voice for drafts (short, direct, no hype?). The drafts get
   tuned to the user's real writing later with `/learn` (guide **Step 3**) - a rough answer is
   fine now.

**5. How often should this run?** Daily, weekday mornings, before your first block.

Then edit this skill file (`skill_manage` edit, or edit directly):

- Replace **My pipeline** with the real source: type, how to reach it (env var name for the
  key, or the file/sheet path), and the field mapping from step 3.
- Fold the user's answers into **Pipeline rules**, **Priority**, and **Draft tone**.
- Rewrite the frontmatter `description` so it names the user's real pipeline and CRM.
- Leave the run workflow, action-list format, output, feedback, and safety sections alone
  unless the user asked for something specific.
- Delete this Setup section and the template banner at the top.

Finish with two steps:

1. Offer one short message the user can send right now to generate their first action list.
2. Check whether a Hermes gateway is configured (Telegram, Discord, email). If one is, set up
   a Hermes cron on the cadence the user chose, delivering the action list through that
   gateway. If not, tell them they can connect a gateway later and schedule it then.

## My pipeline

<!-- EXAMPLE: replace all of this at Setup. -->

- **Source:** HubSpot CRM, connected read-only.
- **Access:** REST API with the read-only token in env var `PIPELINE_API_KEY` (deals +
  contacts read scope only). No write scopes.
- **Fields:** `dealname` = deal, `dealstage` = stage, `amount` = amount, `notes_last_contacted`
  = last contact, `next_step` = next step, `hubspot_owner_id` = owner.
- **Open stages:** Qualified, Demo, Proposal, Negotiation. (Won / Lost are closed.)

## Pipeline rules

<!-- EXAMPLE: replace at Setup. -->

- **Stale** = no contact in 7 days on an open deal.
- **Active stages:** Qualified, Demo, Proposal, Negotiation.
- **Never chase:** Closed Lost, Closed Won, anything tagged "do not contact" or disqualified.
- A deal with no **next step** set is always worth surfacing, stale or not.

## Priority

<!-- EXAMPLE: replace at Setup. -->

Rank the action list by, in order: later stage (Proposal/Negotiation first), then larger
amount, then how overdue the follow-up is. Warm intros and replied-to threads jump the queue.

## Draft tone

<!-- EXAMPLE: replace at Setup, then refine from real writing with `/learn`. -->

Short, direct, human. No hype, no "just checking in", no fake urgency. One clear ask per
message. Sign off as the user.

To make drafts actually sound like the user, teach Hermes their voice with `/learn` on a
handful of follow-ups they've really sent (see the guide's "Make the drafts sound like you"
step), then capture the concrete patterns here - greeting, sign-off, sentence length,
words they never use.

## Run workflow

Track this as a task list (todo/task tool) so the user sees progress and nothing is skipped:

1. Get today's date with a tool.
2. Connect to **My pipeline** read-only - load the API key from its env var, or open the
   file/sheet. Never use a write endpoint; never send anything.
3. Pull the open/active deals (per **Pipeline rules**). Read-only.
4. For each deal, compute: is it **stale**? Is a **next step** missing? Is a **follow-up due**?
   Drop anything in a never-chase stage.
5. Rank per **Priority**.
6. For deals that need a nudge, write a **draft** follow-up message in the **Draft tone**,
   grounded only in what the data actually says (last contact, stage, notes). Never invent a
   date, amount, promise, or prior conversation.
7. Write the action list in the format below. Every item cites the deal (name / id / row).
8. Deliver per **Output**. Do not send the drafts and do not write to the CRM.

## Action list format

Example *shape* - the user's real deals replace the placeholders:

```markdown
# Pipeline Action List - YYYY-MM-DD

## Do today (ranked)
1. **Acme Corp — $24k — Proposal** · no contact in 12 days; proposal sent, no reply. · deal #4
   Suggested next step: nudge for a decision timeline.
   > Draft: Hi Sam — following up on the proposal from the 3rd. Are you still targeting a Q3
   > start? Happy to hop on a quick call this week to work through open questions. — {you}

## Missing a next step
- **Globex — $8k — Demo** · no next step set. · deal #11 — Suggested: book the follow-up demo.

## Looks healthy
- One line when the pipeline is in good shape / nothing is urgent. Don't manufacture work.
```

Aim for the handful that actually matter today - short enough to work in 15 minutes. An
honest "nothing urgent, pipeline looks healthy" is a valid action list.

## Output

- **Default: Markdown in chat.** When a gateway is connected (Telegram, Discord, Slack,
  email), "chat" means that gateway. Drafts are text for the user to copy and send - the
  skill never sends them. Only write files if the user asked.

## Feedback loop

After each action list, ask:

- Which items were worth acting on? Which were noise?
- Did the ranking match how you'd actually work the day?
- Are the drafts in your voice, or do they need editing?

Then **edit this skill** with the answers: source/fields → *My pipeline*; what's stale or
never-chased → *Pipeline rules*; ordering → *Priority*; message voice → *Draft tone*; layout
→ *Action list format*. Feedback in, skill edits out, next list sharper.

## Safety

- **Read-only, always.** The only credential this skill holds is read-only. Never call a
  write/update/delete endpoint, never send an email or message, never update the CRM.
- **Never invent.** No dates, amounts, contacts, or conversations that aren't in the data.
  Cite the deal for every item.
- **The user sends.** Drafts are suggestions. A human reviews and sends every message.
- Keep the API key in the secret store / env, never in this file, in chat, or in the output.

## Later

If no gateway was connected at Setup, schedule the list with Hermes cron once one is; deliver
it over Telegram / Discord / Slack / email. A supervised write-back (log the follow-up you
sent, draft a CRM note for human approval) is a *later* upgrade - only after the daily list is
something you trust, and only with a credential you deliberately grant for it.
