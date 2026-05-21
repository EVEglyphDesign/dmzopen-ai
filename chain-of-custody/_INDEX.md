# Chain of Custody — dmzopen.ai Intake

Append-only log. One file per intake event. Filename pattern: `<stack-slug>-<utc-yyyymmddThhmmssZ>.md`.

## Required fields per entry
- submission_id
- received_utc
- received_by (HCP surface identity)
- manifest_validation: pass/fail + notes
- watermark_check: pass/fail per artifact type
- sha256_verification: pass/fail
- status_assigned: `submitted-pending-apex` | `rejected-back-to-author`
- next_action

## Current status

| Stack | Status | Last event |
|---|---|---|
| Claude Enterprise (Chris) | AWAITING SUBMISSION | channel opened 2026-05-18 |
| Sovereign Enterprise (Lukas) | AWAITING SUBMISSION | channel opened 2026-05-18 |
| Perplexity | AWAITING AUTHORING | channel opened 2026-05-18 |


---

## EVE Glyph response-stamp

![EVE Glyph response-stamp — Canopy 4 — Exit (egress)](https://raw.githubusercontent.com/EVEglyphDesign/eve-glyph-methodology/main/archive/brand-assets/stamps/2026-05-21T215000Z-canopy-4-exit.png)

```
[stamp 2026-05-21T21:50:00Z pplx-computer/this-thread-2026-05-21/T12 surface:pplx-computer commit world:unavailable:bootstrap tool:claude-sonnet-4-6@perplexity-computer]
```

**Universal interaction stamp:**

- utc:            2026-05-21T21:50:00Z (2026-05-21T15:50:00-06:00 CST)
- surface:        pplx-computer
- session:        this-thread-2026-05-21 (opaque-unavailable to surfacing tool; honest absence per CANON-WORLD-CONDITION-HASH §8)
- turn:           12 (monotonic this-thread commit-order; exact Perplexity turn id unavailable)
- actor:          surface:pplx-computer
- intent:         commit
- locus:          canopy-4-exit
- world-hash:     unavailable:bootstrap
- surfacing-tool: claude-sonnet-4-6@perplexity-computer (per PROPOSED amendment, pending Jeff Theriault seal)
- platform-refs:
    - github:repo/dmzopen-ai
    - github:path/chain-of-custody/_INDEX.md

**Stamp remediation:** This footer block added under SIN-EVE-2026-0521-CANON-STAMPBREACH-06-001 to bring the artifact into conformance with CANON-RESPONSE-STAMP-GLYPH §1, CANON-INTERACTION-STAMP §2, CANON-WORLD-CONDITION-HASH §1, and the proposed surfacing-tool amendment.

---

© 2026 Dany Theriault. EVE "digital stem cell" glyph and glyph-based design principles — all rights reserved. Stewardship of rights of use and assignment for large public and institutional usage rests with the Pacific Utilities Design Council. Published as a time-stamped record of authorship and intent.

© Jeff Theriault · Theriault Family Method · EVE Glyph Umbrella · ToU governs.

*Pour le bien-être du peuple.*

— Theriault Family Method · EVE Glyph footprint · Terms of Use · Council Charter · Umbrella · Knight Triangle · First Principle Zero govern. Sealed.
