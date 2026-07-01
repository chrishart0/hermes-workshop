---
title: Pre-work Setup
pageClass: pw-page
---

<p class="pw-eyebrow">Before the workshop · Optional</p>

# Pre-work Setup

<p class="pw-lead">Do this before the workshop if you can. It is not mandatory - but every minute you spend here turns into more custom build time during the session.</p>

<dl class="pw-meta">
  <div><dt>Time</dt><dd>20-40 minutes</dd></div>
  <div><dt>Status</dt><dd>Optional, but worth it.</dd></div>
</dl>

<div class="pw-source">
  <p class="pw-source-label">Source of truth</p>
  <p>The <a href="https://hermes-agent.nousresearch.com/docs">official Hermes docs</a> - trust them over this page.</p>
</div>


## 1. Install Hermes

Official install guide: [Installation](https://hermes-agent.nousresearch.com/docs/getting-started/installation)

Default Linux, macOS, and WSL2 install path:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Windows (native)

```ps1
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

## 2. Configure Your Model

Start by making sure you have one working LLM path ready to power your agent.

### Easiest path if you do not already have a subscription: OpenRouter

OpenRouter usually has free model endpoints available:
<https://openrouter.ai/collections/free-models>.

As of *June 2026*, DeepSeek V4 Pro and NVIDIA Nemotron 3 Ultra (free) are good OpenRouter models to try for this workshop.


### Subscriptions You May Already Have that Work With Hermes

- **ChatGPT ($20 and up plans):** choose OpenAI Codex. Uses
  ChatGPT/Codex OAuth. Good workshop path if your account has Codex.
- **GitHub Copilot paid plans:** choose GitHub Copilot. Uses OAuth/device-code
  flow, `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `gh auth token`.
- **Claude Max plans ($100 and up plans):** choose Anthropic.
- **Google/Gemini accounts:** choose Google Gemini OAuth. Browser PKCE login;
  docs note free-tier support. Gemini API keys also work.
- **Grok paid plans:** choose xAI Grok OAuth.

Run the model picker:

```bash
hermes model
```

## 3. Test the CLI

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

## 4. Optional: Docker Backend (10-20 min)

The default local terminal backend is the lowest-friction path. 

If you want more security and NOT to let hermes access your file system, set up the Docker backend ahead of time so Hermes commands run in a container instead of directly on your host.

Docs: [Docker backend](https://hermes-agent.nousresearch.com/docs/user-guide/docker)

This is optional. Do not burn workshop time debugging Docker unless you specifically want that isolation.

## 5. Optional: Telegram Gateway (5 minutes)

Telegram is a good first choice for Hermes messaging gateway because the setup is so simple. Making your account and connecting hermes takes 5 minutes. Just intall the desktop app, setup an account, then run:

```bash
hermes gateway setup
```

Docs:

- [Messaging overview](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)
- [Telegram setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)

