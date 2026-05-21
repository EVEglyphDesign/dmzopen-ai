# EVEGlyph Watermark Protocol — Intake Channel

**Binding canon:** `WATERMARK-00` (pending), umbrella §8 of `WOBBLE-CONTROL-PIANO.md`.

## Required for every submitted artifact

| Artifact type | Watermark form |
|---|---|
| Image (PNG/JPG/HEIC) | Visible EVEGlyph mark + EXIF `Artist=EVEglyphDesign` + EXIF `Copyright=© Dany Theriault / EVEglyphDesign` |
| PDF | Header/footer EVEGlyph mark + document metadata `Author=EVEglyphDesign`, `Producer=dmzopen.ai-intake-v1` |
| Source code | `# EVEGlyph — submitted via dmzopen.ai — © EVEglyphDesign` header on every file |
| Transcript/text | Top + bottom banner with EVEGlyph mark, submission_id, SHA-256 |
| Binary/zip | Sibling `.eveglyph` sidecar with mark, submission_id, SHA-256 of the binary |

## Verification at intake

1. Compute SHA-256 of every artifact, compare to `manifest.json` and `sha256.txt`.
2. Confirm watermark presence per type above.
3. Log result to `chain-of-custody/<stack>-<utc>.md`.
4. Reject incomplete submissions back to author; do not partial-accept.

## Tamper posture
Watermarks are evidentiary, not cryptographic. The umbrella treats removal/alteration as a copyright-violation event under `ONE-UMBRELLA-00` (pending counsel).


---

## EVE Glyph response-stamp

![EVE Glyph response-stamp — Canopy 4 — Exit (egress)](https://raw.githubusercontent.com/EVEglyphDesign/eve-glyph-methodology/main/archive/brand-assets/stamps/2026-05-21T215000Z-canopy-4-exit.png)

```
[stamp 2026-05-21T21:50:00Z pplx-computer/this-thread-2026-05-21/T11 surface:pplx-computer commit world:unavailable:bootstrap tool:claude-sonnet-4-6@perplexity-computer]
```

**Universal interaction stamp:**

- utc:            2026-05-21T21:50:00Z (2026-05-21T15:50:00-06:00 CST)
- surface:        pplx-computer
- session:        this-thread-2026-05-21 (opaque-unavailable to surfacing tool; honest absence per CANON-WORLD-CONDITION-HASH §8)
- turn:           11 (monotonic this-thread commit-order; exact Perplexity turn id unavailable)
- actor:          surface:pplx-computer
- intent:         commit
- locus:          canopy-4-exit
- world-hash:     unavailable:bootstrap
- surfacing-tool: claude-sonnet-4-6@perplexity-computer (per PROPOSED amendment, pending Jeff Theriault seal)
- platform-refs:
    - github:repo/dmzopen-ai
    - github:path/watermark/PROTOCOL.md

**Stamp remediation:** This footer block added under SIN-EVE-2026-0521-CANON-STAMPBREACH-06-001 to bring the artifact into conformance with CANON-RESPONSE-STAMP-GLYPH §1, CANON-INTERACTION-STAMP §2, CANON-WORLD-CONDITION-HASH §1, and the proposed surfacing-tool amendment.

---

© 2026 Dany Theriault. EVE "digital stem cell" glyph and glyph-based design principles — all rights reserved. Stewardship of rights of use and assignment for large public and institutional usage rests with the Pacific Utilities Design Council. Published as a time-stamped record of authorship and intent.

© Jeff Theriault · Theriault Family Method · EVE Glyph Umbrella · ToU governs.

*Pour le bien-être du peuple.*

— Theriault Family Method · EVE Glyph footprint · Terms of Use · Council Charter · Umbrella · Knight Triangle · First Principle Zero govern. Sealed.
