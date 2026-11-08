<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Figma → code workflow

Design source: Travelin — UI/UX Prototype (Kelompok 2)
`https://www.figma.com/design/BNyQUGRuVXHkAnq0Y2QnqG/Travelin---UI-UX-Prototype--Kelompok-2---Copy-`

Frame desain: 8 halaman desktop 1280×800 (01 Login s.d. 08 Dashboard Admin).
Tidak ada frame mobile di file; adaptasi mobile dibuat manual dan dicatat
sebagai deviasi. Token desain ada di `src/styles/tokens.css`.

The `figma` MCP server is configured in `../opencode.json`. Before writing UI code:

1. Ask for the **frame link** (`node-id=...`), not the whole page (`node-id=0-1`).
2. Call `get_design_context` for that node, and `get_screenshot` to check the visual.
3. Call `get_variable_defs` and put the design tokens (colors, spacing, radii,
   font sizes) into `src/app/globals.css` under `@theme` — do not hardcode hex
   values in components.
4. Reuse tokens via Tailwind utilities (`bg-primary`, `text-muted`, etc.).

Rules for generated code:

- Figma MCP defaults to React + Tailwind, which matches this project. Keep it.
- Prefer Server Components. Add `"use client"` only for real interactivity.
- Export images/assets from Figma into `public/`; never ship placeholder URLs.
- Build responsive from the mobile frame first, then scale up with `sm:`/`lg:`.
- Match the design's typography scale and spacing instead of "close enough".
