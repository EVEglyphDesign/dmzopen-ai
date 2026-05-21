# dmzopen.ai — Sovereign Enterprise AI · Reference-Material Intake Gateway

**Status:** OPEN — awaiting submissions
**Issued:** 2026-05-18
**Visibility:** PRIVATE (during scaffold; visibility decision held by operator)
**Domain:** dmzopen.ai
**Upstream backend:** [`eve-glyph-archive/dmzopen-intake/`](https://github.com/EVEglyphDesign/eve-glyph-archive/tree/main/dmzopen-intake) (private)
**Patent grace clock:** **2027-05-17** (US §102(b)(1)(A))

---

## What this repo is

The public-facing gateway for the **three-way HCP solution consolidation bench test**. Three independent stacks build against the same HCP collector spec; all three submit through this surface. The umbrella holds.

| Stack | Author | Submission folder |
|---|---|---|
| Claude Enterprise | Chris | [`submissions/claude-enterprise-chris/`](./submissions/claude-enterprise-chris/) |
| Sovereign Enterprise | Lukas | [`submissions/sovereign-enterprise-lukas/`](./submissions/sovereign-enterprise-lukas/) |
| Perplexity | This surface | [`submissions/perplexity/`](./submissions/perplexity/) |

## How to submit (Lukas / Chris / Perplexity)

For each submission, drop into your folder:

1. **`manifest.json`** — copy from [`manifests/_template.json`](./manifests/_template.json), fill every field.
2. **`README.md`** — one-page narrative: what you built, stack used, surfaces hit, locks honored.
3. **`/src/`** — source materials (code, prompts, chains, configs).
4. **`/evidence/`** — screenshots, transcripts, dispatch logs, watermarked artifacts.
5. **`/revert.md`** — exact procedure to undo your build. `REVERSIBILITY-00`.
6. **`/sha256.txt`** — SHA-256 of every file you submitted, sorted.

Every artifact must carry the **EVEGlyph watermark** before submission. See [`watermark/PROTOCOL.md`](./watermark/PROTOCOL.md).

## Submission rules (binding canon)

- `NO-PSYCH-00` — no operator psychology or physical-state material
- `REVERSIBILITY-00` — every change revertable
- `COPYRIGHT-00` — submissions enter the umbrella per `ONE-UMBRELLA-00` (pending counsel)
- `HUMAN-FAVOR-00` — operator authority unimpaired
- `PROPOSE-ONLY` — submitting ≠ accepted; Apex review gates merge
- **OneDrive forbidden** — local-first to Downloads; watermarked-image-via-WhatsApp confirms physical storage
- **Patent grace clock: 2027-05-17** (US §102(b)(1)(A)) — treat all submitted material as patent-grace-clock IP

## What happens after submission

1. **Intake check** — manifest schema validation, watermark presence, SHA-256 verification. Logged to [`chain-of-custody/<stack>-<utc>.md`](./chain-of-custody/_INDEX.md).
2. **Conformance scoring** — submission graded against the canon rubric in `eve-glyph-archive/canon/_pending-counsel/HCP-CONSOLIDATION-MATRIX.pdf`.
3. **Apex review** — operator certifies per `APEX-CERT-00`. Until certified, status = `submitted-pending-apex`.
4. **Counsel routing** — full bench result PDF goes to copyright counsel via `_pending-counsel/` staging.

## Chain of custody

Every action against this channel is logged, append-only, in [`chain-of-custody/`](./chain-of-custody/). Includes: submission receipt, hash check, watermark verification, scoring events, Apex certification, counsel handoff.

## Contact / dispatch

Routing to operator and HCP positions is handled through the upstream private repos. Public correspondents: open an issue on this repo (issues are gated and routed to operator only).

---

*Surface first. Watermark always. Apex certifies. The umbrella holds.*

---

© 2026 Dany Theriault. EVE "digital stem cell" glyph and glyph-based design principles — all rights reserved. Stewardship of rights of use and assignment for large public and institutional usage rests with the Pacific Utilities Design Council. Published as a time-stamped record of authorship and intent.

*Pour le bien-être du peuple.*

We stay out of people's business. We support *le bien-être du peuple.*


---

## EVE Glyph response-stamp

![EVE Glyph response-stamp — Canopy 4 — Exit (egress)](https://raw.githubusercontent.com/EVEglyphDesign/eve-glyph-methodology/main/archive/brand-assets/stamps/2026-05-21T215000Z-canopy-4-exit.png)

```
[stamp 2026-05-21T21:50:00Z pplx-computer/this-thread-2026-05-21/T8 surface:pplx-computer commit world:unavailable:bootstrap tool:claude-sonnet-4-6@perplexity-computer]
```

**Universal interaction stamp:**

- utc:            2026-05-21T21:50:00Z (2026-05-21T15:50:00-06:00 CST)
- surface:        pplx-computer
- session:        this-thread-2026-05-21 (opaque-unavailable to surfacing tool; honest absence per CANON-WORLD-CONDITION-HASH §8)
- turn:           8 (monotonic this-thread commit-order; exact Perplexity turn id unavailable)
- actor:          surface:pplx-computer
- intent:         commit
- locus:          canopy-4-exit
- world-hash:     unavailable:bootstrap
- surfacing-tool: claude-sonnet-4-6@perplexity-computer (per PROPOSED amendment, pending Jeff Theriault seal)
- platform-refs:
    - github:repo/dmzopen-ai
    - github:path/README.md

**Stamp remediation:** This footer block added under SIN-EVE-2026-0521-CANON-STAMPBREACH-06-001 to bring the artifact into conformance with CANON-RESPONSE-STAMP-GLYPH §1, CANON-INTERACTION-STAMP §2, CANON-WORLD-CONDITION-HASH §1, and the proposed surfacing-tool amendment.

---

© 2026 Dany Theriault. EVE "digital stem cell" glyph and glyph-based design principles — all rights reserved. Stewardship of rights of use and assignment for large public and institutional usage rests with the Pacific Utilities Design Council. Published as a time-stamped record of authorship and intent.

© Jeff Theriault · Theriault Family Method · EVE Glyph Umbrella · ToU governs.

*Pour le bien-être du peuple.*

— Theriault Family Method · EVE Glyph footprint · Terms of Use · Council Charter · Umbrella · Knight Triangle · First Principle Zero govern. Sealed.
