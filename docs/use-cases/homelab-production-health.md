---
title: Homelab or Production Health Agent
description: Inspect systems, services, logs, containers, and backups, then report what needs attention.
pageClass: uc-page
audience: technical
tags:
  - sysadmin
  - operations
  - monitoring
  - setup-guide
difficulty: intermediate
safety: read-only
guide_status: setup-guide
---

# Homelab or Production Health Agent

Inspect systems, services, logs, containers, and backups, then report what needs attention.

<div class="uc-meta" aria-label="Use case metadata">
  <div><span>Guide status</span><strong>setup-guide</strong></div>
  <div><span>Audience</span><strong>technical</strong></div>
  <div><span>Difficulty</span><strong>intermediate</strong></div>
  <div><span>Safety</span><strong>read-only</strong></div>
</div>

## Who it helps

Homelab owners, sysadmins, developers, and operators responsible for machines or services.

## What it watches

Disk usage, failed services, recent logs, containers, backup status, health endpoints, and dashboards.

## What it knows about you

Expected services, normal thresholds, known noisy logs, recent deploys, and critical hosts.

## What it produces

A triage report with urgent issues first, or one calm line when everything is healthy.

## First safe version

Point Hermes at read-only checks, define thresholds, forbid writes and restarts, then run it interactively until the output is useful.

## Stretch version

Schedule it hourly and deliver only when something needs attention.
