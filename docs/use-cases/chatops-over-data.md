---
title: ChatOps Over Your Data
description: Ask plain-language questions over local CSVs, SQLite databases, logs, and docs.
pageClass: uc-page
audience: professional
tags:
  - data
  - chatops
  - local-files
  - setup-guide
difficulty: intermediate
safety: read-only
guide_status: setup-guide
---

# ChatOps Over Your Data

Ask plain-language questions over local CSVs, SQLite databases, logs, and docs.

<div class="uc-meta" aria-label="Use case metadata">
  <div><span>Guide status</span><strong>setup-guide</strong></div>
  <div><span>Audience</span><strong>professional</strong></div>
  <div><span>Difficulty</span><strong>intermediate</strong></div>
  <div><span>Safety</span><strong>read-only</strong></div>
</div>

## Who it helps

People who repeatedly hand-write SQL, grep logs, or scroll exports to answer simple questions.

## What it watches

CSV files, SQLite databases, markdown docs, log files, and exported reports.

## What it knows about you

Definitions like revenue, active user, refund, error, region, or any business-specific terms.

## What it produces

A plain-language answer with the exact query or files used.

## First safe version

Point Hermes at one dataset, require read-only queries, require it to show its work, and ask real questions.

## Stretch version

Add a daily digest that flags yesterday against the trailing average.
