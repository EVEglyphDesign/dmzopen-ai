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
