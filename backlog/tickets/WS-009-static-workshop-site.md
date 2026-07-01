# WS-009 - Static workshop site

## Status

MVP source implemented; build verification pending; full static site pending

## Priority

P1

## Goal

Turn the workshop repo into a static site so attendees can browse the guide, pre-work, examples, slides, and resources as a coherent website.

## Scope

- Pick a lightweight static site approach.
- Keep Markdown as the source of truth where possible.
- Create a landing page for the workshop.
- Add navigation for:
  - pre-work
  - workshop guide
  - agent idea library
  - prompts/examples
  - slides
  - instructor/presenter resources
- Make it easy to publish via GitHub Pages or similar.

## MVP completed

- Added VitePress as the static site tool.
- Added a public overview page at `docs/index.md`.
- Added optional pre-work setup at `docs/pre-work.md`.
- Added npm scripts for local dev, build, and preview.
- Added a GitHub Pages workflow.
- Added `docs/public/CNAME` for `hermes.arcadian.cloud`.
- Reused existing Hermes logo asset for the MVP visual identity.
- Local `npm install` verification is pending because this sandbox cannot resolve
  `registry.npmjs.org`.

## Recommended direction

Prefer a simple docs-site tool over a custom app. Candidates:

- VitePress
- Astro Starlight
- GitHub Pages/Jekyll

## Acceptance criteria

- [ ] Static site can be run locally. Source/scripts are in place; dependency install is pending.
- [x] Site has clear navigation.
- [x] Existing Markdown content is reused where practical.
- [x] Landing page includes event description and attendee path.
- [x] Build/publish instructions are documented.
- [x] Repo README points attendees to the site path once available.

## Final-state backlog

- Publish the full site at `hermes.arcadian.cloud`.
- Add pages for the full guide, prompts, agent idea library, real-world examples, slides, and presenter guide/resources.
- Polish Hermes branding and imagery beyond the MVP electric-blue/white treatment.
- Revisit provider/options research against current Hermes docs before promotion.
- Expand deploy documentation with exact GitHub Pages settings and DNS records.

## Notes

This is not just polish. A static site makes the workshop easier to advertise, easier to follow live, and less intimidating than a raw GitHub repo.
