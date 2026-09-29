# Design system

The rules this site is built on. Read this before changing the UI, and keep
new work consistent with it. Tokens live in `src/index.css`, copy lives in
`src/content.ts`.

## Direction

A developer portfolio for recruiters and engineers. Clean, calm and
content-first: typography and spacing do the work, colour is rare, motion is
limited to direct feedback on interaction.

## Colour

One neutral family (slightly green-tinted) and one accent, the brand green.
Every colour comes from a CSS variable, so both themes stay in sync.

| Token          | Light     | Dark      | Use                              |
| -------------- | --------- | --------- | -------------------------------- |
| `bg`           | `#f6f7f6` | `#0f1211` | Page background                  |
| `surface`      | `#fcfdfc` | `#151917` | Cards, raised controls           |
| `fg`           | `#141815` | `#e9edea` | Headings, primary text           |
| `fg-muted`     | `#4a544d` | `#b3bcb6` | Body copy                        |
| `fg-subtle`    | `#5f6a63` | `#97a19a` | Labels, dates, captions          |
| `line`         | `#dde2de` | `#262c29` | Dividers, card borders           |
| `line-strong`  | `#c3cbc5` | `#37403b` | Control borders, hover borders   |
| `accent`       | `#385144` | `#c2d8c4` | Primary buttons, current markers |
| `accent-hover` | `#2a3e34` | `#d6e6d7` | Primary button hover             |

- All text passes WCAG AA (4.5:1) on `bg` and `surface` in both themes.
- The theme follows the OS by default; the footer switch can force light or
  dark. The page never mixes themes between sections.

## Typography

- **Geist** for everything, **Geist Mono** for dates, labels and tags. Both
  are self-hosted (no font CDN).
- Headings: semibold, tight tracking, `text-wrap: balance`.
- Body: 16-20px, line-height 1.6, max width around 65 characters.
- Sentence case everywhere. No all-caps labels above headings.

## Shape and spacing

- Radius: controls `rounded-lg` (8px), containers `rounded-xl` (12px), tags
  `rounded-md` (6px). Nothing else.
- Sections share one frame (`Section` in `src/components/ui.tsx`): heading
  column on the left from `lg`, content on the right, `py-20` / `lg:py-28`.
- Container: `max-w-6xl`, `px-5` / `sm:px-8`.
- Layers: header `z-20`, skip link `z-30`. The menu popover and the media
  viewer use the browser's top layer, so they need no z-index.

## Interaction

- Hover and focus always increase contrast (darker border, stronger text).
  Nothing fades out on hover.
- Press feedback: `active:translate-y-px`.
- Every interactive element has a visible `:focus-visible` outline.
- Transitions list their properties (`transition-colors`), never `all`.
- Motion respects `prefers-reduced-motion`.

## Things this site does not do

These read as generic or AI-generated. Avoid them:

- Purple-to-blue gradients, gradient text, grain over gradients, glows.
- Glassmorphism, blurred blobs, cursor-following effects.
- Emojis in headings or content. Em or en dashes in visible text (the build
  fails if one appears; use a hyphen, comma or full stop).
- A badge or eyebrow label above the headline, or above every section.
- Colored left-border cards, three identical icon boxes in a row.
- Sections that fade or slide in on scroll.
- Serif italics for accent words; Inter, Space Grotesk or Instrument Serif.
- Generic icon sets used untouched. Icons here are Phosphor, inlined in
  `src/components/icons.tsx`.
- Buzzword copy. Say what was built, with what, and what it did.

## Security constraints that affect the UI

- No inline `style` attributes (blocked by the Content Security Policy, and
  by lint). Use Tailwind classes or CSS variables.
- No `dangerouslySetInnerHTML` or `innerHTML` (blocked by Trusted Types).
- No third-party requests from the page: no CDNs, embeds, analytics or web
  fonts. Everything is served from the site's own origin.
- Photos must have their EXIF/GPS metadata stripped before they are added.
