# Design system

The rules this site is built on. Read this before changing the UI, and keep
new work consistent with it. Tokens live in `src/index.css`, copy lives in
`src/content.ts`, and all styling is Tailwind utility classes.

This system is adapted from the
[OpenCode design analysis](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/opencode.ai)
in VoltAgent's awesome-design-md (MIT, see [Credits](#credits)). Changes from
the source: the brand green replaces Apple Blue as the one colour, JetBrains
Mono replaces the commercial Berkeley Mono, there is a dark theme, and photos
and a few icons are allowed because a portfolio is about a person and
needs clear controls.

## Direction

The page reads like a man page or a README: one monospaced face, a cream
canvas, near-black ink, hairline rules between blocks and ASCII bracket
markers for list bullets. There is exactly one raised surface, the
terminal card at the top of the page (light in light mode, dark in dark
mode), which holds the name, the intro and the
portrait. Everything else is flat.

## Colour

| Token             | Light                | Dark                    | Use                                  |
| ----------------- | -------------------- | ----------------------- | ------------------------------------ |
| `canvas`          | `#fdfcfc`            | `#141212`               | Page background (the only one)       |
| `surface-soft`    | `#f8f7f7`            | `#1b1919`               | Row hover                            |
| `surface-card`    | `#f1eeee`            | `#242121`               | Command snippet, button hover        |
| `ink`             | `#201d1d`            | `#f1eeee`               | Headings, labels, primary button     |
| `ink-deep`        | `#0f0000`            | `#ffffff`               | Primary button hover                 |
| `body`            | `#424245`            | `#cbc7c7`               | Paragraph text                       |
| `mute`            | `#5f5c5c`            | `#a4a0a0`               | Dates, captions, secondary text      |
| `hairline`        | `rgb(15 0 0 / 0.12)` | `rgb(253 252 252/0.12)` | Rules between blocks                 |
| `hairline-strong` | `#646262`            | `#8a8686`               | Button borders, tab rule, underlines |
| `green`           | `#385144`            | `#c2d8c4`               | `[+]` markers, `[current]` only      |

Terminal card (follows the theme, so a light page never contains a dark
block):

| Token         | Light     | Dark      |
| ------------- | --------- | --------- |
| `term`        | `#f3f1f1` | `#0b0a0a` |
| `term-raised` | `#e7e3e3` | `#211e1e` |
| `term-text`   | `#201d1d` | `#fdfcfc` |
| `term-mute`   | `#5a5757` | `#a19f9f` |
| `term-green`  | `#385144` | `#c2d8c4` |

- Green is the only colour. It marks things; it never fills buttons or
  backgrounds (except the wordmark on the terminal card).
- Links are ink with an underline, not coloured.
- All text passes WCAG AA in both themes (checked with axe on every build of
  this design).

## Typography

- **JetBrains Mono** for every role, self-hosted. No sans-serif, no serif,
  no italics.
- Hierarchy comes from weight, not size: body and headings are both 16px;
  headings are bold. Captions and footer text are 14px with line-height 2.
- The only large "type" is the block-pixel wordmark (`Wordmark.tsx`), drawn
  as an SVG grid. The page's `h1` is the same name as real text for screen
  readers and search engines.
- Headings and buttons use Title Case ("Download CV", "Get in Touch",
  "GitHub Activity"); body copy uses sentence case.
- Keep visible characters inside the font's Latin subset: `→` and `↗` are
  not in it and would fall back to another font. Use the icons instead.

## Layout

- Content column `max-w-240` (960px); the terminal card sits in a wider
  `max-w-275` (1100px) frame.
- Sections: a bold label, a hairline rule, then content. Vertical rhythm
  `py-12` / `md:py-16` / `lg:py-24` (48 / 64 / 96px).
- Label and date columns are `16ch` wide, so rows line up across sections.
- Experience: rows with `divide-y divide-hairline`, split into two groups
  (Internships, then Education) so no list runs past five rows.
- Projects: the featured project as a full-width block on `surface-card`
  (image beside the text from `lg`), the rest in a 2x2 grid of hairline-bordered blocks (one cell per project).
  Two sections never share a layout.
- One label per intent: "Download CV" (nav and Resume), "Get in touch"
  (hero). Contact itself is the email row, with no extra button.

## Shape

- Interactive elements (buttons, snippets, thumbnails, prompt row):
  `rounded-sm` (4px).
- Containers (sections, the terminal card, the portrait): square.
- No shadows, gradients, blurs or glows anywhere.

## Components

- **Buttons**: primary is ink fill with canvas text; secondary is canvas with
  a `hairline-strong` border. Height 36px, `px-5`, `rounded-sm`.
- **Markers**: `[+]` bullets on list rows and `[*]` for the featured
  project. They are bullets, not icons.
- **Icons**: Phosphor, bold weight only, inlined in
  `src/components/icons.tsx` (MIT). Used for controls and link arrows:
  menu, download, copy, close, previous/next, theme, external links.
- **Contact block**: the email address large on `surface-card` with a
  `[copy]` button, GitHub and LinkedIn as plain links below. Every link to
  a profile is labelled with the site's name ("GitHub", "LinkedIn").
- **Command snippet**: tabs (`curl` / `wget`) over a `surface-card` block
  with a `[copy]` button. The commands are real.
- **Terminal card**: pixel wordmark, a prompt row (`> `), a comment line
  (`# `) and two real links on the left; the portrait on the right from
  `lg` (above the text on mobile). Nothing in it is fake UI.
- **Theme switch**: System / Light / Dark buttons, each an icon plus its
  name.

## Interaction

- Hover and focus increase contrast (stronger underline, darker border, row
  tint). Nothing fades on hover.
- Every interactive element has a visible `:focus-visible` outline in ink.
- Press feedback: `active:translate-y-px`.
- No scroll animations. Smooth scrolling only with `motion-safe`.

## Things this site does not do

- Purple-to-blue gradients, gradient text, grain, glows, glassmorphism.
- Emojis anywhere. Em or en dashes in visible text (the build fails on
  them; use a hyphen, comma or full stop).
- A badge above the headline, or small-caps eyebrow labels over sections.
- Colored left-border cards, rows of three icon boxes.
- Sections that fade in on scroll, cursor effects, buttons that fade on
  hover.
- Serif accent words, Inter, Space Grotesk, Instrument Serif.
- Labels laid over photos (captions go below, like the Video label).
- Buzzword copy: say what was built, with what, and what it
  did.

## Security constraints that affect the UI

- No inline `style` attributes (blocked by the Content Security Policy and
  by lint) and no custom CSS classes: use Tailwind utilities.
- No `dangerouslySetInnerHTML` or `innerHTML` (blocked by Trusted Types).
- No third-party requests from the page: no CDNs, embeds, analytics, web
  fonts or remote images. Everything is served from the site's own origin.
- Photos must have their EXIF/GPS metadata stripped before they are added.

## Credits

Adapted from `design-md/opencode.ai/DESIGN.md` in
[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
(commit `f6961238`), which is an analysis of the opencode.ai website. It is
used for its visual style only; this site has no connection to OpenCode.

```
MIT License

Copyright (c) 2026 VoltAgent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
