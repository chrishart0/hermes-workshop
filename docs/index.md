---
layout: page
pageClass: hw-page
sidebar: false
aside: false
navbar: true
footer: true
title: Hermes Agent Workshop
description: A hands-on, 4-hour workshop to build your first useful AI agent with Hermes.
---

<div class="hw">

<section class="hw-hero">
  <div class="hw-hero-inner">
    <div class="hw-hero-copy">
      <p class="hw-eyebrow">Hands-on workshop · Open source · MIT</p>
      <h1 class="hw-title">Build your first<br><em>useful</em> agent.</h1>
      <p class="hw-lead">
        A 4-hour, hands-on Hermes Agent workshop. Install Hermes, connect a model,
        and walk out with a Daily Intelligence Agent that reads the sources you care
        about, reasons over them, and reports straight to your chat.
      </p>
      <div class="hw-actions">
        <a class="hw-btn hw-btn-solid" href="/pre-work">Start the pre-work</a>
        <a class="hw-btn hw-btn-ghost" href="#agenda">See the 4-hour agenda</a>
      </div>
      <div class="hw-terminal">
        <span class="hw-terminal-label">Step one - install hermes</span>
        <code>curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash</code>
      </div>
    </div>
    <figure class="hw-hero-art" aria-hidden="true">
      <span class="hw-hero-plate">
        <img src="/assets/hermes-official/hero-light.webp" alt="Classical engraving of Hermes in radiant line art" loading="eager" />
      </span>
      <figcaption class="hw-hero-cap">Hermes - classical engraving · Nous Research</figcaption>
    </figure>
  </div>
</section>

<section class="hw-trust" aria-label="Workshop at a glance">
  <ul class="hw-trust-list">
    <li>Christian's third Hermes workshop</li>
    <li>Hands-on - you build, we help</li>
    <li>You leave with a working agent</li>
  </ul>
</section>

<section class="hw-section hw-section--white">
  <div class="hw-wrap">
    <div class="hw-section-head">
      <div class="hw-section-head-title">
        <p class="hw-kicker">What you'll leave with</p>
        <h2 class="hw-h2">A real agent that reads, reasons, and reports - not another demo.</h2>
      </div>
      <p class="hw-body">
        By the last hour you'll have Hermes installed, a model connected, a local smoke
        test passing, and one agent skill built for a real job in your world. The shared
        baseline is a <strong>Daily Intelligence Agent</strong>: it watches your sources,
        cross-references them against your context, and sends back only what matters.
      </p>
    </div>
    <ol class="hw-flow">
      <li>
        <span class="hw-flow-n">01</span>
        <h3>Install Hermes</h3>
        <p>Get the open-source, CLI-first agent running on your machine.</p>
      </li>
      <li>
        <span class="hw-flow-n">02</span>
        <h3>Connect a model</h3>
        <p>Wire in a provider or a local model and smoke-test the loop.</p>
      </li>
      <li>
        <span class="hw-flow-n">03</span>
        <h3>Build the agent</h3>
        <p>Bootstrap a skill that gathers, reasons, and summarizes.</p>
      </li>
      <li>
        <span class="hw-flow-n">04</span>
        <h3>Deliver to chat</h3>
        <p>Ship results to Telegram, Discord, Slack, or Teams.</p>
      </li>
    </ol>
  </div>
</section>

<section class="hw-section hw-section--paper" id="build">
  <div class="hw-wrap">
    <div class="hw-section-head">
      <div class="hw-section-head-title">
        <p class="hw-kicker">What you might build</p>
        <h2 class="hw-h2">Point Hermes at a job you actually have.</h2>
      </div>
      <p class="hw-body">Pick one of these in the custom build lab and adapt the pattern to your own data and workflow - or bring your own idea.</p>
    </div>
    <div class="hw-cards">
      <article class="hw-card">
        <span class="hw-card-n">Daily intelligence</span>
        <p>A morning briefing over news, releases, CVEs, newsletters, events, or metrics - filtered to what's relevant to you.</p>
      </article>
      <article class="hw-card">
        <span class="hw-card-n">Homelab &amp; ops health</span>
        <p>A watch agent that summarizes services, logs, disk, memory, and container status into a plain-language status post.</p>
      </article>
      <article class="hw-card">
        <span class="hw-card-n">Incident triage</span>
        <p>Turn raw alerts and webhook payloads into a human-readable summary with likely causes and next steps.</p>
      </article>
      <article class="hw-card">
        <span class="hw-card-n">Release &amp; CVE watch</span>
        <p>Track the tools, dependencies, and advisories you rely on, and get pinged only when something changes.</p>
      </article>
      <article class="hw-card">
        <span class="hw-card-n">ChatOps over local data</span>
        <p>Ask questions against approved local docs, CSV files, SQLite databases, and logs - answered where your team works.</p>
      </article>
      <article class="hw-card hw-card--accent">
        <span class="hw-card-n">Your own workflow</span>
        <p>Bring a repetitive task from your week. In the build lab we'll help you shape it into an agent that runs it for you.</p>
      </article>
    </div>
  </div>
