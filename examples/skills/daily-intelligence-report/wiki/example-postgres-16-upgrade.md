---
type: thread
status: open
event_date:
surface_until: 2026-07-20
last_seen: 2026-07-17
---

# Postgres 16.4 upgrade decision

**What it is:** an out-of-band PostgreSQL release (CVE-2026-1042, auth bypass) that
affects the version running on the app box.

**Why it matters to me:** production runs Postgres 16, reachable from the API subnet -
the exact exposure the advisory calls out. Patching is time-sensitive.

**Log:**

- 2026-07-17 - CVE-2026-1042 published; 16.4 fixes it. Ran as today's #1 signal.
  Decision pending: patch before Thursday's deploy. Keep surfacing until resolved, so it
  isn't missed on a day I don't read the report.

<!-- Link related pages inline as [[slug]]. Flip status to `resolved` once patched, or
     `dormant` if it stops mattering, and drop it from index.md's Open threads. -->
