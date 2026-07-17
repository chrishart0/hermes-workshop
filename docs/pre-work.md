---
title: Pre-work Setup
pageClass: pw-page
---

<p class="pw-eyebrow">Before the workshop · Optional</p>

# Pre-work Setup

<p class="pw-lead">This is optional, but recommended. If you can get Hermes installed and a model connected before you arrive, you will have more time to build your own agent during the workshop.</p>

<dl class="pw-meta">
  <div><dt>Time</dt><dd>20-40 minutes</dd></div>
  <div><dt>Status</dt><dd>Optional, but worth it.</dd></div>
</dl>

<div class="pw-source">
  <p class="pw-source-label">Official docs</p>
  <p>Use the <a href="https://hermes-agent.nousresearch.com/docs">official Hermes docs</a> if anything here has changed.</p>
</div>


## 1. Install Hermes

Official install guide: [Hermes Installation Guide](https://hermes-agent.nousresearch.com/docs/getting-started/installation)

Default Linux, macOS, and WSL2 install path:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Windows (native)

```ps1
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

## 2. Configure Your Model

Start by making sure you have one working model path ready to power your agent.

### True-free path if you do not already have a subscription: NVIDIA Build

If you need a no-card path, create an NVIDIA Build API key:
<https://build.nvidia.com/models>.

Use it with Hermes as an OpenAI-compatible custom endpoint:

```text
Base URL: https://integrate.api.nvidia.com/v1
Model: nvidia/nemotron-3-ultra-550b-a55b
```

NVIDIA Build is the recommended true-free workshop path. Its free limits are not
guaranteed, but it is usually a better no-card fit than OpenRouter's true-free
tier for live experimentation.

### Most reliable free-model path: OpenRouter with $10 credit

If you want the fewest surprises on free models, put **$10 of credit** on OpenRouter: <https://openrouter.ai/>.

That $10 is not about buying paid inference for the workshop. It unlocks OpenRouter's bumped free-model rate limit. Free models (`:free`) are capped by lifetime credits purchased:

- **Under $10 purchased:** 50 free-model requests per day
- **$10+ purchased (lifetime):** 1,000 free-model requests per day

A single complex agent task can burn 5-20+ model requests, so the no-credit free tier is only a smoke test. The $10 unlock is what makes OpenRouter usable for a 4-hour workshop while still staying on free models. Free-model usage does not spend those credits.


### Subscriptions You May Already Have that Work With Hermes

- **ChatGPT ($20 and up plans):** choose OpenAI Codex. Uses
  ChatGPT/Codex OAuth. Good workshop path if your account has Codex.
- **GitHub Copilot paid plans:** choose GitHub Copilot. Uses an OAuth/device-code flow.
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

## 4. Optional advanced setup: Docker Backend (10-20 min)

The default local terminal backend is the lowest-friction path.

If you would rather not give Hermes direct access to your file system, set up the Docker backend ahead of time so commands run in a container instead of on your host.

Docs: [Docker backend](https://hermes-agent.nousresearch.com/docs/user-guide/docker)

This is optional. Skip it unless you specifically want more isolation.

## 5. Optional: Telegram Gateway (5 minutes)

Telegram is a good first gateway because the setup is simple: about 5 minutes from new account to connected. Install the desktop app, create an account, then run:

```bash
hermes gateway setup
```

Docs:

- [Messaging overview](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)
- [Telegram setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)

