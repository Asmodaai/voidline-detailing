# QA notes

Verified on **8 October 2026** using Node.js 22.23.1, npm 10.9.8 and a Chromium-based browser.

## Build

- Clean `npm ci` succeeded.
- `npm run build` succeeded for both Czech and English static output.
- Vue 3.5.42 and Vite 8.3.0 are the resolved versions in the lockfile.
- An existing `source-map-js` advisory was addressed in the lockfile by updating to 1.2.2. The final npm audit reported zero known vulnerabilities at the time of verification.
- The project defines no separate lint or unit-test command; none is represented as having run.

## Browser checks

- Both `/` and `/en/` loaded with rendered content and the correct `html lang`.
- Checked 390, 768, 1280 and 1440 px widths in both languages: no document-wide horizontal overflow and no invalid section targets.
- Genuine screenshots were captured at 1440 × 900 and 390 × 844 for both languages.
- Keyboard-operated surface slider, FAQ expansion, mobile menu and Escape, section-preserving language switch, Czech and English demo enquiry confirmations.
- No browser console warnings or errors were observed in the tested local flows.
- Forms are local demonstrations. Confirmation states were checked in both languages; source inspection found no network submission or storage logic. CDP network observation of demo confirmation did not show a submission request.
- Form labels, native required/email constraints and keyboard controls were inspected. This is practical browser QA, not a claim of a complete accessibility certification.

## Production comparison

The existing Czech and English HTTPS demo URLs both returned HTTP 200. Their HTML matched the current local production build byte-for-byte after the lockfile patch. No replacement Netlify deployment was performed for this GitHub publication.

## Limits

These checks used Chromium. Physical phones, Safari and Firefox were not separately tested. The concept forms do not connect to a real booking, mailing or enquiry service.
