---
title: Pre-work Setup
pageClass: pw-page
---

<p class="pw-eyebrow">Before the workshop · Optional</p>

# Pre-work Setup

<p class="pw-lead">Do this before the workshop if you can. It is not mandatory - but every minute you spend here turns into more custom build time during the session.</p>

<dl class="pw-meta">
  <div><dt>Time</dt><dd>45–75 min first time. Less if you already have a model key ready.</dd></div>
  <div><dt>Status</dt><dd>Optional, but worth it.</dd></div>
</dl>

<div class="pw-source">
  <p class="pw-source-label">Source of truth</p>
  <p>The <a href="https://hermes-agent.nousresearch.com/docs">official Hermes docs</a> - trust them over this page.</p>
</div>

<div class="pw-fastpath">
  <p class="pw-fastpath-title">The fast path</p>
  <ol>
    <li><span>Install Hermes</span><code>curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash</code></li>
    <li><span>Pick &amp; configure a model</span><code>hermes model</code></li>
    <li><span>Smoke-test the CLI</span><code>hermes --tui</code></li>
    <li><span>Confirm it works</span><code>hermes --version</code></li>
  </ol>
  <p class="pw-fastpath-note">Already have Hermes and a model configured? You're set - skim <a href="#safety-first">Safety first</a> and go. Otherwise, the sections below walk through each step.</p>
</div>

## Safety first

<div class="pw-callout">

- Do not paste API keys, bot tokens, passwords, or private credentials into prompts.
- Do not commit `.env`, `.hermes/`, bot tokens, API keys, or local machine state.
- Start with read-only access for real systems.
- Give Hermes the least privilege needed for the thing you are building.

</div>

## 1. Choose a Model Path (10-15 min)

Pick one path now so the workshop setup does not stall on provider decisions. Provider support changes often, so treat the interactive picker as the current source of truth:

```bash
hermes model
```

### Recommended

**OpenAI Codex through ChatGPT/Codex** if you already have access. In `hermes model`, choose the OpenAI Codex provider and complete the login flow.

### Good fallback

**OpenRouter with a free-tier model** is good enough for workshop setup and a first smoke test. Free-tier usage can be limited and may have privacy/training tradeoffs, so avoid sensitive data.

### Other viable paths

Also fine if you already have the account, subscription, or key ready: Nous Portal, GitHub Copilot, Anthropic / Claude, Google Gemini, Qwen OAuth, xAI Grok OAuth, or the OpenAI API.

### Advanced / local

Local models, LM Studio, and OpenAI-compatible custom endpoints work well too. Debug them before the workshop, not during it - choose this path only if you are comfortable troubleshooting local model servers.

## 2. Install Hermes (10-20 min)

Official install guide: [Installation](https://hermes-agent.nousresearch.com/docs/getting-started/installation)

Default Linux, macOS, and WSL2 install path:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Reload your shell if prompted, then confirm Hermes is available:

```bash
hermes --version
```

## 3. Configure Your Model (5-15 min)

Run the model picker:

```bash
hermes model
```

Choose the provider you prepared in step 1. If you do not have a paid subscription ready, use OpenRouter with a free-tier model so you can keep moving.

## 4. Smoke Test the CLI (5-10 min)

Start Hermes locally:

```bash
hermes --tui
```

Ask something simple, then inspect the available tools and skills:

```bash
hermes tools list --platform cli
hermes skills list
```

If those commands work, you are ready for the main workshop.

## 5. Optional: Docker Backend (10-20 min)

For the workshop, the local terminal backend is the lowest-friction path. If you want more isolation, set up the Docker backend ahead of time so Hermes commands run in a container instead of directly on your host.

Docs: [Docker backend](https://hermes-agent.nousresearch.com/docs/user-guide/docker)

This is optional. Do not burn workshop time debugging Docker unless you specifically want that isolation.

## 6. Optional: Telegram Gateway (10-20 min)

Telegram is a good live workshop gateway because setup is fast and the feedback loop feels real. If you want to prepare it early, create your bot token before the session, then run:

```bash
hermes gateway setup
```

Docs:

- [Messaging overview](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)
- [Telegram setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)

Keep the token private. Treat bot tokens like API keys.

## Troubleshooting

- Run the built-in health check:

```bash
hermes doctor
```

- Re-run the model picker if authentication, provider selection, or model choice looks wrong:

```bash
hermes model
```

- Check the official docs first: [Hermes documentation](https://hermes-agent.nousresearch.com/docs).
- Bring the exact error message, your operating system, and the command you ran to the workshop. Do not share private keys or tokens.

## Ready checklist

<p class="pw-check-label">Required</p>
<ul class="pw-check">
  <li>Hermes installed</li>
  <li>One provider / model configured</li>
  <li><code>hermes --version</code> works</li>
  <li><code>hermes --tui</code> answers a simple prompt</li>
</ul>

<p class="pw-check-label">Helpful but optional</p>
<ul class="pw-check pw-check--optional">
  <li>Docker backend tested, if you want container isolation</li>
  <li>Telegram bot token created and gateway tested, if you want live messaging</li>
  <li><code>hermes doctor</code> output reviewed, if anything feels off</li>
</ul>