</section>

<section class="hw-section hw-section--white" id="agenda">
  <div class="hw-wrap">
    <div class="hw-section-head">
      <div class="hw-section-head-title">
        <p class="hw-kicker">The day</p>
        <h2 class="hw-h2">Four hours, one working agent.</h2>
      </div>
      <p class="hw-body">Optional pre-work, then five focused phases. Every phase ends with something running, and the longest block is yours to build.</p>
    </div>
    <ol class="hw-timeline">
      <li class="hw-slot">
        <div class="hw-slot-time">Pre-work<span>async</span></div>
        <div class="hw-slot-body">
          <h3>Get set up before you arrive</h3>
          <p>Install Hermes, choose a model path, and optionally prep Docker or a Telegram bot. Optional, but it buys you build time. <a href="/pre-work">Open the checklist →</a></p>
        </div>
      </li>
      <li class="hw-slot">
        <div class="hw-slot-time">Phase 1<span>45–60m</span></div>
        <div class="hw-slot-body">
          <h3>The art of the possible</h3>
          <p>See what practical agents can do today, then choose a useful idea worth building.</p>
        </div>
      </li>
      <li class="hw-slot">
        <div class="hw-slot-time">Phase 2<span>30–45m</span></div>
        <div class="hw-slot-body">
          <h3>Hermes setup</h3>
          <p>Configure Hermes, connect a provider, smoke-test the CLI, and set up a delivery target.</p>
        </div>
      </li>
      <li class="hw-slot">
        <div class="hw-slot-time">Phase 3<span>45–60m</span></div>
        <div class="hw-slot-body">
          <h3>Daily Intelligence Agent</h3>
          <p>Build the shared baseline agent together, end to end, and watch it report back.</p>
        </div>
      </li>
      <li class="hw-slot">
        <div class="hw-slot-time">Phase 4<span>75–90m</span></div>
        <div class="hw-slot-body">
          <h3>Custom build lab</h3>
          <p>Adapt the pattern to your own project, data, or workflow with help on hand.</p>
        </div>
      </li>
      <li class="hw-slot">
        <div class="hw-slot-time">Phase 5<span>30m</span></div>
        <div class="hw-slot-body">
          <h3>Demos, voting &amp; prize</h3>
          <p>Show rough-but-real agents, vote on favorites, and hand out the prize.</p>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="hw-cta">
  <div class="hw-wrap">
    <p class="hw-eyebrow hw-eyebrow--light">Bring a friend</p>
    <h2 class="hw-cta-title">Pairs ship faster. Grab someone with a workflow worth automating.</h2>
    <p class="hw-cta-lead">
      Two people split the setup friction and usually land a better idea once the build
      lab opens. Come with Hermes installed and a chat target ready, and spend the day building.
    </p>
    <div class="hw-actions">
      <a class="hw-btn hw-btn-solid" href="/pre-work">Start the pre-work</a>
      <a class="hw-btn hw-btn-ghost hw-btn-ghost--light" href="https://github.com/chrishart0/linuxfest-hermes-workshop">Workshop guide</a>
    </div>
    <nav class="hw-links" aria-label="Official Hermes links">
      <a href="https://hermes-agent.nousresearch.com/docs">Hermes Docs</a>
      <a href="https://github.com/NousResearch/hermes-agent">Hermes on GitHub</a>
      <a href="https://nousresearch.com">Nous Research</a>
      <a href="https://x.com/NousResearch">@NousResearch</a>
    </nav>
  </div>
</section>

</div>
