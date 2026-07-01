# Flyer Production Design Briefs - Official Hermes Assets Only

These are production briefs for rendered flyer variants. Do **not** use AI-generated imagery. Use only official Hermes assets scraped from the Hermes site plus the event/logos/QR assets in this repo.

## Shared event facts

- Host line: **AI Collective, Chattanooga presents**
- Event: **Hermes Agent hands-on workshop**
- Date: **Saturday, July 18**
- Time: **1:00 PM – 5:00 PM EDT**
- Venue: **Business Development Center**
- Address: **100 Cherokee Blvd., Chattanooga**
- Registration: **https://luma.com/aic-ch-7-18**
- Utility line: **Food included. Bring a laptop.**

## Shared assets

Official Hermes site assets:

- `docs/public/assets/hermes-official/hero-art.webp`
- `docs/public/assets/hermes-official/feature-connect.webp`
- `docs/public/assets/hermes-official/feature-memory.webp`
- `docs/public/assets/hermes-official/feature-automation.webp`
- `docs/public/assets/hermes-official/feature-tasks.webp`
- `docs/public/assets/hermes-official/feature-browse.webp`
- `docs/public/assets/hermes-official/feature-sandbox.webp`
- `docs/public/assets/hermes-official/badge.webp`
- `docs/public/assets/hermes-official/platform-art-linux.webp`
- `docs/public/assets/hermes-official/platform-art-mac.webp`
- `docs/public/assets/hermes-official/platform-art-windows.webp`
- `docs/public/assets/hermes-official/portal-figure.webp`
- `docs/public/assets/hermes-official/nous.webp`

Workshop assets:

- QR PNG: `docs/public/assets/flyer/luma-aic-ch-7-18-qr.png`
- QR SVG: `docs/public/assets/flyer/luma-aic-ch-7-18-qr.svg`
- AI Collective logo: `docs/public/assets/flyer/ai-collective-logo.png`
- Hermes logo: `docs/public/assets/hermes-logo.jpeg`

## Shared style rules

- Use Hermes landing-page aesthetic: bright electric blue, white, black, official blue/white image language.
- Prefer official images as-is; do not recolor destructively unless converting for contrast/print readability.
- Use a high-contrast serif headline: Playfair Display / Bodoni-like / Didot-like / Georgia fallback.
- Use a clean sans for event details: Inter / system sans fallback.
- Keep QR code inside a white card with quiet margin.
- Keep AIC and Hermes logos in a calm bottom strip/card if the AIC orange clashes with blue.
- Do not add robot imagery, generated mythology art, generic circuit-board backgrounds, or neon SaaS gradients.
- Render both:
  - US Letter portrait: `docs/public/flyers/<variant>.html` and `docs/public/flyers/<variant>.png`
  - Social square if feasible: `docs/public/flyers/<variant>-square.png`
- Each making agent must run a review/refine loop: render → inspect screenshot visually → revise CSS/layout → render again. Minimum 2 visual review passes unless the first render is obviously broken and needs more.

---

# Variant A - Hero Poster

## Goal

The bold public flyer. It should stop someone on a coffee-shop wall.

## Headline

**MAKE HERMES READ
THE BORING STUFF**

## Subhead

Build your first useful AI agent with Hermes.

## Body copy

Install Hermes, connect a model, wire up messaging, and bootstrap an agent that filters information for what actually matters.

## Visual assets

Primary: `hero-art.webp`

Use the official Hermes hero art as the dominant right-side visual. Crop it large, dramatic, and monumental. Keep the left column clean for text. If the source is blue-on-transparent/black, let the page background remain Hermes blue or deep black depending on which creates better contrast. The final should still feel unmistakably Hermes.

## Layout

- US Letter portrait.
- Left column: host line, giant headline, subhead/body.
- Right/center: large official hero art, cropped so Hermes feels huge.
- Lower left: date/time/location block.
- Bottom left: QR card and registration URL.
- Bottom right: AIC + Hermes logo lockup.

## Review priorities

1. Headline readable from 6–10 feet.
2. Event block not buried.
3. Hero art dramatic but not competing with QR/details.
4. QR scans visually unobstructed.

---

# Variant B - Build Path / Feature Cards

## Goal

The practical, broad-appeal flyer. It should say: “This is hands-on and you will build something.”

## Headline

**BUILD YOUR FIRST
USEFUL AI AGENT**

## Subhead

A hands-on Hermes workshop for people who want AI to actually do useful work.

## Body copy

In one afternoon: install Hermes, connect a model, set up messaging, and start a personal agent you can keep improving.

## Visual assets

Primary: official feature assets:

- `feature-connect.webp`
- `feature-memory.webp`
- `feature-automation.webp`
- `feature-tasks.webp`

Optional supporting: `badge.webp`

## Layout

- US Letter portrait.
- Strong top headline on blue/white.
- Middle: four feature cards in a 2×2 grid or vertical stack, using cropped official feature art with short labels:
  - Connect
  - Remember
  - Schedule
  - Delegate
- Lower: event details + food/laptop line.
- Bottom: QR + logos.

## Review priorities

1. Does it look like a workshop, not a software brochure?
2. Are the four steps legible and not too visually busy?
3. Does the QR/logos area feel clean?
4. Is the flyer still high-contrast in a grayscale print test?

---

# Variant C - Agent Lab / Platform Poster

## Goal

The technical builder flyer. It should feel like an invitation into a lab: CLI-first, local, practical, open-source.

## Headline

**THE HERMES
AGENT LAB**

## Subhead

Build a local, tool-using AI agent that does more than chat.

## Body copy

A four-hour hands-on session covering Hermes setup, model connection, gateway messaging, and your first working agent skill.

## Visual assets

Primary choices:

- `platform-art-linux.webp`
- `platform-art-mac.webp`
- `platform-art-windows.webp`
- `portal-figure.webp`
- `feature-browse.webp`
- `feature-sandbox.webp`

This variant should use more product/platform imagery than mythic hero imagery. It should feel credible to developers while still staying beautiful.

## Layout

- US Letter portrait.
- Top: host line + lab headline.
- Center: large platform/product collage or one dominant platform image framed like a poster/card.
- Add a small “What you’ll build” list:
  - Hermes installed and smoke-tested
  - Gateway connected
  - One useful agent skill bootstrapped
- Lower: event details.
- Bottom: QR + logos.

## Review priorities

1. Does it look technical and hands-on, not vague AI inspiration?
2. Is the product/platform imagery clean and recognizable?
3. Does the “what you’ll build” list remain short and readable?
4. Does the composition avoid clutter?
