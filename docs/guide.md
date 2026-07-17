# Workshop Guide: Build Your First Daily Intelligence Agent

This is the setup path for the workshop. For full Hermes documentation, use the
official docs: <https://hermes-agent.nousresearch.com/docs>

## Success criteria

Core workshop target:

1) Hermes installed
2) One model/provider connected
3) Local CLI test works
4) Messaging Gateway connected (You can reach your agent on on Discord, Telegram, Slack, or Teams)
5) One use case bootstrapped for something you actually care about
6) Optional: Scheduled job kicking off your agent to do work for you

### Overview

```mermaid
flowchart LR
    K["1 · get an<br/>LLM key"] --> I["2 · install<br/>Hermes"] --> M["3 · configure provider<br/>and model"] --> T([test]) --> G["4 · connect<br/>gateway"] --> U["5 · build your<br/>first agent"]
```

## 1) LLM Inference - Get Your API Key Ready

Start by making sure you have one working LLM ready to power your agent.

::: details Free LLM Inference API Keys

### True-free path: NVIDIA Build

If you need a no-card, no-credit-card path, use NVIDIA Build:
<https://build.nvidia.com/models?filters=nimType%3Anim_type_preview&label=text-to-text>.


NVIDIA Build is the best true-free workshop path because it usually gives more room to experiment than OpenRouter's no-credit-card free tier. The tradeoff: NVIDIA's free limits are not guaranteed and can vary by model and traffic.

### Most reliable free-model path: OpenRouter with $10 credit

If you want the fewest surprises on free models, put **$10 of credit** on OpenRouter: <https://openrouter.ai/>.

That $10 is not about buying paid inference for the workshop. It unlocks OpenRouter's bumped free-model rate limit. Free models (`:free`) are capped by lifetime credits purchased:

- **Under $10 purchased:** 50 free-model requests per day (not enough for this 4 hour workshop)
- **$10+ purchased (lifetime):** 1,000 free-model requests per day

A single complex agent task can burn 5-20+ model requests, so the no-credit free tier is only a smoke test. The $10 unlock is what makes OpenRouter usable for a 4-hour workshop while still staying on free models. Free-model usage does not spend those credits.

:::

### Subscriptions You May Already Have that Work With Hermes

Run `hermes model` and pick the provider you already have. Current Hermes docs list these common subscription/OAuth-friendly paths:

- **ChatGPT/Codex:** choose OpenAI Codex. Uses ChatGPT/Codex OAuth. Good workshop path if your account has Codex.
- **GitHub Copilot paid plans:** choose GitHub Copilot. Uses OAuth/device-code flow, `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `gh auth token`.
- **Google/Gemini accounts:** choose Google Gemini OAuth. Browser PKCE login; docs note free-tier support. Gemini API keys also work.
- **Grok and X.com paid plans:** choose xAI Grok OAuth.
- **Qwen accounts:** choose Qwen OAuth. Browser PKCE login.
- **MiniMax accounts:** choose MiniMax OAuth. Browser PKCE login.
- **Nous Portal subscriptions:** choose Nous Portal, or run `hermes setup --portal` for one-shot OAuth setup.

See full list here: <https://hermes-agent.nousresearch.com/docs/integrations/providers>

If none of those applies, use NVIDIA Build for the true-free (no card) path, or OpenRouter with $10 credit to unlock the higher free-model rate limit.

### Local Open Weights models (not recommended during the session)

Local models are not recommended for this session. Do not spend workshop time fighting a local model, if you have at least 24GB of VRAM or unified memory on a mac it's worth a try later.

At time of writing, [Qwen 3.6](https://unsloth.ai/docs/models/qwen3.6) is the best choice for local model running an agent that fit on common consumer hardware (20GB RAM+, perferably VRAM or mac unified memory).



## 2) Install Hermes

Follow the Official Hermes install guide: <https://hermes-agent.nousresearch.com/docs/getting-started/installation>

Default command-line install path for Linux, macOS, and WSL2:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```


### 3) Setup Hermes

***Screen:* How would you like to set up Hermes?**

>  (○) Full setup — configure every provider, tool & option yourself (bring your own keys)

Choose **full setup**, the Nous Portal quick setup will require a credit card

***Screen:* Select provider:**

