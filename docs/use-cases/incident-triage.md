---
title: Incident Triage Agent
description: Turn raw monitoring alerts into clear on-call triage without letting the agent remediate.
pageClass: uc-page
audience: technical
tags:
  - alerts
  - webhooks
  - operations
  - setup-guide
difficulty: intermediate
safety: decision-support
guide_status: setup-guide
---

# Incident Triage Agent

Turn raw monitoring alerts into clear on-call triage without letting the agent remediate.

<div class="uc-meta" aria-label="Use case metadata">
  <div><span>Guide status</span><strong>setup-guide</strong></div>
  <div><span>Audience</span><strong>technical</strong></div>
  <div><span>Difficulty</span><strong>intermediate</strong></div>
  <div><span>Safety</span><strong>decision-support</strong></div>
</div>

## Who it helps

On-call engineers, founders running production, and teams with noisy monitoring.

## What it watches

Webhook JSON from Uptime Kuma, Grafana, Alertmanager, Sentry, status checks, or custom monitors.

## What it knows about you

Service names, ownership, severity rules, escalation paths, and safe first checks.

## What it produces

Severity, likely cause, 3 to 5 first checks, and a draft message for the human on-call.

## First safe version

Test with sample payloads first. Treat payloads as untrusted evidence, not instructions. Keep no-remediation in the prompt.

## Stretch version

Wire a Hermes webhook route beside the existing alert path and compare its triage against reality for a week.
