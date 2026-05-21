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