Choose the LLM API provider you decided in step 1. 

***Screen:* Select terminal backend:**

::: details Optional: Safer Terminal Backends

For the workshop, choosing the **local** terminal backend is fine. It is the
simplest path and keeps setup friction low. Just understand the tradeoff: local
means Hermes runs shell commands on the same machine and user account where you
started it.

If you want more isolation after the workshop, Hermes can run terminal commands
through other backends:

- **Docker backend:** commands run inside a container instead of directly on your
  host. This is a good next step for experimenting safely. Docker docs:
  <https://hermes-agent.nousresearch.com/docs/user-guide/docker>
- **SSH backend:** commands run on a separate machine or VM that you control.
  This is useful for homelab or production-health agents because you can keep
  Hermes away from your personal laptop. It also gives the agent a safe place to
  be root: on a disposable VM or tightly scoped server, you can let it install
  packages, restart services, inspect logs, and run commands more freely without
  giving it root on your daily machine.

SSH backend environment variables are documented here:
<https://hermes-agent.nousresearch.com/docs/reference/environment-variables#ssh-backend>

:::


***Screen:* Select terminal backend:**
> Local

***Screen:* Select platforms to configure:**
This screen is asking you to pick a chat platform to talk to your agent on.

Don't select any, click `enter` to skip setting up a chat platform. We will do this later.

***Screen:* Tools for 🖥️  CLI**
Defaults are fine, click `enter`

***Screen:* Choose a provider:**
Configure the web browser you want hermes to use

> local

***Screen:* Select Search Provider:**

Duckduckgo is the easiest, since it requires to API key. Others are better.

Firecrawl and Tavily are both excellent, if you choose to try either go setup a free tier account. Both are generous.  


## 4) Test Hermes works

Run a local CLI chat:

```bash
hermes --tui
```

Then write `hi, I am Bob. Who are you?` just to see if it responds.

### See What Your Agent Can Do

Check what tools and skills your agent has out of the box.

```bash
hermes tools list --platform cli

hermes skills list
```

## 4) Connect Hermes to Where You Work

Set up the gateway so Hermes can reach you on your messaging platform:

```bash
hermes gateway setup
```

Pick your platform - Discord, Telegram, Slack, Teams, or email - and follow the
wizard. Test by asking Hermes to send you a message.

Docs: <https://hermes-agent.nousresearch.com/docs/user-guide/messaging>

## 5) Choose Your Use Case

The default path is the **Daily Intelligence Agent**. If you are unsure, choose
that one. It works on any laptop, does not require production access, and matches
the main workshop promise: make Hermes read the stuff you already read every
morning, cross-reference it against your world, and bubble up what matters.

### Pick your path

Choose one use case to build next. If you are unsure, start with the default path.

<div class="path-choice-grid" aria-label="Workshop path choices">
  <a class="path-choice-card path-choice-card--default" href="/use-cases/daily-intelligence-agent">
    <span class="path-choice-badge">Default path</span>
    <strong>Daily Intelligence Agent</strong>
    <em>Morning reports over the sources you already check, ranked by what matters to you.</em>
  </a>
  <a class="path-choice-card" href="/use-cases/homelab-health">
    <span class="path-choice-badge">Technical</span>
    <strong>Homelab / Production Health</strong>
    <em>Read-only triage of disk, services, logs, containers, and backups.</em>
  </a>
  <a class="path-choice-card" href="/use-cases/alert-triage">
    <span class="path-choice-badge">On-call</span>
    <strong>Incident Triage Agent</strong>
    <em>Turn monitoring webhooks into clear human triage summaries.</em>
  </a>
  <a class="path-choice-card" href="/use-cases/chatops-data">
    <span class="path-choice-badge">Data</span>
    <strong>ChatOps Over Your Data</strong>
    <em>Ask plain-language questions over CSVs, SQLite, logs, and docs.</em>
  </a>
</div>

::: details Chat Gateway setup

Optional command for QR code to make telegram setup easier
```bash
uv pip install --python ~/.hermes/hermes-agent/venv/bin/python qrcode
```

Setup your chat gateway
```bash
hermes gateway setup
```
:::


## References

- [Hermes docs](https://hermes-agent.nousresearch.com/docs)
- [Hermes overview on X](https://x.com/i/status/2066885278451519590)


