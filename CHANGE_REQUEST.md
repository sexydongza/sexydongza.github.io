# CHANGE_REQUEST.md

Change Request intake for the deployed GitHub Pages portfolio.

## 1. Current Context

- Target repository: `https://github.com/sexydongza/sexydongza.github.io.git`
- Live site: `https://sexydongza.github.io`
- Current deployed baseline: `e64f371`
- Scope of this document: user-requested changes after live review
- Status: `CHANGE_INTAKE`

## 2. Source Summary

The user reviewed the deployed site and requested a follow-up change set. The request should be split into independent Change Items so that each can be implemented and verified in a separate loop.

## 3. Change Items

| Change Item ID | Request Summary | Category | Current State | Baseline State | Implementation Method | Acceptance Criteria | Likely Files | Change Scope | Priority | Verification | HITL |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-001 | Replace placeholder identity content with the real name `Eunyoung Lee` and related portfolio copy | CONTENT | PASSED | Live portfolio with placeholder identity text | Update hero, about, projects, and contact text without changing layout | Site shows the correct name and consistent identity copy | `index.html` | Minimal content-only edits | HIGH | Local HTTP + browser text check | Yes if identity details are unclear |
| CR-002 | Convert the About/Projects text into polished English content with Android app and Kotlin experience | CONTENT | PASSED | Placeholder About/Projects text | Rewrite section copy while preserving structure | About and Projects read naturally in English and mention Android/Kotlin experience | `index.html` | Text only | HIGH | Local HTTP + content review | Yes if facts are unclear |
| CR-003 | Improve snake control behavior and provide a clearer play guide | GAME_CONTROL / NEW_FEATURE | PASSED | Playable snake prototype with keyboard, swipe, and buttons | Refine input handling and add a concise How to Play guide | Controls are clearer and the game remains intuitive | `index.html`, `script.js`, `styles.css` | Small, game-related edits only | HIGH | Keyboard, touch, and play guide verification | Yes if game rules conflict |
| CR-004 | Increase spacing and reduce the cramped feel between game board and controls | RESPONSIVE / UI_UX | PASSED | Current game shell and control panel | Adjust layout spacing, grid gaps, and section padding | Game area feels roomier on desktop and mobile | `styles.css` | Layout-only edits | MEDIUM | Mobile and desktop render check | No |
| CR-005 | Harmonize the overall color theme and visual emphasis | UI_UX | PASSED | Current warm light palette | Tune color tokens, contrast, and accent balance | The site feels more cohesive and polished | `styles.css` | Theme-only edits | MEDIUM | Visual review on desktop/mobile | No |
| CR-006 | Keep the navigation and page structure clear when the page grows | INFORMATION_ARCHITECTURE / RESPONSIVE | PASSED | Current single-page section layout | Refine spacing, anchors, and section order if needed | Sections remain readable and easy to scan | `index.html`, `styles.css` | Minimal structural edits | MEDIUM | Anchor and viewport check | No |

## 4. Change Request Loop

1. Intake the request and split it into Change Items.
2. Classify each item by category.
3. Confirm the baseline state and source commit.
4. Pick one Change Item only.
5. Apply the minimal code change required.
6. Run the same verifier for that item.
7. Record the result in `MEMORY.md`.
8. Repeat for the next item only if the previous one passes.

## 5. Change Item States

- `CHANGE_INTAKE`
- `CHANGE_PLANNED`
- `READY`
- `ACTING`
- `VERIFYING`
- `RETRYING`
- `PASSED`
- `BLOCKED`
- `HITL_REQUIRED`
- `DEPLOY_APPROVAL_REQUIRED`
- `DEPLOYED`

## 6. Guardrails

- Do not rewrite unrelated sections.
- Do not remove existing working features.
- Do not change deployment targets unless explicitly requested.
- Do not modify or expose tokens.
- Do not mix multiple Change Items into one retry.
- Do not relax tests to force a pass.

## 7. Current Working Note

- The live site is already deployed and responding with HTTP 200.
- CR-001 through CR-006 are now marked PASSED in this change set.
- The current review-driven backlog is complete.
- Any new user feedback should start a fresh change request intake.
- Any content changes that depend on the user's real background should be marked HITL_REQUIRED.





## 8. New Change Request Intake

- Status: `CHANGE_INTAKE`
- Target repository: `https://github.com/sexydongza/sexydongza.github.io.git`
- Live site: `https://sexydongza.github.io`
- Baseline commit: `e64f371`
- Human check boundary: any personal background beyond the provided email is still [사람 확인 필요]

### Change Items

| Change Item ID | Request Summary | Category | Current State | Likely Files | Verification | HITL |
|---|---|---|---|---|---|---|
| CR-007 | Replace the Contact email with `dldhdmsdud2@gmail.com` and remove the LinkedIn item | CONTENT | PASSED | `index.html` | Local HTTP + text check | No |
| CR-008 | Keep the snake game direction controls labeled Up, Left, Right, Down | GAME_CONTROL / SPEC_CHECK | PASSED | `index.html` | Text check only; current implementation already matches the request | No |
| CR-010 | Replace the Game direction button text with image icons | UI_UX / ACCESSIBILITY | PASSED | `index.html`, `styles.css`, `assets/dir-*.svg` | Local file and HTML text check | No |
### Working note

- `CR-007` is already completed in the current loop.
- `CR-008` is already satisfied by the current implementation, so no code change is needed.
- `CR-007` through `CR-010` are complete for this request.
- The new request backlog is complete.

